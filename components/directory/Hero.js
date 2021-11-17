import Link from 'next/link';

export const Hero = () => {
  return (
    <div className="w-full bg-green-500">
      <div className="container flex flex-col md:flex-row items-center flex-wrap content-center justify-center space-x-24 p-4 py-6 mx-auto">
      <div>
          <h1 className="text-5xl antialiased font-semibold text-white leading-none text-center">
            Directory
          </h1>
          <p className="pt-2 text-xl antialiased text-center text-white">
            Find out services or businesses
          </p>
        </div>
        <div className="flex flex-row">
          <input
            type="text"
            placeholder="enter text"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
          />
          <button
            type="button"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-white hover:bg-green-200 text-gray-800"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};
