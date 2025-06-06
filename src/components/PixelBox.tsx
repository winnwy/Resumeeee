import { type ReactNode } from "react";
import useThemeStore from "../stores/useThemeStore";

interface PixelBoxProps {
  children: ReactNode;
  className?: string;
}

const PixelBox = ({ children, className = ""}: PixelBoxProps) => {
  const {themeName} = useThemeStore();
  return (
    <div
      className={`border-2 p-4 mb-4 backdrop-blur-sm shadow-lg ${
        themeName === "light" ? "bg-white/30" : "bg-black/30"
      } ${className}`}
      style={{
        imageRendering: "pixelated",
        clipPath:
          "polygon(0 0, calc(100% - 12px) 0, 100% 12px, 100% 100%, 12px 100%, 0 calc(100% - 12px))",
      }}
    >
      {children}
    </div>
  );
};

export default PixelBox;
