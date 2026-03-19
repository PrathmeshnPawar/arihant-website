// /lib/greeksoft-ws.ts

type MarginCallback = (data: { spanMargin: number; expMargin: number }) => void;
type LTPCallback = (token: number, ltp: number) => void;

interface ConnectOptions {
    onOpen?: () => void;
    onClose?: () => void;
    onError?: () => void;
}

class GreeksoftWS {
    private ws: WebSocket | null = null;
    private authToken: string = "";
    private pendingCallbacks = new Map<string, MarginCallback>();
    private ltpCallbacks = new Map<number, LTPCallback>();
    private reconnectTimer: ReturnType<typeof setTimeout> | null = null;
    private options: ConnectOptions = {};

    connect(authToken: string, options: ConnectOptions = {}) {
        this.authToken = authToken;
        this.options = options;

        if (this.ws?.readyState === WebSocket.OPEN) return;

        try {
            // Update URL with actual Greeksoft WS endpoint once confirmed
            this.ws = new WebSocket(`ws://restapi.greeksoft.in:7267`);

            this.ws.onopen = () => {
                console.log("Greeksoft WS connected");

                // Authenticate on connect
                this.ws?.send(JSON.stringify({
                    request: {
                        auth: authToken,
                        request_type: "connect",
                    },
                }));

                this.options.onOpen?.();
            };

            this.ws.onmessage = (event) => {
                try {
                    const data = JSON.parse(event.data);

                    // Handle margin calculation response
                    if (data?.response?.streaming_type === "MarginCalculation") {
                        const marginData = data.response.data;
                        const requestId = data.response.requestId;
                        const cb = this.pendingCallbacks.get(requestId);
                        if (cb) {
                            cb({
                                spanMargin: marginData.NewPosSpanMargin ?? 0,
                                expMargin: marginData.NewPosExpMargin ?? 0,
                            });
                            this.pendingCallbacks.delete(requestId);
                        }
                    }

                    // Handle live LTP feed
                    if (data?.response?.streaming_type === "LiveFeed") {
                        const { token, ltp } = data.response.data;
                        this.ltpCallbacks.get(token)?.(token, ltp);
                    }
                } catch (err) {
                    console.error("WS message parse error:", err);
                }
            };

            this.ws.onclose = () => {
                console.log("Greeksoft WS disconnected");
                this.options.onClose?.();
                // Auto-reconnect after 3 seconds
                this.reconnectTimer = setTimeout(() => {
                    this.connect(this.authToken, this.options);
                }, 3000);
            };

            this.ws.onerror = () => {
                console.error("Greeksoft WS error");
                this.options.onError?.();
            };

        } catch (err) {
            console.error("WS connect failed:", err);
            this.options.onError?.();
        }
    }

    calculateMargin(
        token: number,
        exchange_segment: number,
        ltp: number,
        netqty: number,
        side: 1 | 2,
        gscid: string,
        callback: MarginCallback
    ) {
        if (!this.ws || this.ws.readyState !== WebSocket.OPEN) {
            throw new Error("WebSocket not connected");
        }

        const requestId = `margin_${Date.now()}_${Math.random()}`;
        this.pendingCallbacks.set(requestId, callback);

        this.ws.send(JSON.stringify({
            request: {
                data: {
                    gscid,
                    tokens: [{ token, exchange_segment, ltp, netqty, side }],
                },
                request_type: "subscribe",
                streaming_type: "MarginCalculation",
                requestId,
            },
        }));
    }

    subscribeLTP(tokens: number[], callback: LTPCallback) {
        tokens.forEach(token => this.ltpCallbacks.set(token, callback));

        this.ws?.send(JSON.stringify({
            request: {
                data: { tokens },
                request_type: "subscribe",
                streaming_type: "LiveFeed",
            },
        }));
    }

    unsubscribeLTP(tokens: number[]) {
        tokens.forEach(token => this.ltpCallbacks.delete(token));
    }

    get isConnected() {
        return this.ws?.readyState === WebSocket.OPEN;
    }

    disconnect() {
        if (this.reconnectTimer) clearTimeout(this.reconnectTimer);
        this.ws?.close();
        this.ws = null;
    }
}

// Singleton — one connection shared across the app
export const greeksoftWS = new GreeksoftWS();