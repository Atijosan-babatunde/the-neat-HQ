import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  image: string;
  title: string;
  description: string;
  imageAlt?: string;
  onButtonClick?: () => void;
}

export function BlogCard({
  image,
  title,
  description,
  imageAlt = "Service image",
  onButtonClick,
}: BlogCardProps) {
  return (
    <Card className="h-full flex flex-col overflow-hidden">
      <CardHeader
        floated={false}
        shadow={false}
        color="transparent"
        className="m-0 rounded-none h-48 md:h-64"
      >
        <img
          src={image}
          className="w-full h-full object-cover"
          alt={imageAlt}
        />
      </CardHeader>
      <CardBody className="p-4 md:p-8 bg-[#EEECE2] flex flex-col flex-grow justify-between text-center">
        <div className="flex flex-col">
          <Typography
            variant="h4"
            color="blue-gray"
            className="text-blue-gray-900 font-semibold mb-3 min-h-[2.5rem] line-clamp-2"
          >
            {title}
          </Typography>
          <Typography
            variant="small"
            className="text-[#5C6C72] font-normal min-h-[4.5rem] line-clamp-4"
          >
            {description}
          </Typography>
        </div>
        <Link to="contact-us">
          <button
            className="bg-[#7A8F8C] flex self-center justify-center mt-6 md:mt-10 w-fit items-center rounded-md py-2 px-4 md:py-3 md:px-6"
            onClick={onButtonClick}
          >
            <Typography className="text-[#FFFFFF] font-semibold text-base md:text-lg">
              Book A Call Back
            </Typography>
          </button>
        </Link>
      </CardBody>
    </Card>
  );
}
