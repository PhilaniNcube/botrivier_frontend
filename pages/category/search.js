import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import qs from 'qs';
import { API_URL } from '../../config';
import CategoryList from '../../components/directory/CategoryList';

const search = ({ categories, term }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-0 flex flex-col space-y-4 mt-2">
      <h2 className="leading-5 font-medium text-2xl text-center">
        Search Results for <span className="text-green-500">{term}</span>
      </h2>
      {categories.length === 0 ? (
        <h3>
          There are no categories that match your search term. Please search
          again
        </h3>
      ) : (
        <CategoryList categories={categories} />
      )}
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

  const res = await fetch(`${API_URL}/categories?${query}`);
  const categories = await res.json();

  return {
    props: { categories, term },
  };
}
