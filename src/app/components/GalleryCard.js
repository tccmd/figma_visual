import Image from "next/image";

export default function GalleryCard({index}) { 
  return (
    <div className="GalleryCard">
      <Image
        src={`/img/Image-${index}.png`}
        alt={`image ${index + 1}`}
        width="395"
        height="330"
      />
      <div className="TitleDescription">
        <h3 className="SubTitle">Project title</h3>
        <p className="BodyText">UI, Art drection</p>
      </div>
    </div>
  );
}