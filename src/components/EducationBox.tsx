import useThemeStore, { type Theme } from "../stores/useThemeStore";

type Education = {
  university: string;
  timeStart: string;
  timeEnd: string;
  degreeName: string;
  achievement: string;
  location: string;
};

interface EducationBoxProps {
  education: Education;
  theme: Theme;
}

const EducationBox = (
  { education, theme }: EducationBoxProps,
) => {
  const {themeName} = useThemeStore()
  const { university, timeStart, timeEnd, degreeName, achievement, location } =
    education;

  return (
    <div
      className={`p-4 ${theme.border} border ${
        themeName === 'light' ? "bg-white/30" : "bg-black/30"
      }`}
    >
      <div className={`flex justify-between tracking-wide ${theme.accent}`}>
        <div className={`font-bold `}>{`${university}`}</div>
        <div className={`hidden text-xs ${theme.text} md:block`}>
          {timeStart} - {timeEnd}
        </div>
      </div>
      <div
        className={`flex justify-between tracking-wide text-sm ${theme.text} `}
      >
        <div className="flex flex-col">
          <span>{degreeName}</span>
          <span>{`(${achievement})`}</span>
        </div>

        <span className="hidden md:block">{location}</span>
      </div>
    </div>
  );
};

export default EducationBox;
