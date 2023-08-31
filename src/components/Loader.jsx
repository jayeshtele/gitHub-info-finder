import React from "react";
import { Vortex } from "react-loader-spinner";

export default function Loader() {
  return (
    <div className="w-screen h-[88vh] flex items-center justify-center">
      <Vortex
        visible={true}
        height="80"
        width="80"
        ariaLabel="vortex-loading"
        wrapperStyle={{}}
        wrapperClass="vortex-wrapper"
        colors={[
          "#2ecc71",
          "#2c2c54",
          "#2ecc71",
          "#2c2c54",
          "#2c2c54",
          "#2ecc71",
        ]}
      />
    </div>
  );
}
