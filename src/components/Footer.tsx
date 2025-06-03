import BlinkingCursor from "./BlinkingCursor";

type Theme = {
  border: string;
  text: string;
  accent: string;
};
interface ThemeProps {
  theme: Theme;
}
const Footer = ({ theme }: ThemeProps) => {
  const { border, text } = theme;
  const year = new Date().getFullYear();
  return (
    <div
      className={`w-full border-t-2  mt-4 ${border} ${text}`}
      aria-hidden="true"
    >
        <div className="font-mono text-center text-xs pt-2 md:text-sm">
            RESUME.HTML • {year} • POWERED_BY_REACT.JS {" "}
            <BlinkingCursor theme={theme}/>
        </div>
        
    </div>
  );
};

export default Footer;
