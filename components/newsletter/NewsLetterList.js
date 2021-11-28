import React, { Fragment } from 'react';
import Link from 'next/link';

const NewsLetterList = ({ newsletters }) => {
  return (
    <div className="max-w-7xl max-auto px-4 py-4 lg:py-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8">
      {newsletters.map((item) => {
        return (
          <Fragment key={item.id}>
            <div className="bg-green-50 p-6 rounded-lg shadow-lg">
              <h3 className="font-medium text-gray-600 text-lg uppercase mb-4">
                {item.title}
              </h3>

              <Link href={`/newsletter/${item.slug}`}>
                <a className="py-2 px-4 rounded text-white bg-green-600 mt-4">
                  Read More
                </a>
              </Link>
            </div>
          </Fragment>
        );
      })}
    </div>
  );
};

export default NewsLetterList;
