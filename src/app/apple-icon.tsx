import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 70% 20%, rgba(34,197,94,.22), transparent 50%), #030712",
          border: "6px solid #1f2937",
          borderRadius: 38,
          color: "#22c55e",
          display: "flex",
          fontSize: 70,
          fontWeight: 700,
          height: "100%",
          justifyContent: "center",
          letterSpacing: "-6px",
          width: "100%",
        }}
      >
        AH
      </div>
    ),
    size,
  );
}
