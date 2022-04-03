/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';

const CategoryList = ({ categories }) => {
  return (
    <section className="md:px-8 dark:bg-coolGray-800 dark:text-coolGray-100 mx-auto max-w-7xl">
      <div className="container grid grid-cols-1 gap-6 m-4 mx-auto md:m-0 md:grid-cols-2 xl:grid-cols-6 py-2">
        {categories.map((category) => {
          return (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              passHref
            >
              <div className="flex overflow-hidden rounded-lg w-40 bg-blue-600 text-white cursor-pointer">
                <div className="flex items-center justify-between flex-1 p-3">
                  <p className="text-sm font-semibold">{category.title}</p>
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
