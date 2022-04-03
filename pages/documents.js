import Link from 'next/link';
import React, { Fragment } from 'react';
import { DocHero } from '../components/documents/DocHero';

const documents = () => {
  return (
    <Fragment>
      <DocHero />
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 py-12">
        <Link href="/images/directors.pdf" passHref>
          <button className="text-base px-4 py-1 text-white bg-gray-800">
            BCV Directors
          </button>
        </Link>
        <Link href="/images/certificate.pdf" passHref>
          <button className="text-base px-4 py-1 text-white bg-gray-800">
            BCV Certificate
          </button>
        </Link>
      </div>
    </Fragment>
  );
};

export default documents;
