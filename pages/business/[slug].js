import React from 'react';
import { API_URL } from '../../config';

const Business = ({ business }) => {
  return (
    <section className="dark:bg-coolGray-800 dark:text-coolGray-100">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          {business.title}
        </h1>
        {business.contact && (
          <p className="px-8 mt-8 mb-12 text-lg">Contact: {business.contact}</p>
        )}

        <p className="px-8 mt-8 mb-12 text-lg">Tel: +{business.tel}</p>
      </div>
    </section>
  );
};

export default Business;

export async function getServerSideProps({ query: { slug } }) {
  const res = await fetch(`${API_URL}/businesses?slug=${slug}`);
  const businesses = await res.json();

  return {
    props: {
      business: businesses[0],
    },
  };
}
