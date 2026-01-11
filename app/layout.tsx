import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Vercoe Property Maintenance",
  description: "Professional property maintenance and construction services",
  icons: {
    icon: "/vpm-favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
