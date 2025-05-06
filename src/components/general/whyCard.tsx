import { Card, Typography } from "@material-tailwind/react";

interface CardProps {
  title: string;
  titleB: string;
  description: string;
  logo?: string;
}

const WhyCard = ({ title, titleB, description, logo }: CardProps) => {
  return (
    <Card className="bg-[#EEECE2] rounded-xl py-7 px-5 border-[3px] border-[#C1BBA4] w-full mb-6 md:mb-0">
      {logo && <img src={logo} alt="reliable" className="w-15" />}
      <div className="mt-5">
        <Typography
          variant="h4"
          className="text-[#000000] mt-5 text-2xl font-semibold"
        >
          {title}
        </Typography>
        <Typography
          variant="h4"
          className="text-[#000000] text-2xl font-semibold"
        >
          {titleB}
        </Typography>
      </div>
      <Typography className="text-[#5C6C72] mt-2 text-lg">
        {description}
      </Typography>
    </Card>
  );
};

export default WhyCard;
