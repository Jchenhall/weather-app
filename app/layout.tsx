import "./globals.css";
import type { Metadata } from "next";
import { Lobster_Two, Roboto } from "next/font/google";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-robot",
});
const lobster = Lobster_Two({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-lobster",
});

export const metadata: Metadata = {
  title: "Weather App",
  description: "An app that shows the weather forecast for the next 7 days",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lobster.variable} w-full h-full`}>
        {children}
      </body>
    </html>
  );
}
