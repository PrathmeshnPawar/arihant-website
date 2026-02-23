"use client";

import React, { useMemo } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Box,
  TextField,
  Stack,
  Divider,
} from "@mui/material";

/* ================= TYPES ================= */

export interface Contract {
  contract: string;
  expiry: string;
  lotSize: number;
  nrmlMargin: number;
}

interface Props {
  open: boolean;
  onClose: () => void;
  contract: Contract | null;
  setSelectedContract: React.Dispatch<React.SetStateAction<Contract | null>>;
  cashAvailable: number | string;
  setCashAvailable: React.Dispatch<React.SetStateAction<number | string>>;
}

/* ================= HELPERS ================= */

const calculateLots = (
  cash?: number | string,
  marginPerLot?: number,
): number => {
  const cashNum = Number(cash);

  if (!Number.isFinite(cashNum) || !Number.isFinite(marginPerLot)) return 0;
  if (!marginPerLot || marginPerLot <= 0) return 0;

  return Math.floor(cashNum / marginPerLot);
};

/* ================= COMPONENT ================= */

export default function CalculationModal({
  open,
  onClose,
  contract,
  setSelectedContract,
  cashAvailable,
  setCashAvailable,
}: Props) {
  const lotsAllowed = useMemo(() => {
    return calculateLots(cashAvailable, contract?.nrmlMargin);
  }, [cashAvailable, contract]);

  if (!contract) return null;

  const handleContractChange = (field: keyof Contract, value: string) => {
    setSelectedContract((prev) =>
      prev ? { ...prev, [field]: Number(value) } : prev,
    );
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="xs" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, fontSize: 16 }}>
        Calculate Lots
      </DialogTitle>

      <DialogContent>
        <Stack spacing={2.2}>
          {/* Contract Info */}
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: 14 }}>
              {contract.contract}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              Expiry: {contract.expiry}
            </Typography>
          </Box>

          <Divider />

          {/* Editable Lot Size */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">Lot Size</Typography>
            <TextField
              variant="standard"
              type="number"
              value={contract.lotSize}
              onChange={(e) => handleContractChange("lotSize", e.target.value)}
              inputProps={{ style: { textAlign: "right", width: 80 } }}
            />
          </Box>

          {/* Editable NRML Margin */}
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography variant="body2">NRML Margin</Typography>
            <TextField
              variant="standard"
              type="number"
              value={contract.nrmlMargin}
              onChange={(e) =>
                handleContractChange("nrmlMargin", e.target.value)
              }
              inputProps={{ style: { textAlign: "right", width: 100 } }}
            />
          </Box>

          <Divider />

          {/* Cash Input */}
          <TextField
            label="Cash Available"
            size="small"
            type="number"
            fullWidth
            value={cashAvailable}
            onChange={(e) => setCashAvailable(e.target.value)}
          />

          {/* Result */}
          <Box
            sx={{
              textAlign: "center",
              py: 1.2,
              borderRadius: 2,
              bgcolor: "#F9FAFB",
            }}
          >
            <Typography variant="caption" color="text.secondary">
              Lots Allowed
            </Typography>

            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                fontVariantNumeric: "tabular-nums",
              }}
            >
              {lotsAllowed}
            </Typography>
          </Box>
        </Stack>
      </DialogContent>
    </Dialog>
  );
}
