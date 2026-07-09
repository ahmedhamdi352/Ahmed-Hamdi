import { ImageResponse } from "next/og";

export const alt =
  "Ahmed Hamdi — Senior Full Stack Engineer building AI-enabled enterprise platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const focusAreas = [
  "Frontend Architecture",
  "Enterprise Dashboards",
  "Secure Internal Tools",
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at 75% 20%, rgba(34,197,94,.16), transparent 38%), #030712",
          color: "#f9fafb",
          display: "flex",
          height: "100%",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,.12)",
            borderRadius: "28px",
            display: "flex",
            flex: 1,
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              padding: "52px",
              width: "68%",
            }}
          >
            <div style={{ color: "#22c55e", display: "flex", fontSize: 28, fontWeight: 700 }}>
              AH
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  fontSize: 58,
                  fontWeight: 700,
                  letterSpacing: "-2px",
                  lineHeight: 1.05,
                }}
              >
                Ahmed Hamdi
              </div>
              <div style={{ color: "#cbd5e1", display: "flex", fontSize: 27, marginTop: 18 }}>
                Senior Full Stack Engineer
              </div>
              <div style={{ color: "#22c55e", display: "flex", fontSize: 22, marginTop: 26 }}>
                AI-enabled enterprise platforms
              </div>
            </div>
          </div>
          <div
            style={{
              background: "rgba(7,17,31,.72)",
              borderLeft: "1px solid rgba(255,255,255,.08)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
              justifyContent: "center",
              padding: 34,
              width: "32%",
            }}
          >
            {focusAreas.map((label, index) => (
              <div
                key={label}
                style={{
                  alignItems: "center",
                  background: "rgba(255,255,255,.035)",
                  border: "1px solid rgba(255,255,255,.1)",
                  borderRadius: 14,
                  color: "#cbd5e1",
                  display: "flex",
                  fontSize: 17,
                  gap: 12,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    background: "#22c55e",
                    borderRadius: 999,
                    display: "flex",
                    height: 9,
                    opacity: 1 - index * 0.2,
                    width: 9,
                  }}
                />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    size,
  );
}
