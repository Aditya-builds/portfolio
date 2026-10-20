import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const alt = "Aditya Kumar, AI engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0A0B10",
          color: "#F3F1EA",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#E8C27A",
          }}
        >
          AI Engineer
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 92, lineHeight: 0.95, letterSpacing: "-0.04em" }}>
            Aditya Kumar
          </div>
          <div
            style={{
              marginTop: 24,
              fontSize: 30,
              lineHeight: 1.35,
              color: "#C8C4BA",
              maxWidth: 860,
            }}
          >
            Building LLM features inside legacy Java systems.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#C8C4BA" }}>github.com/Aditya-builds</div>
      </div>
    ),
    { ...size },
  );
}
