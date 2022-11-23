import React from 'react';
import { useParams } from 'react-router-dom';

const Page = () => {
  const pagenum = useParams();
  return <div>Page: {pagenum}</div>;
};

export default Page;
