/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';

export const Header = () => {
  return (
    <Fragment>
      <div className="relative px-4 pt-2">
        <div className="mx-auto lg:max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="w-full flex justify-center items-center">
            <img className="rounded w-1/2" src="/images/map.jpg" alt="map" />
          </div>
          <div className="mb-16 lg:mb-0 flex flex-col justify-center">
            <div className=" mb-6">
              <h1 className="mb-6 text-center font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                Welcome To Botrivier Community Committee
              </h1>
              <p className="text-base text-gray-700 text-center md:text-lg">
                BCC is a non-political group of Botrivier residents working to
                improve communication in our beautiful rural town. Botrivier is
                situated on the N2, 90km west of Cape Town, between Grabouw and
                Caledon.
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full flex justify-center items-center">
            <img className="w-1/2" alt="logo" src="/images/logo-large.jpg" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-center flex-col space-y-4 sm:space-y-0 md:flex-row overflow-hidden max-w-7xl mx-auto bg-green-300 h-80 mt-5"
        style={{
          backgroundImage: 'url(/images/view.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Link href="/directory">
          <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none">
            Search Business Directory
          </a>
        </Link>
        <Link href="/contact">
          <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none">
            List On BCC Directory
          </a>
        </Link>
      </div>
    </Fragment>
  );
};
