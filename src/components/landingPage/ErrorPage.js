import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => (
  <>
    <div>4O4 Page not found</div>
    {' '}
    <br />
    <div>
      <Link to="/">Go back to Home</Link>
    </div>
  </>
);

export default ErrorPage;
