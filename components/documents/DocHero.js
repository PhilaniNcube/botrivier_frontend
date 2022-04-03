import React from 'react';

export const DocHero = () => {
  return (
    <div className="bg-green-500 px-4 py-16  md:px-24 lg:px-8 lg:py-6">
      <div className="max-w-screen-sm sm:text-center sm:mx-auto">
        <h2 className="mb-4 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
          BCV Documents
        </h2>
        <p className="text-base text-white md:text-lg sm:px-4">
          Browse documents pertaining to BCV
        </p>
      </div>
    </div>
  );
};
