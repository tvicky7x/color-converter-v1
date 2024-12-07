import React from "react";
import ColorInputFieldWithLabel from "./ColorInputFieldWithLabel";

function ColorInputs() {
  return (
    <div className="">
      <div className="flex flex-col gap-y-[61px]">
        <div className="grid grid-flow-col grid-cols-7 gap-x-[15px]">
          <ColorInputFieldWithLabel label={"HEX"} inputValue="#000000" />
          <ColorInputFieldWithLabel
            label={"RGB"}
            inputValue="rgb(0, 0, 0)"
            className={"col-start-5"}
          />
        </div>
        <div className="grid grid-flow-col grid-cols-7 gap-x-[15px]">
          <ColorInputFieldWithLabel label={"HSL"} inputValue="hsl(0, 0%, 0%)" />
          <ColorInputFieldWithLabel
            label={"Tailwind"}
            inputValue="black"
            className={"col-start-5"}
            note={"Closest Tailwind Color Match"}
          />
        </div>
      </div>
    </div>
  );
}

export default ColorInputs;
