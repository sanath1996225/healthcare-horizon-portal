
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  imageSrc?: string;
  link?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  className,
  imageSrc,
  link
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "relative bg-white p-8 rounded-xl shadow-soft transition-all duration-300 hover:shadow-card hover:-translate-y-1 border border-gray-100 overflow-hidden group",
      className
    )}>
      {imageSrc && (
        <div className="mb-6 -mx-8 -mt-8">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-navy-900">{title}</h3>
      <p className="text-navy-700 mb-4">{description}</p>
      
      {link && (
        <a 
          href={link} 
          className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
        >
          Learn more
          <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </a>
      )}
    </div>
  );
};

export default ServiceCard;
