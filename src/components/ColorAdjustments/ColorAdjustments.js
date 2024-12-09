import React from "react";
import SaturationValueGradient from "./SaturationValueGradient";
import "./ColorAdjustments.css";
import ColorAdjustmentSlider from "./ColorAdjustmentSlider";

function ColorAdjustments() {
  return (
    <div className="grid grid-flow-row h-full content-between gap-y-[40px]  ">
      <div>
        <SaturationValueGradient />
      </div>
      <div className="grid grid-flow-row gap-y-[24px]">
        <ColorAdjustmentSlider
          min={0}
          max={360}
          value={360}
          label={"HUE"}
          className={"hueGradient"}
        />
        <ColorAdjustmentSlider
          min={0}
          max={360}
          value={360}
          label={"HUE"}
          className={"saturationGradient"}
        />
        <ColorAdjustmentSlider
          min={0}
          max={360}
          value={360}
          label={"HUE"}
          className={"valueGradient"}
        />
        <ColorAdjustmentSlider
          min={0}
          max={360}
          value={360}
          label={"HUE"}
          className={"opacityGradient"}
        />
      </div>
    </div>
  );
}

export default ColorAdjustments;
