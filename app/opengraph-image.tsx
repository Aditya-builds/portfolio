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
          background: "#090909",
          color: "#f4f1ea",
          padding: "72px",
        }}
      >
        <div
          style={{
            fontSize: 22,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#c4bfb6",
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
              color: "#c4bfb6",
              maxWidth: 860,
            }}
          >
            AI features for a legacy Java product, and public work on agents and retrieval.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#c4bfb6" }}>github.com/Aditya-builds</div>
      </div>
    ),
    { ...size },
  );
}
