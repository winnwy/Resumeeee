type Experience = {
  title: string;
  timeStart: string;
  timeEnd: string;
  company: string;
  items: string[];
};

type Theme = {
  border: string;
  hover: string;
  accent: string;
  text: string;
};

interface ExperienceBoxProps {
  experience: Experience;
  theme: Theme;
}

const ProjectBox = ({ experience, theme }: ExperienceBoxProps) => {
  const { title, timeStart, timeEnd, company, items } = experience;

  return (
    <div className={`p-4 ${theme.border} border bg-black/30`}>
      <div className={`flex justify-between tracking-wide  ${theme.accent}`}>
        <div className="font-bold">{title}</div>
        <div className="hidden text-xs md:block">
          {timeStart} - {timeEnd}
        </div>
      </div>
      <div className={`${theme.text} text-xs`}>{company}</div>

      {items.map((item, idx) => (
        <div key={idx} className={`${theme.text} text-sm pt-2`}>
          &gt; {item}
        </div>
      ))}
    </div>
  );
};

export default ProjectBox;
