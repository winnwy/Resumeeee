interface SkillBoxProps {
    title: string;
    items: string[];
    theme: {
        accent: string;
        text: string;
    }
}
const SkillBox = ({title='[TITLE]', items=[], theme}: SkillBoxProps) => {
    return (     <div>
      <h3 className={`${theme.accent} text-sm font-bold font-mono tracking-wide`}>
        {title}
      </h3>
      <p className={`${theme.text} text-sm font-mono tracking-wide pb-2`}>
        {items.join(', ')}
      </p>
    </div>);
}
 
export default SkillBox;