import { ThemeProvider } from "@/components/theme-provider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aesthatic UI",
  description:
    "Beautifully designed components that you can copy and paste into your apps.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          {/* <ModeToggle /> */}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
