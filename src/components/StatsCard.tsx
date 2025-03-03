
import { cn } from '@/lib/utils';

interface StatsCardProps {
  value: string;
  label: string;
  description?: string;
  className?: string;
}

const StatsCard = ({ value, label, description, className }: StatsCardProps) => {
  return (
    <div className={cn(
      "bg-white p-6 rounded-xl shadow-soft border border-gray-100 text-center",
      className
    )}>
      <p className="text-4xl font-bold text-emerald-600 mb-2">{value}</p>
      <p className="text-navy-900 font-medium mb-2">{label}</p>
      {description && (
        <p className="text-sm text-navy-600">{description}</p>
      )}
    </div>
  );
};

export default StatsCard;
