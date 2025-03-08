import React from 'react';
import '../App.css';

import RandomCard from '../components/ui/RandomCard';
import BonusCard from '../components/ui/BonusCard';
import Footer from '../components/ui/Footer';
import Navbar from '../components/ui/Navbar';

const HomePage = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen grid grid-rows-3 gap-6 pt-16 px-16 text-white">
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-1 flex items-center justify-center border border-white">
            <BonusCard />
          </div>
          <div className="col-span-2 flex items-center justify-center border border-white p-10">
            <div className="col-span-2 flex items-center justify-center space-x-4">
              <RandomCard />
              <RandomCard />
              <RandomCard />
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center border border-white py-4">
          <p>Játék cardok</p>
        </div>

        <div className="flex items-center justify-center border border-white py-4">
          <p>Hírek vagy nem tudom még</p>
        </div>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default HomePage;
