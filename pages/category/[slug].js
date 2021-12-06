/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { API_URL } from '../../config';

const Category = ({ category }) => {
  return (
    <section className="py-2 dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container p-4 mx-auto space-y-8">
        <div className="space-y-4">
          <h3 className="text-lg font-bold leading-none text-center sm:text-5xl">
            {category.title}
          </h3>
        </div>
        <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
          {category.businesses.map((business) => {
            return (
              <div
                key={business.id}
                className="flex space-x-6 bg-green-200 p-2 rounded"
              >
                <div className="flex flex-col">
                  <Link href={`/business/${business.slug}`} passHref>
                    <h4 className="text-xl font-semibold">{business.title}</h4>
                  </Link>
                  {business.contact && (
                    <p className="font-medium text-md dark:text-coolGray-400">
                      Contact: {business.contact}
                    </p>
                  )}

                  <div className="flex space-x-2">
                    <div>
                      <div className="flex space-x-2">
                        <p className="text-sm">Tel: {business.tel}</p>
                      </div>
                      {business.website && (
                        <div className="flex space-x-2">
                          <p className="text-sm">Website: {business.website}</p>
                        </div>
                      )}
                      {business.email && (
                        <div className="flex space-x-2">
                          <p className="text-sm">Email: {business.email}</p>
                        </div>
                      )}
                    </div>
                    <div className="flex space-x-2"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Category;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/categories?slug=${slug}`);
  const categories = await res.json();

  return {
    props: {
      category: categories[0],
    },
  };
}
