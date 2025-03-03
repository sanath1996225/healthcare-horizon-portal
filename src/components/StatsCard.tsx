
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
  icon?: ReactNode;
  accentColor?: string;
  bgColor?: string;
  textColor?: string;
}

const StatsCard = ({ 
  value, 
  label, 
  description, 
  className,
  icon,
  accentColor = "bg-blue-500",
  bgColor = "bg-white",
  textColor = "text-blue-600"
}: StatsCardProps) => {
  return (
    <div className={cn(
      `${bgColor} p-6 rounded-2xl shadow-soft border border-gray-100 overflow-hidden relative transition-all duration-300 hover:shadow-card`,
      className
    )}>
      <div className={`absolute top-0 left-0 w-2 h-full ${accentColor}`}></div>
      <div className="flex items-start">
        {icon && (
          <div className="mr-4 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center flex-shrink-0">
            {icon}
          </div>
        )}
        <div className={icon ? "text-left" : "text-center w-full"}>
          <p className={`text-4xl font-bold ${textColor} mb-2`}>{value}</p>
          <p className="text-navy-900 font-medium mb-2">{label}</p>
          {description && (
            <p className="text-sm text-navy-600">{description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
