import React from 'react';
import { data } from '../../pages/HomePage/Data';

import './gallery.css';

const GalleryComp = () => {
  return (
    <>
      <div className="container">
        <div className="image-gallery">
          {data.map((url, indx) => {
            return <img src={url.src} className={url.id} key={indx} />;
          })}
        </div>
      </div>
    </>
  );
};

export default GalleryComp;
