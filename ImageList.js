import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';


const ImageList = props => {
  const images =  props.images.map(image => {
        return  <ImageCard  key={image.id} image={image}/>

        // while you add a key to a element you must add key to the base element  i.e., if you are wrapping <img> inside a div then must add key to div element which is its parent element ok...
    });
    return <div className="image-list">{images}</div>  
};

export default ImageList
