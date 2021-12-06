import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import qs from 'qs';
import { API_URL } from '../../config';
import CategoryList from '../../components/directory/CategoryList';

const search = ({ categories, term, businesses }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col space-y-4 mt-2">
      <h2 className="leading-5 font-medium text-2xl text-center">
        Search Results for <span className="text-green-500">{term}</span>
      </h2>
      <Link href="/directory" passHref>
        <button className="bg-green-600 w-40 py-2 px-4 rounded-lg text-white">
          Back To Directory
        </button>
      </Link>
      {categories.length === 0 ? (
        <h3>
          There are no categories that match your search term. Please search
          again
        </h3>
      ) : (
        <CategoryList categories={categories} />
      )}

      <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-3">
        {businesses.map((business) => {
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

                    <div className="flex space-x-2">
                      <p className="text-sm">Email: {business.email}</p>
                    </div>
                  </div>
                  <div className="flex space-x-2"></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default search;

export async function getServerSideProps({ query: { term } }) {
  const query = qs.stringify({
    _where: {
      _or: [{ title_contains: term }],
    },
  });

  const busQuery = qs.stringify({
    _where: {
      _or: [{ title_contains: term }],
      _or: [{ contact_contains: term }],
    },
  });

  const res = await fetch(`${API_URL}/categories?${query}`);
  const categories = await res.json();

  const busRes = await fetch(`${API_URL}/businesses?${busQuery}`);
  const businesses = await busRes.json();

  return {
    props: { categories, term, businesses },
  };
}
