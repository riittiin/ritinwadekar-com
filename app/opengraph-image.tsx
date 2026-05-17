import { ImageResponse } from "next/og";
import { SITE } from "@/lib/data";

export const alt = `${SITE.name}, ${SITE.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#1a1d22",
          color: "#f6f7f9",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 2,
            color: "#a9aebb",
            textTransform: "uppercase",
          }}
        >
          <div
            style={{
              width: 12,
              height: 12,
              borderRadius: "50%",
              background: "#c4e06e",
              boxShadow: "0 0 18px #c4e06e",
            }}
          />
          {SITE.name} · {SITE.location}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            I find where your systems
          </div>
          <div style={{ fontSize: 84, fontWeight: 500, lineHeight: 1.02, letterSpacing: "-0.035em" }}>
            are not optimizing,
          </div>
          <div
            style={{
              fontSize: 84,
              fontStyle: "italic",
              fontFamily: "serif",
              lineHeight: 1.12,
              color: "#c4e06e",
              letterSpacing: "-0.025em",
            }}
          >
            and rebuild them with AI that does.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: 2,
            color: "#a9aebb",
            textTransform: "uppercase",
          }}
        >
          <div>{SITE.role}</div>
          <div style={{ color: "#c4e06e" }}>● AVAILABLE FOR WORK</div>
        </div>
      </div>
    ),
    { ...size }
  );
}
