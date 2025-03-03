
import { cn } from '@/lib/utils';
import { Quote } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  imageSrc?: string;
  className?: string;
}

const Testimonial = ({ 
  quote, 
  author, 
  position, 
  company, 
  imageSrc, 
  className 
}: TestimonialProps) => {
  return (
    <div className={cn(
      "relative bg-white p-8 rounded-xl shadow-soft flex flex-col card-hover",
      className
    )}>
      <div className="text-blue-400 mb-4">
        <Quote size={32} />
      </div>
      <p className="italic text-navy-800 mb-6">{quote}</p>
      <div className="mt-auto flex items-center">
        {imageSrc ? (
          <div className="mr-4 w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border-2 border-blue-100">
            <img 
              src={imageSrc} 
              alt={author} 
              className="w-full h-full object-cover"
            />
          </div>
        ) : (
          <div className="mr-4 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
            <span className="text-blue-500 font-semibold text-lg">
              {author.charAt(0)}
            </span>
          </div>
        )}
        <div>
          <p className="font-semibold text-navy-900">{author}</p>
          <p className="text-sm text-navy-600">{position}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
