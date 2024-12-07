import React from "react";
import ColorInputs from "../components/ColorInputs/ColorInputs";
import ComplementaryColors from "../components/ComplementaryColors/ComplementaryColors";

function ColorConverterPage() {
  return (
    <div className="">
      <div className="mx-auto min-h-svh max-w-[1065px] pt-[44px]">
        <div className="text-center ">
          <h1 className="text-4xl font-semibold">Color Converter</h1>
          <p className="text-base font-normal mt-[10px]">
            Convert RGB, HEX, HSL, Tailwind CSS colors
          </p>
        </div>
        <div className="grid grid-flow-col grid-cols-12 gap-x-[15px] mt-[94px] ">
          <div className="col-span-7">
            <div className="flex flex-col gap-y-[93px]">
              <ColorInputs />
              <ComplementaryColors />
            </div>
          </div>
          <div className="col-span-4 col-start-9">test</div>
        </div>
      </div>
    </div>
  );
}

export default ColorConverterPage;
