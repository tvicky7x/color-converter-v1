import React from "react";

function ColorAdjustmentSlider({ value, label, min, max, className }) {
  return (
    <div>
      <div className="flex items-center justify-between">
        <label className="font-semibold text-base capitalize ">{label}</label>
        <input
          value={value}
          type="number"
          className="w-[75px] h-[27px] bg-white/[12%] border-[0.77px] text-center border-white rounded-[2px]"
        />
      </div>
      <input
        type="range"
        min={min}
        max={max}
        className={`appearance-none mt-[10px] w-full h-[10px] rounded-full outline-none [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[hsl(0,100%,50%)] hueGradient `}
      />
    </div>
  );
}

export default ColorAdjustmentSlider;
