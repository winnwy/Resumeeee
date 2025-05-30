type BlinkingCursorProps = {
  currentStyle: {
    accent: string;
  };
};

const BlinkingCursor = ({ currentStyle }: BlinkingCursorProps) => {
  return (
      <span className={`inline-block animate-pulse font-mono ${currentStyle.accent}`}>█</span>
  );
};

export default BlinkingCursor;
