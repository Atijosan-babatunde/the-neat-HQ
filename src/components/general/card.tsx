import { Card, Typography } from "@material-tailwind/react";
import { SquareArrowOutUpRight } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  className?: string;
}

const CustomCard = ({ title, description, className }: CardProps) => {
  return (
    <Card
      className={`bg-[#E0DDD1] rounded-lg p-4 sm:p-6 md:p-8 border-2 sm:border-[3px] border-[#7A8F8C] ${className}`}
    >
      <div className="flex justify-between items-center">
        <Typography
          variant="h4"
          className="text-[#2E3538] font-semibold text-lg sm:text-xl md:text-2xl"
        >
          {title}
        </Typography>
        <SquareArrowOutUpRight className="text-[#2E3538]" size={20} />
      </div>
      <Typography className="text-[#5C6C72] mt-2 font-medium text-sm sm:text-base">
        {description}
      </Typography>
    </Card>
  );
};

export default CustomCard;
