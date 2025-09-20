import SkillsCard from "./SkillsCard";

export default function SkillsSection() {

  const skills = [
    {
      src: "/img/SkillsCardIcon-1.png",
      title: "Product Design",
      text: "This is a template Figma file, turned \ninto code using Anima. Learn more at \nAnimaApp.com",
    },
    {
      src: "/img/SkillsCardIcon-2.png",
      title: "Visual Design",
      text: "This is a template Figma file, turned \ninto code using Anima. Learn more at \nAnimaApp.com",
    },
    {
      src: "/img/SkillsCardIcon-3.png",
      title: "Art Direction",
      text: "This is a template Figma file, turned \ninto code using Anima. Learn more at \nAnimaApp.com",
    },
    {
      src: "/img/SkillsCardIcon-4.png",
      title: "UI/UX",
      text: "This is a template Figma file, turned \ninto code using Anima. Learn more at \nAnimaApp.com",
    },
  ];

  return (
    <section className="SkillsSection">
      <div className="part1">
        {skills.slice(0, 3).map((skill, index) => (
          <SkillsCard key={index} skill={skill} />
        ))}
      </div>
      {/* <div className="part2">
        { 
          skills.map((skill, index) => (
            <SkillsCard key={index} skill={skill} />
          ))
        }
      </div> */}
    </section>
  );
}