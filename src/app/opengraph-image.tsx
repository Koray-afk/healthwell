import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const alt = siteConfig.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "linear-gradient(135deg, #ffffff 0%, #eef3ff 50%, #dbe6ff 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 16,
              background: "#2563eb",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 32,
              fontWeight: 700,
            }}
          >
            ♥
          </div>
          <div style={{ fontSize: 36, fontWeight: 600, color: "#0f172a" }}>
            {siteConfig.brand}
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 600,
              color: "#0f172a",
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            {siteConfig.tagline}
          </div>
          <div
            style={{
              fontSize: 28,
              color: "#475569",
              maxWidth: 880,
              lineHeight: 1.4,
            }}
          >
            {siteConfig.description}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              fontSize: 22,
              color: "#2563eb",
              fontWeight: 600,
              letterSpacing: 4,
              textTransform: "uppercase",
            }}
          >
            Health · Wellness · Wellbeing
          </div>
          <div style={{ fontSize: 22, color: "#64748b" }}>
            healthwell.example.com
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
