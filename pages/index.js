import React from 'react';
import Head from 'next/head';
import Home from '../src/components/home/Home';

const Index = () => (
  <div>
    <Head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>Easy Expense</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Home />
  </div>
);

export default Index;
