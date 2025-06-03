import useThemeStore, { type Theme } from "../stores/useThemeStore";

type Experience = {
  title: string;
  timeStart: string;
  timeEnd: string;
  company: string;
  items: string[];
  location: string;
};
interface ExperienceBoxProps {
  experience: Experience;
  theme: Theme;
}

const ExperienceBox = (
  { experience, theme }: ExperienceBoxProps,
) => {
  const {themeName} = useThemeStore();
  const { title, timeStart, timeEnd, company, items, location } = experience;

  return (
    <div
      className={`p-4 ${theme.border} border ${
        themeName==='light' ? "bg-white/30" : "bg-black/30"
      }`}
    >
      <div className={`flex justify-between tracking-wide ${theme.accent}`}>
        <div className={`font-bold `}>{title}</div>
        <div className={`hidden text-xs ${theme.text} md:block`}>
          {timeStart} - {timeEnd}
        </div>
      </div>
      <div
        className={`flex justify-between tracking-wide text-xs ${theme.text} `}
      >
        <span>{company}</span>
        <span>{location}</span>
      </div>
      {items.map((item, idx) => (
        <div key={idx} className={`${theme.text} text-sm pt-2`}>
          &gt; {item}
        </div>
      ))}
    </div>
  );
};

export default ExperienceBox;
