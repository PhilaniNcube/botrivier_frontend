/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const CategoryList = ({ categories }) => {
  return (
    <section className="md:px-8 dark:bg-coolGray-800 dark:text-coolGray-100">
      <h2 className="p-4 text-center text-4xl md:text-4xl font-medium">
        Categories
      </h2>
      <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-4">
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              passHref
            >
              <div className="flex overflow-hidden rounded-lg bg-green-700 text-white">
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-lg font-semibold">{category.title}</p>
                  <p>{category.businesses.length}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default CategoryList;
