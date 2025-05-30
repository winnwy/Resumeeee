import React, { type ReactNode } from "react";

interface PixelBoxProps {
  children: ReactNode;
  className?: string;
  currentStyle: {
    border: string;
    shadow: string;
  };
}

const PixelBox = ({
  children,
  className = "",
  currentStyle,
}: PixelBoxProps) => (
  <div
    className={`
        ${currentStyle.border} border-2 p-4 mb-4
        bg-black/30 backdrop-blur-sm
        shadow-lg ${currentStyle.shadow}
        ${className}
      `}
    style={{
      imageRendering: "pixelated",
      clipPath:
        "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
    }}
  >
    {children}
  </div>
);
export default PixelBox;
