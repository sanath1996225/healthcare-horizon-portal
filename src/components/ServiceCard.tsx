
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
  imageSrc?: string;
}

const ServiceCard = ({ 
  title, 
  description, 
  icon, 
  className,
  imageSrc 
}: ServiceCardProps) => {
  return (
    <div className={cn(
      "relative bg-white p-8 rounded-xl shadow-soft transition-all duration-300 hover:shadow-card border border-gray-100 card-hover overflow-hidden",
      className
    )}>
      {imageSrc && (
        <div className="mb-6 -mx-8 -mt-8">
          <img 
            src={imageSrc} 
            alt={title} 
            className="w-full h-48 object-cover"
          />
        </div>
      )}
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-50 text-blue-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-navy-900">{title}</h3>
      <p className="text-navy-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
