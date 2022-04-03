/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';

export const Header = () => {
  return (
    <Fragment>
      <div className="relative px-2 pt-4">
        <div className="mx-auto lg:max-w-screen-xl grid grid-cols-1 md:grid-cols-3 gap-2">
          <div className="w-full flex justify-center items-center">
            <img className="rounded w-2/3" src="/images/map.jpg" alt="map" />
          </div>
          <div className="mb-16 lg:mb-0 flex flex-col justify-center">
            <div className=" mb-6">
              <h1 className="mb-6 text-center font-sans text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl sm:leading-none">
                Welcome To Botrivier Community Volunteers NPC
              </h1>
              <p className="text-base text-gray-700 text-center md:text-lg">
                BCV is a non-political group of Botrivier residents working to
                improve communication in our beautiful rural town. This website
                is an initiative to create a business hub.
              </p>
            </div>
          </div>
          <div className="overflow-hidden w-full flex justify-center items-center">
            <img className="w-2/3" alt="logo" src="/images/logo.jpeg" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center items-start -translate-y-12 py-6 flex-col space-y-4 sm:space-y-0 md:flex-row overflow-hidden max-w-7xl mx-auto bg-green-300 h-80 mt-5"
        style={{
          backgroundImage: 'url(/images/view.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex flex-col md:flex-row space-x-6 justify-center">
          <Link href="/directory">
            <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-blue-600 hover:bg-green-700 focus:shadow-outline focus:outline-none">
              Search Business Directory
            </a>
          </Link>
          <Link href="/contact">
            <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none">
              List Your Business
            </a>
          </Link>
        </div>
      </div>
    </Fragment>
  );
};
