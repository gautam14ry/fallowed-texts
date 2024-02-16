import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";

import "./globals.css";
import StoryblokProvider from "@/providers/storyblok-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fallowed Texts",
  description:
    "Look deep into nature, and then you will understand everything better.",
};

storyblokInit({
  accessToken: "gAA1QgQk0Ogc3ay5sQEclgtt",
  use: [apiPlugin],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <StoryblokProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </StoryblokProvider>
  );
}
