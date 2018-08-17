import React from 'react';
import Gallery from 'react-photo-gallery';

const Galle = ({album}) => {
  return (
    <div>
    
        <Gallery photos={album} />
   
    </div>
  )
}

export default Galle;