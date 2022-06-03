import React, { useState } from 'react';
import GalleryComp from '../../components/Gallery';
import Gallery from 'react-photo-gallery';
import HeroSectHome from '../../components/HeroSectHome';
import { data, data2 } from './Data';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const pics = isOpen ? data2 : data

  console.log(isOpen, pics);

  return (
    <>
      <div style={{ padding: '0 100px', margin: '2rem auto', transition: 'transform .35s ease-in-out'}} onClick={toggle}>
        <GalleryComp />
      </div>
      <HeroSectHome />
    </>
  );
};

export default Home;
