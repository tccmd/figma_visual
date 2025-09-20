import Image from "next/image";

export default function Track({ trackItems}) { 
  return (
    <div className="track">
      {trackItems.map((item, index) => (
        <div className="track__item" key={index}>
          <Image
            src={`/img/logobar/${item}.svg`}
            alt="logo"
            width="0"
            height="0"
          />
        </div>
      ))}
      {trackItems.map((item, index) => (
        <div className="track__item" key={index}>
          <Image
            src={`/img/logobar/${item}.svg`}
            alt="logo"
            width="0"
            height="0"
          />
        </div>
      ))}
    </div>
  );
}