import React from "react";

function ComplementaryColors() {
  return (
    <div>
      <div>
        <h2 className="font-medium text-xl">Complementary Color Schemes</h2>
        <p className="font-normal text-sm mt-[6px] ">
          Explore harmonious combinations for your chosen color.
        </p>
      </div>
      <div className="grid grid-cols-11 gap-x-[10px] mt-[24px] h-[84px] ">
        {Array(11)
          .fill("#000000")
          .map((item, index) => {
            return (
              <div key={index} className="bg-white rounded-[5px] relative">
                <p className="absolute rotate-[270deg] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-medium text-sm text-black">
                  {item}
                </p>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ComplementaryColors;
