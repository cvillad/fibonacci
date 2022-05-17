import React from 'react';
import { Link } from 'react-router-dom';

const DummyPage = () => {
  return (
    <div>
      Dummy page!
      <Link to="/">Home</Link>
    </div>
  );
};

export default DummyPage;