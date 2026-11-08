import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

// TODO(brand): replace this generated placeholder with the real OG image.
// Either design it here, or delete this file and drop an opengraph-image.png
// (1200x630) into src/app/. Add a twitter-image.png too if it should differ.
export const alt = `${siteConfig.name}: ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ffffff",
        color: "#000000",
        fontFamily: "sans-serif",
      }}
    >
      {/* TODO(brand): swap this text for the lowercase black rec'd wordmark. */}
      <div style={{ fontSize: 160, fontWeight: 700, letterSpacing: -6 }}>{siteConfig.name}</div>
      <div style={{ fontSize: 40, marginTop: 16 }}>{siteConfig.tagline}</div>
    </div>,
    size,
  );
}
