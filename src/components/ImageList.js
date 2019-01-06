import React from 'react';

const ImageList = props => {
  //images is an array of img element.
  const images = props.images.map(image => <img src={image.urls.regular}></img>);

  return <div>{images}</div>;
}

export default ImageList;
