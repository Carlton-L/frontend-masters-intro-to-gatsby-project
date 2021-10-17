import * as React from 'react';
import { Link } from 'gatsby';

export default function IndexPage() {
  return (
    <main>
      <h1>Hello FrontendMasters!</h1>
      <Link to="/about">About this site</Link>
    </main>
  );
}