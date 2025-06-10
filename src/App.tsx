import { SiGithub } from "@icons-pack/react-simple-icons";
import BlinkingCursor from "./components/BlinkingCursor";
import PixelBox from "./components/PixelBox";
import RawLink from "./components/RawLink";
import SkillBox from "./components/SkilBox";
import ProjectBox from "./components/ProjectBox";
import ExperienceBox from "./components/ExperienceBox";
import EducationBox from "./components/EducationBox";
import Footer from "./components/Footer";
import useThemeStore from "./stores/useThemeStore";
import ThemeToggler from "./components/ThemeToggler";

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
  role: "Team Project • Tech Lead",
  timeStart: "2025.04",
  timeEnd: "PRESENT",
  stack: "Next.js, AZURE OpenAI, .NET 8, SQL Server",
  items: [
    "BlotzTaskApp is a smart To-Do app that uses AI to make managing tasks easier and more intuitive. It can break down big goals into smaller steps for you, turn your voice into text tasks on the fly, and even suggest new tasks based on what you’re working on. Designed to help you stay organized without the hassle, Blotz feels like having a personal assistant that helps you get things done—whether you’re planning solo or working with a team.",
  ],
  href: "https://blotz-task-app.vercel.app/",
};

const projectHopDot = {
  title: "HOPDOT",
  role: "Team Project • Full Stack Developer",
  timeStart: "2025.05",
  timeEnd: "PRESENT",
  stack: "Next.js, Python",
  items: [
    "HopDot is a web application that helps runners map custom running routes between two locations, passing through required waypoints and matching a target distance. It’s ideal for runners who want precision in training routes or want to explore new paths with specific goals in mind. This web version serves as a prototype of the core functionality before full Garmin Connect IQ integration.",
  ],
  href: "https://github.com/winnwy/HopDot",
};

const projectTriolingo = {
  title: "TRIOLINGO",
  role: "Personal Project • Full Stack Developer",
  timeStart: "2025.02",
  timeEnd: "2025.03",
  stack: "Next.js, PostgreSQL",
  items: [
    "Triolingo is a language learning platform inspired by Duolingo, designed to make mastering new languages engaging and fun. It combines structured lessons with gamification elements like a hearts system, leaderboards, and quest milestones to keep learners motivated. ",
  ],
  href: "https://triolingo-chi.vercel.app/",
};

const expBreak = {
  title: "[VOLUNTEER] UI/UX Design",
  timeStart: "2025.04",
  timeEnd: "PRESENT",
  company: "The Break Inc.",
  items: [
    "Collaborate with dev team to revamp UI using Figma.",
    "Contribute to frontend redevelopment using React.",
    "Participate in brainstorming and wireframing sessions.",
  ],
  location: "Remote",
};

const expCodeCamp = {
  title: "LEAD INSTRUCTOR/ FACILITATOR",
  timeStart: "2025.05",
  timeEnd: "PRESENT",
  company: "Code Camp",
  items: [
    "Deliver Code Camp programs to students.",
    "Support students through project-based learning, debugging, and live feedback.",
    "Collaborate with co-instructors to adapt lesson plans for diverse learning needs.",
  ],
  location: "Sydney, NSW",
};

const eduUNSW = {
  university: "University of New South Wales",
  timeStart: "2023.02",
  timeEnd: "2025.02",
  degreeName: "Master of IT",
  achievement: "Graduate with Distinction",
  location: "Sydney, NSW",
};

const eduZJNU = {
  university: "Zhejiang Normal University",
  timeStart: "2018.09",
  timeEnd: "2022.06",
  degreeName: "Bachelor of Computer Science",
  achievement: "Graduate with Excellence",
  location: "China",
};

const HomePage = () => {
  const { theme } = useThemeStore();
  return (
    <div className={`min-h-screen p-10 ${theme.bg}`}>
      <ThemeToggler className="block top-1 right-1 md:hidden" />
      <main className="max-w-3xl m-auto flex flex-col items-center">
        {/* Header */}
        <PixelBox className={`w-full ${theme.border} ${theme.shadow} relative`}>
          <ThemeToggler className="hidden top-4 right-4  md:block" />
          <h1
            className={`${theme.accent} text-4xl font-bold text-center font-mono tracking-wider pt-2`}
          >
            WENYING ZHOU
          </h1>
          <h2
            className={`${theme.text} text-sm text-center font-mono p-4 tracking-wide`}
          >
            &gt; SOFTWARE DEVELOPER.EXE <BlinkingCursor theme={theme} />
          </h2>
          <div className="flex justify-around pb-2">
            <RawLink
              href={"https://github.com/winnwy"}
              className={`text-xs flex items-center gap-2 tracking-wide ${theme.accent} ${theme.hover}`}
            >
              <SiGithub className="size-4" />
              GITHUB.COM
            </RawLink>
          </div>
        </PixelBox>

        {/* Summary */}
        <PixelBox className={`w-full ${theme.border} ${theme.shadow}`}>
          <h2
            className={`${theme.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; SYSTEM_SUMMARY.TXT
          </h2>
          <p className={`text-sm flex font-mono tracking-wide ${theme.text}`}>
            {summaryText}
          </p>
        </PixelBox>

        {/* Skills */}
        <PixelBox className={`w-full ${theme.border} ${theme.shadow}`}>
          <h2
            className={`${theme.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; SKILLS.DB
          </h2>
          <SkillBox
            title="[LANGUAGES]"
            items={skills.languages}
            theme={theme}
          />
          <SkillBox
            title="[FRAMEWORKS]"
            items={skills.frameworks}
            theme={theme}
          />
          <SkillBox title="[TOOLS]" items={skills.tools} theme={theme} />
        </PixelBox>

        {/* Projects */}
        <PixelBox className={`w-full ${theme.border} ${theme.shadow}`}>
          <h2
            className={`${theme.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; PROJECTS.EXE
          </h2>
          <div className="space-y-6 font-mono text-sm">
            <ProjectBox theme={theme} project={projectBlotz} />
            <ProjectBox theme={theme} project={projectHopDot} />
            <ProjectBox theme={theme} project={projectTriolingo} />
          </div>
        </PixelBox>

        {/* Experience */}
        <PixelBox className={`w-full ${theme.border} ${theme.shadow}`}>
          <h2
            className={`${theme.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; EXPERIENCE.SYS
          </h2>
          <div className="space-y-6 font-mono text-sm">
            <ExperienceBox theme={theme} experience={expCodeCamp} />
            <ExperienceBox theme={theme} experience={expBreak} />
          </div>
        </PixelBox>

        {/* Education */}
        <PixelBox className={`w-full ${theme.border} ${theme.shadow}`}>
          <h2
            className={`${theme.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; EDUCATION.LOG
          </h2>
          <div className="space-y-6 font-mono text-sm">
            <EducationBox theme={theme} education={eduUNSW} />
            <EducationBox theme={theme} education={eduZJNU} />
          </div>
        </PixelBox>

        {/* Footer */}
        <Footer theme={theme} />
      </main>
    </div>
  );
};

export default HomePage;
