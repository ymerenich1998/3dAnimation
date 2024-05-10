"use client";
import dynamic from "next/dynamic";
import { Children } from "react";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function Water({ children }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        backgroundSize: "cover",
        background: "#FCF9F1",
      }}
    >
      <WaterWave
        style={{ width: "100%", height: "100%" }}
        dropRadius={50}
        perturbance={0.05}
        interactive={true}
      >
        {({ show }) => <div>{children}</div>}
      </WaterWave>
    </div>
  );
}
