import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export const EventsList = ({ events }) => {
  const router = useRouter();

  return (
    <div className="bg-gray-100">
      <div className="relative px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="absolute inset-x-0 top-0 items-center justify-center hidden overflow-hidden md:flex md:inset-y-0">
          <svg
            viewBox="0 0 88 88"
            className="w-full max-w-screen-xl text-green-100"
          >
            <circle fill="currentColor" cx="44" cy="44" r="15.5" />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="44"
            />
            <circle
              fillOpacity="0.2"
              fill="currentColor"
              cx="44"
              cy="44"
              r="37.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="29.5"
            />
            <circle
              fillOpacity="0.3"
              fill="currentColor"
              cx="44"
              cy="44"
              r="22.5"
            />
          </svg>
        </div>

        <div className="relative grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {events.map((event) => {
            return (
              <div
                key={event.id}
                className="flex flex-col justify-between overflow-hidden text-left transition-shadow duration-200 bg-white rounded shadow-xl group hover:shadow-2xl"
                onClick={() => router.push(`/events/${event.slug}`)}
              >
                <div className="p-5">
                  <p className="mb-2 font-bold text-green-800">{event.title}</p>
                  <p className="text-sm leading-5 text-gray-900">
                    <span className="font-bold">Venue:</span> {event.venue}
                  </p>
                  <p className="text-sm leading-5 text-gray-900">
                    <span className="font-bold">Date:</span> {event.date}
                  </p>
                  <p className="text-sm leading-5 text-gray-900">
                    <span className="font-bold">Time:</span> {event.time}
                  </p>
                </div>
                <div className="w-full h-1 ml-auto duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
