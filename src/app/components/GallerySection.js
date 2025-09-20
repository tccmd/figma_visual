import GalleryCard from "./GalleryCard";

export default function GallerySection() { 
  return (
    <section className="GallerySection">
      <h2 className="H2">Latest work</h2>
      <div className="gallery-grid">
        { 
          Array.from({ length: 6 }).map((_, index) => (
            <GalleryCard key={index} index={index} />
          ))
        }
      </div>
    </section>
  );
}