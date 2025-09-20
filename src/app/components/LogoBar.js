import Image from "next/image";
import Track from "./Track";

export default function LogoBar() {
  const logobarimgs = ["google", "nike", "samsung", "apple", "adidas"];

  return (
    <div className="LogoBar">
      <div className="LogoBar__desktop">
        {logobarimgs.map((img, index) => (
          <div key={index} className="imgBox">
            <Image
              key={index}
              src={`/img/logobar/${img}.svg`}
              alt={img}
              width="0"
              height="0"
            />
          </div>
        ))}
      </div>
      <div className="LogoBar__mobile">
        <Track trackItems={logobarimgs} />
      </div>
    </div>
  );
}
