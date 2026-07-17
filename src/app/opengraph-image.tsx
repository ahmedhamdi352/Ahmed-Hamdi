import { ImageResponse } from "next/og";

export const alt =
  "Ahmed Hamdi — Senior Full Stack Engineer building AI-enabled enterprise platforms";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const focusAreas = [
  "Secure AI Platforms",
  "Enterprise Dashboards",
  "Full-Stack Systems",
];

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "stretch",
          background:
            "radial-gradient(circle at 18% 12%, rgba(184,137,77,.15), transparent 34%), radial-gradient(circle at 88% 5%, rgba(47,79,62,.11), transparent 30%), #f7f3ea",
          color: "#171412",
          display: "flex",
          height: "100%",
          padding: "64px",
          width: "100%",
        }}
      >
        <div
          style={{
            background: "#fffdf8",
            border: "1px solid rgba(23,20,18,.1)",
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
            <div style={{ color: "#2f4f3e", display: "flex", fontFamily: "serif", fontSize: 34 }}>
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
              <div style={{ color: "#5f574f", display: "flex", fontSize: 27, marginTop: 18 }}>
                Senior Full Stack Engineer
              </div>
              <div style={{ color: "#b8894d", display: "flex", fontSize: 22, marginTop: 26 }}>
                AI-enabled enterprise platforms
              </div>
            </div>
          </div>
          <div
            style={{
              background: "#17221c",
              borderLeft: "1px solid rgba(23,20,18,.1)",
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
                  background: "rgba(255,253,248,.06)",
                  border: "1px solid rgba(255,253,248,.12)",
                  borderRadius: 14,
                  color: "#f7f3ea",
                  display: "flex",
                  fontSize: 17,
                  gap: 12,
                  padding: 18,
                }}
              >
                <div
                  style={{
                    background: "#b8894d",
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
