import Image from "next/image";

export default function LogoBar() {
  const logobarimgs = ["google", "nike", "samsung", "apple", "adidas"];

  return (
    <div className="LogoBar">
      {logobarimgs.map((img, index) => (
        <div key={index} className="imgBox">
          <Image src={`/img/logobar/${img}.svg`} alt={img} width='0' height='0' />
        </div>
      ))}
    </div>
  );
}
