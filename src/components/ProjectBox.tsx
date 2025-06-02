import RawLink from "./RawLink";

type Project = {
  title: string;
  timeStart: string;
  timeEnd: string;
  stack: string;
  items: string[];
};

type Theme = {
  border: string;
  hover: string;
  accent: string;
  text: string;
};

interface ProjectBoxProps {
  project: Project;
  theme: Theme;
}

const ProjectBox = ({ project, theme }: ProjectBoxProps) => {
  const { title, timeStart, timeEnd, stack, items } = project;

  return (
    <div className={`p-4 ${theme.border} border bg-black/30`}>
      <div className={`flex justify-between tracking-wide ${theme.accent}`}>
        <RawLink
          href="https://blotz-task-app.vercel.app/"
          className={`${theme.hover} font-bold font-mono`}
        >
          {title}
        </RawLink>

        <div className="hidden text-xs md:block">
          {timeStart} - {timeEnd}
        </div>
      </div>
      <div className={`${theme.text} text-xs`}>
        {"[STACK]"} {stack}
      </div>
      {items.map((item, idx) => (
        <div key={idx} className={`${theme.text} text-sm pt-2`}>
          &gt; {item}
        </div>
      ))}
    </div>
  );
};

export default ProjectBox;
