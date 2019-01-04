import React from 'react';
import axios from 'axios';

import SearchBar from './SearchBar';

class App extends React.Component {

  onSearchSubmit(term) {
    axios.get('https://api.unsplash.com/search/photos', {
      params: {
        query: term,
      },
      headers: {
        Authorization: 'Client-ID 69616fb3c4ff340a477d0a761f4cec94ce06f558089d16553b115e663455b847',
      }
    });
  }

  render() {
    return (
      <div className="ui container" style={{marginTop: '10px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
      </div>
    );
  }
}

export default App;
