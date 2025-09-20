import Image from "next/image";

export default function TestimonialCard () { 
  return (
    <div className="TestimonialCard">
      <p className="SubTitle">
        {`This is a template Figma file, \nturned into code using Anima. \nLearn more at AnimaApp.com`}
      </p>
      <div className="ClientImageInfo">
        <Image
          className="ClientImage"
          src="/img/ClientImage.png"
          alt="ClientImage"
          width="50"
          height="50"
        />
        <div className="ClientInfoStars">
          <p className="Stars">
            {Array.from({ length: 5 }).map((_, index) => (
              <Image
                key={index}
                src="/img/Star.svg"
                alt="star"
                width="20"
                height="20"
              />
            ))}
          </p>
          <p className="SubTitle">Gemma Nolen</p>
          <p className="BodyText">Google</p>
        </div>
      </div>
    </div>
  );
}