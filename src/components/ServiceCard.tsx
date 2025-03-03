
import { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const ServiceCard = ({ title, description, icon, className }: ServiceCardProps) => {
  return (
    <div className={cn(
      "relative bg-white p-8 rounded-xl shadow-soft transition-all duration-300 hover:shadow-card border border-gray-100 card-hover",
      className
    )}>
      <div className="mb-5 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-emerald-50 text-emerald-600">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3 text-navy-900">{title}</h3>
      <p className="text-navy-700">{description}</p>
    </div>
  );
};

export default ServiceCard;
