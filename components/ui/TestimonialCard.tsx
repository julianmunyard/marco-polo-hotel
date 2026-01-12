import Image from "next/image";

export interface Testimonial {
  id: string;
  rating: number;
  text: string;
  author: string;
  avatar?: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="card relative p-10 mb-8 shadow-lg">
      <div className="absolute top-6 left-6 text-yellow-400 text-2xl">
        ★★★★★
      </div>
      <p className="text-base leading-relaxed mb-6 mt-4">{testimonial.text}</p>
      <div className="flex items-center gap-4">
        {testimonial.avatar && (
          <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden flex-shrink-0">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200"></div>
          </div>
        )}
        <div className="font-semibold">{testimonial.author}</div>
      </div>
      <div className="absolute bottom-6 right-6 text-gray-300 text-xl">
        ❝
      </div>
    </div>
  );
}
