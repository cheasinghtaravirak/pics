import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ''
  }

  onFormSubmit = event => {
    event.preventDefault(); //prevent browser's default action when submitting a form by pressing enter
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              value={this.state.term}
              onChange={e => this.setState({ term: e.target.value })}>
            </input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
