import { SiGithub } from "@icons-pack/react-simple-icons";
import BlinkingCursor from "./components/BlinkingCursor";
import PixelBox from "./components/PixelBox";
import RawLink from "./components/RawLink";
import SkillBox from "./components/SkilBox";
import ProjectBox from "./components/ProjectBox";
import ExperienceBox from "./components/ExperienceBox";
import EducationBox from "./components/EducationBox";
import Footer from "./components/Footer";

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
  stack: "Next.js, AZURE OpenAI, .NET 8, SQL Server",
  items: [
    "BlotzTaskApp is a smart To-Do app that uses AI to make managing tasks easier and more intuitive. It can break down big goals into smaller steps for you, turn your voice into text tasks on the fly, and even suggest new tasks based on what you’re working on. Designed to help you stay organized without the hassle, Blotz feels like having a personal assistant that helps you get things done—whether you’re planning solo or working with a team.",
  ],
  href: "https://blotz-task-app.vercel.app/",
};

const projectHopDot = {
  title: "HOPDOT",
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
}

const eduZJNU = {
  university:"Zhejiang Normal University",
  timeStart: "2018.09",
  timeEnd: "2022.06",
  degreeName: "Bachelor of Computer Science",
  achievement: "Graduate with Excellence",
  location:"China",
}

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
            <BlinkingCursor  theme={themes.vaporwave} />
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
            <ProjectBox theme={themes.vaporwave} project={projectBlotz} />
            <ProjectBox theme={themes.vaporwave} project={projectHopDot} />
            <ProjectBox theme={themes.vaporwave} project={projectTriolingo} />
          </div>
        </PixelBox>

        {/* Experience */}
        <PixelBox
          className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}
        >
          <h2
            className={`${themes.vaporwave.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; EXPERIENCE.SYS
          </h2>
          <div className="space-y-6 font-mono text-sm">
            <ExperienceBox theme={themes.vaporwave} experience={expCodeCamp} />
            <ExperienceBox theme={themes.vaporwave} experience={expBreak} />
          </div>
        </PixelBox>

        {/* Education */}
        <PixelBox
          className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}
        >
          <h2
            className={`${themes.vaporwave.accent} text-xl font-bold font-mono pb-4 tracking-wider`}
          >
            &gt; EDUCATION.LOG
          </h2>
          <div className="space-y-6 font-mono text-sm">
            <EducationBox theme={themes.vaporwave} education={eduUNSW}/>
            <EducationBox theme={themes.vaporwave} education={eduZJNU}/>
          </div>
        </PixelBox>

        {/* Footer */}
        <Footer theme={themes.vaporwave}/>
      </main>
    </div>
  );
};

export default HomePage;
