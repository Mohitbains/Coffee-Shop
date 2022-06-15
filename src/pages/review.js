/* eslint-disable import/no-unresolved */
import React from 'react';

import Seo from '../components/Seo';
import Layout from '../components/Layout';
import Countup from '../components/Countup';

const Review = () => (
  <Layout>
    <Seo title="Review" description="" />
    <div className="flex justify-center">
      <div className="w-full sm:w-1/2">
        <img className="image" src="/images/hangout.png" alt="contact us" />
      </div>
    </div>
    <Countup />
  </Layout>
);

export default Review;
