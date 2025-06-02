import { SiGithub } from "@icons-pack/react-simple-icons";
import BlinkingCursor from "./components/BlinkingCursor";
import PixelBox from "./components/PixelBox";
import RawLink from "./components/RawLink";
import SkillBox from "./components/SkilBox";
import ProjectBox from "./components/ProjectBox";

const themes = {
  vaporwave: {
    name: "Vaporwave",
    bg: "bg-purple-900",
    text: "text-pink-300",
    accent: "text-cyan-300",
    border: "border-pink-400",
    // section: "border-b-2 border-cyan-400",
    hover: "hover:text-cyan-200",
    shadow: "shadow-pink-400/50",
  },
};

const summaryText =
  "Master’s graduate with 1 year of hands-on experience in full-stack development. Skilled in building scalable applications using Next.js and .NET, with a strong foundation in both frontend and backend technologies.";

const skills = {
  languages: [
    "JavaScript",
    "TypeScript",
    "HTML/CSS",
    "C#",
    "Python",
    "C/C++",
    "SQL",
    "Shell scripting",
    "Rust",
  ],
  frameworks: [
    "React",
    "Next.js",
    "Tailwind CSS",
    ".Net 8",
    "Node.js",
    "Express.js",
    "Flask",
    "Django",
  ],
  tools: ["Git", "Docker", "VS Code", "Jest", "Cypress", "Jira"],
};

const projectBlotz = {
  title: "BLOTZ_TASK_APP",
  timeStart: "2025.04",
  timeEnd: "PRESENT",
  stack: "Next.js, .NET 8, SQL Server",
  items: [  
    "Blotz is an intelligent, efficient, and scalable To-Do List application designed to enhance productivity, streamline task management, and support both individual and team workflows. Whether for personal planning, team collaboration, or software development task management, Blotz provides a seamless experience that helps users stay organized and focused."
  ],
};

const HomePage = () => {
  return (
    <div className={`min-h-screen p-10 ${themes.vaporwave.bg}`}>
      <main className="max-w-3xl m-auto flex flex-col items-center">
        {/* Header */}
        <PixelBox
          className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}
        >
          <h1
            className={`${themes.vaporwave.accent} text-4xl font-bold text-center font-mono tracking-wider`}
          >
            WENYING ZHOU
          </h1>
          <h2
            className={`${themes.vaporwave.text} text-sm  text-center font-mono p-4 tracking-wide`}
          >
            &gt; SOFTWARE DEVELOPER.EXE{" "}
            <BlinkingCursor currentStyle={themes.vaporwave} />
          </h2>
          <div className="flex justify-around">
            <RawLink
              href={"https://github.com/winnwy"}
              className={`text-xs flex items-center gap-2 tracking-wide ${themes.vaporwave.accent} ${themes.vaporwave.hover}`}
            >
              <SiGithub className="size-4" />
              GITHUB.COM
            </RawLink>
          </div>
        </PixelBox>

        {/* Summary */}
        <PixelBox
          className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}
        >
          <h2
            className={`${themes.vaporwave.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; SYSTEM_SUMMARY.TXT
          </h2>
          <p
            className={`text-sm flex font-mono tracking-wide ${themes.vaporwave.text}`}
          >
            {summaryText}
          </p>
        </PixelBox>

        {/* Skills */}
        <PixelBox
          className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}
        >
          <h2
            className={`${themes.vaporwave.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; SKILLS.DB
          </h2>
          <SkillBox
            title="[LANGUAGES]"
            items={skills.languages}
            theme={themes.vaporwave}
          />
          <SkillBox
            title="[FRAMEWORKS]"
            items={skills.frameworks}
            theme={themes.vaporwave}
          />
          <SkillBox
            title="[TOOLS]"
            items={skills.tools}
            theme={themes.vaporwave}
          />
        </PixelBox>

        {/* Projects */}
        <PixelBox
          className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}
        >
          <h2
            className={`${themes.vaporwave.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; PROJECTS.EXE
               </h2>
            <div className="space-y-6 font-mono text-sm">
              <ProjectBox theme={themes.vaporwave} project={projectBlotz}/>
            </div>
   
        </PixelBox>
      </main>
    </div>
  );
};

export default HomePage;
