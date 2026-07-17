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
            "radial-gradient(circle at 70% 20%, rgba(184,137,77,.22), transparent 50%), #17221c",
          border: "6px solid #2f4f3e",
          borderRadius: 38,
          color: "#f7f3ea",
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
