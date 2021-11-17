import React, { Fragment } from 'react';
import { EventsHero } from '../../components/events/EventsHero';
import { EventsList } from '../../components/events/EventsList';
import { API_URL } from '../../config';

const index = ({ events }) => {
  return (
    <Fragment>
      <EventsHero />
      <EventsList events={events} />
    </Fragment>
  );
};

export default index;

export async function getServerSideProps() {
  const res = await fetch(`${API_URL}/events?_sort=date:DESC`);
  const events = await res.json();

  return {
    props: { events },
   
  };
}
