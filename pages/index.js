import Head from 'next/head';
import Image from 'next/image';
import { Fragment } from 'react';
import { Header } from '../components/homepage/Header';

export default function Home() {
  return (
    <Fragment>
      <Header />
    </Fragment>
  );
}
