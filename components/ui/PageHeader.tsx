import React from "react";

interface PageHeaderProps {
  title: string;
  description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
  return (
    <section>
      <h2 className="font-black text-gray-700 dark:text-gray-200 text-lg leading-none mb-1">
        {title}
      </h2>
      <p className="font-normal text-sm text-gray-400">{description}</p>
    </section>
  );
};

export default PageHeader;
