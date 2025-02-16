import React from 'react';
import Navbar from '../layouts/Navbar';
import Toolbar from '../layouts/Toolbar';
import Search from '../layouts/Search';
import Results from '../layouts/Results';

const Main: React.FC = () => {
  return (
    <div className="flex flex-col h-screen gap-5 p-10">
        <Navbar />
        <Toolbar />
        <Search/>
        <Results/>
    </div>
  );
};

export default Main;