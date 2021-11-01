import React from 'react';

const NewsHeader = () => {
  return (
    <section className="py-6 bg-green-500 dark:text-coolGray-900">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 md:px-24 xl:px-48">
        <h1 className="text-5xl text-white font-bold leading-none text-center">
          Newsletter
        </h1>
        <p className="pt-2 pb-8 text-xl text-white font-medium text-center">
          The Botrivier Newsletter
        </p>
      </div>
    </section>
  );
};

export default NewsHeader;
