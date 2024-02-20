/** 1. Tag it as a client component */
"use client";
import { storyblokInit, apiPlugin } from "@storyblok/react/rsc";
import { ReactNode } from "react";

/** 2. Initialize it as usual */
storyblokInit({
  accessToken: process.env.SB_TOKEN,
  use: [apiPlugin],
});

export default function StoryblokProvider({
  children,
}: {
  children: ReactNode;
}) {
  return children;
}
