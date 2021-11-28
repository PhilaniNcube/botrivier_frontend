import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState } from 'react';

export const Hero = () => {
  const [term, setTerm] = useState('');
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push(`/category/search?term=${term}`);
    setTerm('');
  };

  return (
    <div className="w-full bg-green-500">
      <div className="container flex flex-col md:flex-row items-center flex-wrap content-center justify-center space-x-24 p-4 py-6 mx-auto">
        <div>
          <h1 className="text-3xl antialiased font-semibold text-white leading-none text-center">
            Directory
          </h1>
        </div>
        <form className="flex flex-row" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="enter text"
            className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
          />
          <button
            type="submit"
            className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 bg-white hover:bg-green-200 text-gray-800"
          >
            Search
          </button>
        </form>
      </div>
    </div>
  );
};
