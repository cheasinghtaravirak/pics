import React from 'react';

//ImageCard is chosen to be a class based component b/c to easy organize code
class ImageCard extends React.Component {
  render() {
    const { urls, description } = this.props.image;

    return (
      <div>
        <img
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;
