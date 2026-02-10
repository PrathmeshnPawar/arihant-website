export const siteConfig = [
  {
    label: "Products",
    children: [
      { label: "Equity", href: "/products/equity" },
      { label: "Mutual Funds", href: "/products/mutual-funds" },
      { label: "IPO", href: "/products/ipo" },
    ],
  },
  {
    label: "Tools",
    children: [
      { label: "SIP Calculator", href: "/tools/sip" },
      { label: "EMI Calculator", href: "/tools/emi" },
      { label: "Margin Calculator", href: "/tools/margin" },
    ],
  },
  {
    label: "Research",
    children: [
      { label: "Blog", href: "/research/blog" },
      { label: "Market News", href: "/research/news" },
    ],
  },
  {
    label: "Company",
    children: [
      { label: "About Us", href: "/(marketing)/about-us" },
      { label: "Contact", href: "/(marketing)/contact" },
      { label: "Disclaimer", href: "/(marketing)/disclaimer" },
    ],
  },
  {
    label: "Account",
    children: [
      { label: "Open Account", href: "/auth/open-account" },
      { label: "Login", href: "/auth/login" },
    ],
  },
];
