import { Inter } from "next/font/google";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shree Raghuvir Foundation",
  description: "Social Worker",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* <head /> */}
      {/* <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <link rel="icon" type="image/x-icon" href="/logo.png" /> */}
      <body className={inter.className}>{children}</body>
    </html>
  );
}
