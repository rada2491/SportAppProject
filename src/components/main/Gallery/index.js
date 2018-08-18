import React from 'react';
import Gallery from 'react-grid-gallery';

const Galle = ({album}) => {
  return (
    <div>
        <Gallery images={album} />
    </div>
  )
}

export default Galle;