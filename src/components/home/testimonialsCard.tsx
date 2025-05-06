import { Card, Typography } from "@material-tailwind/react";

interface CardProps {
  description: string;
  logo?: string;
  name?: string;
}

const TestimonialCard = ({ description, logo, name }: CardProps) => {
  return (
    <Card className="bg-[#EEECE2] rounded-xl py-5 md:py-7 px-6 md:px-10 border-[2px] border-[#C1BBA4] w-full flex flex-col min-h-[230px] md:h-[270px]">
      <Typography className="text-[#5C6C72] mt-2 text-base md:text-lg">
        {description}
      </Typography>
      <div className="mt-auto flex items-center gap-3">
        <img
          src={logo}
          alt="avatar"
          className="w-12 h-12 md:w-15 md:h-15 rounded-full object-cover"
        />
        {name && (
          <Typography className="font-medium text-base md:text-lg text-[#5C6C72]">
            {name}
          </Typography>
        )}
      </div>
    </Card>
  );
};

export default TestimonialCard;
