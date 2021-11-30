/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';
import { Fragment } from 'react';

export const Header = () => {
  return (
    <Fragment>
      <div className="relative px-4 pt-2">
        <div className="mx-auto lg:max-w-screen-xl grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="mb-16 lg:mb-0 flex flex-col justify-center">
            <div className=" mb-6">
              <h1 className="mb-6 text-center font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Welcome To Botrivier Community Committee
              </h1>
              <p className="text-base text-gray-700 text-center md:text-lg">
                BCC is a non-political group of Botrivier residents working to
                improve communication in our beautiful rural town. Botrivier is
                situated on the N2, 90km west of Cape Town, between Grabouw and
                Caledon.
              </p>
            </div>
            <div className="flex items-center justify-center">
              <Link href="/directory">
                <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none">
                  Directory
                </a>
              </Link>
            </div>
          </div>
          <div className="overflow-hidden">
            <img className="w-full" alt="logo" src="/images/logo-large.jpg" />
          </div>
        </div>
      </div>
      <div
        className="flex justify-center overflow-hidden max-w-7xl mx-auto bg-green-300 h-96 mt-5"
        style={{
          backgroundImage: 'url(/images/view.jpg)',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>
    </Fragment>
  );
};
