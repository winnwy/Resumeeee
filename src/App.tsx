import { SiGithub } from "@icons-pack/react-simple-icons";
import BlinkingCursor from "./components/BlinkingCursor";
import PixelBox from "./components/PixelBox";

const themes = {
  vaporwave: {
    name: "Vaporwave",
    bg: "bg-purple-900",
    text: "text-pink-300",
    accent: "text-cyan-300",
    border: "border-pink-400",
    section: "border-b-2 border-cyan-400",
    hover: "hover:text-cyan-200",
    shadow: "shadow-pink-400/50",
  },
};
const HomePage = () => {
  return (
    <div className={`h-screen p-10 ${themes.vaporwave.bg}`}>
      <main className="max-w-3xl m-auto flex justify-center">
        <PixelBox currentStyle={themes.vaporwave} className="w-full">
            <h1 className={`${themes.vaporwave.accent} text-4xl font-bold text-center font-mono`}>WENYING ZHOU</h1>
            <h2 className={`${themes.vaporwave.text} text-sm  text-center font-mono p-2`}>&gt; SOFTWARE DEVELOPER.EXE <BlinkingCursor currentStyle={themes.vaporwave}/></h2>
            <div className="flex justify-around">
                <div className={`${themes.vaporwave.accent} text-xs font-mono flex items-center gap-1 `}>[<SiGithub className="size-4"/>GITHUB.COM]</div>
            </div>
            

        </PixelBox>
      </main>
    </div>
  );
};

export default HomePage;
