import Image from "next/image";

export default function SkillsCard({ skill }) {
  return (
    <div className="SkillsCard">
      <Image
        src={skill.src}
        alt="Skill Icon"
        width="124"
        height="124"
        className="SkillIcon"
      />
      <div className="TitleDescription">
        <p className="title H3">{skill.title}</p>
        <p className="text BodyText">{skill.text}</p>
      </div>
    </div>
  );
}