import TestimonialCard from "./TestimonialCard";

export default function TestimonialSection() { 
  return (
    <section className="TestimonialSection">
      <h2 className="H2">Testimonial</h2>
      <div className="testimonial-grid">
        {Array.from({ length: 6 }).map((_, index) => (
          <TestimonialCard key={index} />
        ))}
      </div>
    </section>
  );
}