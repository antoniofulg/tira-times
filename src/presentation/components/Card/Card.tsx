import { Link } from "react-router-dom";

type CardProps = {
  title: string;
  description: string;
  link: string;
  label: string;
};

const Card = ({ title, description, link, label }: CardProps) => {
  return (
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        {title}
      </h5>
      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>

      <Link
        className="inline-flex items-center justify-center w-full px-3 py-2 text-sm font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        to={link}
        role="link"
      >
        {label}
      </Link>
    </div>
  );
};

export default Card;
