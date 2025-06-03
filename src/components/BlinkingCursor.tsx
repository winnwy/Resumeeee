type Theme = {
  accent: string;
};
interface ThemeProps {
  theme: Theme;
}

const BlinkingCursor = ({ theme }:ThemeProps) => {
  return (
      <span className={`inline-block animate-pulse font-mono ${theme.accent}`}>█</span>
  );
};

export default BlinkingCursor;
