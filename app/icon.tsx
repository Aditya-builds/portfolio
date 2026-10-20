import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 32, height: 32 };
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
          background: "#0A0B10",
          color: "#E8C27A",
          fontSize: 14,
          letterSpacing: "-0.04em",
        }}
      >
        AK
      </div>
    ),
    { ...size },
  );
}
