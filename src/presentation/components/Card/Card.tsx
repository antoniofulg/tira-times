import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  link: string;
};

const Card = ({ title, description, link }: CardProps) => {
  return (
    <>
      <Link
        to={link}
        role="link"
        className="block p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
      >
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {title}
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </Link>
    </>
  );
};

export default Card;