import './ImageList.css';
import React from 'react';

const ImageList = props => {
  //images is an array of img element.
  const images = props.images.map(({description, id, urls}) => {
    return <img key={id} alt={description} src={urls.regular}></img>;
  });

  return <div className="image-list">{images}</div>;
}

export default ImageList;
