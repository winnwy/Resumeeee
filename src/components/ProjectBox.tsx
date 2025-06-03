import { useState } from "react";
import RawLink from "./RawLink";
import type { Theme } from "../stores/useThemeStore";
import useThemeStore from "../stores/useThemeStore";

type Project = {
  title: string;
  timeStart: string;
  timeEnd: string;
  stack: string;
  items: string[];
  href: string;
};

interface ProjectBoxProps {
  project: Project;
  theme: Theme;
}

const ProjectBox = (
  { project, theme }: ProjectBoxProps,
) => {
  const { title, timeStart, timeEnd, stack, items, href } = project;
  const [isExpanded, setIsExpanded] = useState(false);
  const {themeName} = useThemeStore()

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`p-4 ${theme.border} border ${
        themeName === 'light' ? "bg-white/30" : "bg-black/30"
      }`}
    >
      <div className={`flex justify-between tracking-wide ${theme.accent}`}>
        <RawLink href={href} className={`${theme.hover} font-bold font-mono`}>
          {title}
        </RawLink>

        <div className={` ${theme.text} hidden text-xs md:block`}>
          {timeStart} - {timeEnd}
        </div>
      </div>
      <div className={`${theme.text} text-xs`}>
        {"[STACK]"} {stack}
      </div>

      {/* Desktop: Show all items */}
      <div className="hidden md:block">
        {items.map((item, idx) => (
          <div key={idx} className={`${theme.text} text-sm pt-2`}>
            &gt; {item}
          </div>
        ))}
      </div>

      {/* Mobile: Collapsible items */}
      <div className="block md:hidden">
        {items.map((item, idx) => (
          <div key={idx} className={`${theme.text} text-sm pt-2`}>
            &gt; {isExpanded ? item : `${item.slice(0, 50)}...`}
          </div>
        ))}

        {items.some((item) => item.length > 50) && (
          <button
            onClick={toggleExpanded}
            className={`${theme.accent} ${theme.hover} text-xs mt-2 font-mono tracking-wide cursor-pointer`}
          >
            {isExpanded ? "[-] COLLAPSE" : "[+] EXPAND"}
          </button>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;
