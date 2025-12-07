import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import { ChakraProvider } from "@/components/ui/chakra-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Toni Zane",
  description: "Toni Zane's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning lang="en">
      <body className={geistSans.variable}>
        <ChakraProvider>{children}</ChakraProvider>
      </body>
    </html>
  );
}
