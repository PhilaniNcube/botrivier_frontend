import React from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import qs from 'qs';
import { API_URL } from '../../config';
import CategoryList from '../../components/directory/CategoryList';

const search = ({ query: { term }, categories }) => {
  return (
    <div>
      <CategoryList categories={categories} />
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
    props: { categories },
  };
}
