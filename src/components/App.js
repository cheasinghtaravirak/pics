import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

  state = {
    images: [],
  }

  onSearchSubmit = async (term) => {
    // axioxs.get() return a promise obj
    const response = await axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID 69616fb3c4ff340a477d0a761f4cec94ce06f558089d16553b115e663455b847',
      }
    });
    this.setState({ images: response.data.results });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
      </div>
    );
  }
}

export default App;
