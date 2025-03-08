import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";

export const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NITC Case Study | Nepal E-Governance Analysis",
  description:
    "Technical analysis of National Information Technology Centre's role in Nepal's digital transformation. Case study by Sachet Subedi, Bishal Gurung & Binit Shrestha under Tribhuvan University.",
  keywords: [
    "Nepal e-governance",
    "NITC case study",
    "Digital Nepal",
    "Government IT infrastructure",
    "ICT development Nepal",
  ],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
