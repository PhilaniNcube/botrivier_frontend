import React from 'react';

const NewsHeader = () => {
  return (
    <section className="bg-green-500 dark:text-gray-900">
      <div className="container mx-auto flex flex-col items-center justify-center py-4 md:px-24 xl:px-48">
        <h1 className="text-5xl text-white font-bold leading-none text-center">
          BCV Newsletters
        </h1>
      </div>
    </section>
  );
};

export default NewsHeader;
