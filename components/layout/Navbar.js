/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Disclosure, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { BsFacebook } from 'react-icons/bs';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'Directory', href: '/directory', current: false },
  { name: 'Who Is BCV', href: '/whois', current: false },
  { name: 'BCV Documents', href: '/documents', current: false },
  { name: 'Projects', href: '/projects', current: false },
  { name: 'Events', href: '/events', current: false },
  { name: 'Newsletter', href: '/newsletter', current: false },
  { name: 'Contact Us', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export const Navbar = () => {
  return (
    <Disclosure as="nav" className="bg-green-500">
      {({ open }) => (
        <Fragment>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <span className="block lg:hidden h-8 w-auto">
                    <Image
                      src="/images/logo.jpeg"
                      alt="logo"
                      width={74.2}
                      height={41.7}
                    />
                  </span>
                  <span className="hidden lg:block h-8 w-auto">
                    <Image
                      src="/images/logo.jpeg"
                      alt="logo"
                      width={74.2}
                      height={41.7}
                    />
                  </span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link key={item.name} href={item.href}>
                        <a
                          className={classNames(
                            item.current
                              ? 'bg-gray-900 text-white'
                              : 'text-white hover:bg-gray-700 hover:text-white',
                            'px-3 py-2 rounded-md text-md font-medium',
                          )}
                          aria-current={item.current ? 'page' : undefined}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Link
                  href="https://www.facebook.com/groups/436203844158690"
                  passHref
                >
                  <button
                    type="button"
                    className=" p-1 rounded-full text-gray-100 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                  >
                    <span className="sr-only">View notifications</span>
                    <BsFacebook className="h-6 w-6" aria-hidden="true" />
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-gray-900 text-white'
                      : 'text-white hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium',
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </Fragment>
      )}
    </Disclosure>
  );
};
