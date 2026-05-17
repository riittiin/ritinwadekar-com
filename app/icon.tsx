import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#1a1d22",
          borderRadius: 14,
          color: "#c4e06e",
          fontFamily: "monospace",
          fontWeight: 700,
          fontSize: 38,
        }}
      >
        R
      </div>
    ),
    { ...size }
  );
}
