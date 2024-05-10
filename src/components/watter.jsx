"use client";
import dynamic from "next/dynamic";

const WaterWave = dynamic(() => import("react-water-wave"), { ssr: false });

export default function Water({ children, imageUrl = "/123.jpg" }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
      }}
    >
      <WaterWave
        imageUrl={imageUrl}
        style={{ width: "100%", height: "100%" }}
        dropRadius={40}
        perturbance={0.15}
        resolution={200}
        interactive={true}
      >
        {({ show }) => <div>{children}</div>}
      </WaterWave>
    </div>
  );
}
