import Image from "next/image";

export default function HeaderSection() {
  return (
    <section className="HeaderSection">
      <div className="part1">
        <div className="HeaderContent">
          <div className="TitleAndSubTitle">
            <p className="SubTitle">Branding | Image making</p>
            <p className="H1">Visual Designer</p>
            <p className="BodyText">
              This is a template Figma file, turned into code using Anima.{" "}
              <br />
              Learn more at AnimaApp.com
            </p>
          </div>
          <button>Contact</button>
        </div>
        <Image
          src="/img/HeaderImage-1.png"
          alt="HeaderImage 1"
          width="480"
          height="360"
          className="HeaderImage-1"
        />
      </div>
      {/* <div className="part2">
        <Image
          src="/img/Frame-1.png"
          alt="Frame-1"
          width="153"
          height="446"
          className="Frame-1"
        />
        <div className="HeaderContent">
          <div className="TitleAndSubTitle">
            <p className="SubTitle">Branding | Image making</p>
            <p className="H1">Visual<br/>Designer</p>
            <p className="BodyText">
              This is a template Figma file, turned into code using Anima.{" "}
              <br />
              Learn more at AnimaApp.com
            </p>
          </div>
          <button>Contact</button>
        </div>
        <Image
          src="/img/Frame-2.png"
          alt="Frame-2"
          width="153"
          height="446"
          className="Frame-2"
        />
      </div> */}
    </section>
  );
 }