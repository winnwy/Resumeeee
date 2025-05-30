type RawLinkProps = {
  href: string;
  children: React.ReactNode;
  currentStyle: {
    accent: string;
    hover: string;
  };
  className?: string;
};

const RawLink = ({
  href,
  children,
  currentStyle,
  className = "",
}: RawLinkProps) => {
  return (
    <a
      href={href}
      className={`${currentStyle.accent} ${currentStyle.hover} ${className} font-mono font-bold transition-colors duration-200`}
      style={{ textShadow: `0 0 10px currentColor` }}
      target="none"
    >
      [{children}]
    </a>
  );
};

export default RawLink;
