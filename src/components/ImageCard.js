import React from 'react';

//ImageCard is chosen to be a class based component b/c to easy organize code
class ImageCard extends React.Component {

  constructor(props) {
    super(props);
    //instance variable
    this.imageRef = React.createRef();
    this.state = {
      spans: 0,
    }
  }
  //Lifecycle method
  componentDidMount() {
    //current is html element. Thus,
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  //method
  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    const spans = Math.ceil(height / 10); //if height > 150, give it one more span
    this.setState({ spans });
  }

  render() {
    const { urls, description } = this.props.image;
    return (

        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description}
          style={{gridRowEnd: `span ${this.state.spans}`}}
        />

    );
  }
}

export default ImageCard;
