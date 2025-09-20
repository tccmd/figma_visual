import Image from "next/image";

export default function ContactSection() {
  const socials = ["discord", "facebook", "dribbble", "nstagram", "behance"];

  return (
    <section className="ContactSection">
      <h2 className="H2">Lets work together</h2>
      <div className="ContactSectionContent">
        <div className="ContactInfo">
          <div className="TitleDescription BodyText">
            This is a template Figma file, turned into code using Anima. Learn
            more at AnimaApp.com This is a template Figma file, turned into code
            using Anima. Learn more at AnimaApp.com
          </div>
          <div className="SocialLinks">
            {socials.map((social, index) => (
              <Image
                key={index}
                src={`/img/socials/${social}.svg`}
                alt={social}
                width="36"
                height="36"
              />
            ))}
          </div>
        </div>
        <div className="ContactForm">
          <div className="InputFields">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <button>Submit</button>
        </div>
      </div>
    </section>
  );
}
