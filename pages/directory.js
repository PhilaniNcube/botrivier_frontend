import React, { Fragment } from 'react';
import CategoryList from '../components/directory/CategoryList';
import { Hero } from '../components/directory/Hero';
import { API_URL } from '../config';

const directory = ({ categories }) => {
  return (
    <Fragment>
      <Hero />
      <CategoryList categories={categories} />
    </Fragment>
  );
};

export default directory;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/categories?_sort=title:ASC`);
  const categories = await res.json();

  return {
    props: { categories },
   
  };
}
