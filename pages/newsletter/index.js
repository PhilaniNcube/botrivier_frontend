import React, { Fragment } from 'react';
import NewsHeader from '../../components/newsletter/NewsHeader';
import NewsLetterList from '../../components/newsletter/NewsLetterList';
import { API_URL } from '../../config';

const index = ({newsletters}) => {
console.log(newsletters)

  return (
    <Fragment>
      <NewsHeader />
      <NewsLetterList newsletters={newsletters} />
    </Fragment>
  );
};

export default index;


export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/newsletters?_sort=created_at:DESC`);
  const newsletters = await res.json();

  return {
    props: { newsletters },
   
  };
}
