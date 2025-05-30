import { SiGithub } from "@icons-pack/react-simple-icons";
import BlinkingCursor from "./components/BlinkingCursor";
import PixelBox from "./components/PixelBox";
import RawLink from "./components/RawLink";

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
const HomePage = () => {
  return (
    <div className={`h-screen p-10 ${themes.vaporwave.bg}`}>
      <main className="max-w-3xl m-auto flex flex-col items-center">
        <PixelBox className={`w-full ${themes.vaporwave.border} ${themes.vaporwave.shadow}`}>
            <h1 className={`${themes.vaporwave.accent} text-4xl font-bold text-center font-mono`}>WENYING ZHOU</h1>
            <h2 className={`${themes.vaporwave.text} text-sm  text-center font-mono p-4`}>&gt; SOFTWARE DEVELOPER.EXE <BlinkingCursor currentStyle={themes.vaporwave}/></h2>
            <div className="flex justify-around">
                <RawLink href={"https://github.com/winnwy"} className={`text-xs flex items-center gap-2 ${themes.vaporwave.accent} ${themes.vaporwave.hover}`}><SiGithub className="size-4"/>GITHUB.COM</RawLink>
            </div>
        </PixelBox>
      </main>
    </div>
  );
};

export default HomePage;
