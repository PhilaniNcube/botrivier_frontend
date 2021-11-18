/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import Image from 'next/image';

export const Header = () => {
  return (
    <div className="relative px-4 pt-2 mx-auto max-w-7xl">
      <div className="max-w-xl mx-auto lg:max-w-screen-xl">
        <div className="mb-16 lg:max-w-lg lg:mb-0">
          <div className="max-w-xl mb-6">
            <h1 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              Welcome To
              <br className="hidden md:block" />{' '}
              <span className="inline-block text-green-700">
                Botrivier Community Committee
              </span>
            </h1>
            <p className="text-base text-gray-700 md:text-lg">
              BCC is a non-political group of Botrivier residents working to
              improve communication in our beautiful rural town. Botrivier is
              situated on the N2, 90km west of Cape Town, between Grabouw and
              Caledon.
            </p>
          </div>
          <div className="flex items-center">
            <Link href="/directory">
              <a className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-green-800 hover:bg-green-700 focus:shadow-outline focus:outline-none">
                Directory
              </a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center h-full overflow-hidden lg:w-2/3 xl:w-1/2 lg:absolute lg:justify-start lg:bottom-0 lg:right-0 lg:items-end">
        <img
          src="/images/view.jpg"
          className="object-cover object-top w-full  max-w-xl rounded shadow-2xl lg:ml-64 xl:ml-8 lg:h-auto lg:max-w-screen-md"
          alt=""
        />
      </div>
    </div>
  );
};
