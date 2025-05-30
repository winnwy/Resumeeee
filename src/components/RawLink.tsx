type RawLinkProps = {
  href: string;
  children: React.ReactNode;
  className?: string;
};

const RawLink = ({ href, children, className = "" }: RawLinkProps) => {
  return (
    <a
      href={href}
      className={`${className} font-mono font-bold transition-colors duration-200`}
      style={{ textShadow: `0 0 10px currentColor` }}
      target="none"
    >
      [{children}]
    </a>
  );
};

export default RawLink;
