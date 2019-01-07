import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
  //images is an array of img element.
  const images = props.images.map(image => {
    return <ImageCard key={image.id} image={image}/>;
  });

  return <div className="image-list">{images}</div>;
}

export default ImageList;
