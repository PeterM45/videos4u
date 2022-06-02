import React from "react";

// Class based component
class SearchBar extends React.Component {
  // The search term needs to be stored in a state
  // this is to ensure the search bar is a controllable field
  state = { term: "" };

  // when the input changes, the state changes
  onInputChange = (event) => {
    this.setState({ term: event.target.value });
  };

  onFormSubmit = (event) => {
    // preventDefault() is used so the page doesnt reload when
    // a search term is submitted
    event.preventDefault();

    // Props are whatever is included in the JSX tag
    // *Line 54 App.js* <SearchBar onFormSubmit={this.onTermSubmit} />
    // onFormSubmit is a prop that is passed to the component
    // Here we are calling onFormSubmit with whatever the state is on the input field
    // It then accesses the 'onTermSubmit' function in App.js where the api fetch happens
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="search-bar ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Video Search</label>
            {/* Input field is tied to the state */}
            <input
              type="text"
              value={this.state.term}
              onChange={this.onInputChange}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
