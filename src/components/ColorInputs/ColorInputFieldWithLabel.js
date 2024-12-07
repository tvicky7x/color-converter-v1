import React from "react";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

function ColorInputFieldWithLabel({
  className,
  label,
  inputValue = "#000000",
  note,
}) {
  return (
    <div
      className={`col-span-3 flex flex-col gap-y-[20px] relative ${className} `}
    >
      <h2 className="font-medium text-xl capitalize">{label}</h2>
      <div className="relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-[12px] aspect-square w-[30px] rounded-full bg-black border-[0.5px] border-white/50 " />
        <input
          className="w-full h-[60px] bg-white/[12%] border-[0.8px] border-white rounded-[4px] ps-[66px] pe-[46px] font-normal text-base "
          value={inputValue}
        />
        <ContentCopyIcon className="absolute right-[12px] top-1/2 -translate-y-1/2 cursor-pointer " />
      </div>
      {note && (
        <p className="absolute font-normal text-xs right-0 -bottom-[8px] translate-y-full ">
          {note}
        </p>
      )}
    </div>
  );
}

export default ColorInputFieldWithLabel;
