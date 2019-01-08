import React from 'react';

//ImageCard is chosen to be a class based component b/c to easy organize code
class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    //instance variable
    this.imageRef = React.createRef();
  }
  //Lifecycle method
  componentDidMount() {
    //current is html element. Thus,
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //method
  setSpans = () => {
    console.log(this.imageRef.current.clientHeight);
  }

  render() {
    const { urls, description } = this.props.image;
    return (
      <div>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
        />
      </div>
    );
  }
}

export default ImageCard;
