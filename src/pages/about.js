import * as React from 'react';
import { Link } from 'gatsby';
import { Seo } from '../components/seo.js';
import Layout from '../components/layout.js';

export default function AboutPage() {
  return (
    <Layout>
    <Seo title="About This Site" description="More informaiton about this site"/>
      <h1>About Page</h1>
      <Link to="/">Back home</Link>
    </Layout>
  );
}