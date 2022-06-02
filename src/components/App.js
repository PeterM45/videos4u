// Import React and components
import React from "react";
import "./App.css";
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube";
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

// This is a class based component
// All of the components are placed into the App component
class App extends React.Component {
  // Initialize state for the videos being shown
  // as well as the selected video
  // These are defaulted to an empty array and null
  state = { videos: [], selectedVideo: null };

  // This function runs whenever the DOM is reloaded
  componentDidMount() {
    this.onTermSubmit("computer science");
  }

  // An asyncronous function that allows the videos to change on screen
  // this creates an api request to youtubes api
  // is is asynchronous just in case the api is not fetched in time
  onTermSubmit = async (term) => {
    const response = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    // fill the videos array with whatever is received
    // The first video is displayed to the user
    this.setState({
      videos: response.data.items,
      selectedVideo: response.data.items[0],
    });
  };

  // If the user selects a video on the right hand side, the state of selected video will be changed
  onVideoSelect = (video) => {
    this.setState({ selectedVideo: video });
  };

  // What is to be rendered on the DOM
  render() {
    // This is JSX, it is very similar to HTML
    // in JSX 'className' is used as opposed to 'class'
    return (
      <div className="ui container main">
        <h3 className="title">Videos 4 U</h3>
        {/* When the user enters something in the search bar,
        the onTermSubmit function is called to display the videos */}
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <div className="ui grid">
          <div className="ui row">
            <div className="eleven wide column">
              {/* The selected video is displayed in the center and it is larger */}
              <VideoDetail video={this.state.selectedVideo} />
            </div>
            <div className="five wide column">
              {/* The list of all fetched videos is displayed as a column on
              the right hand side */}
              <VideoList
                onVideoSelect={this.onVideoSelect}
                videos={this.state.videos}
              />
            </div>
          </div>
        </div>
        <footer>
          <b>2022 Peter Mangialardi</b>
        </footer>
      </div>
    );
  }
}

// Component has to be exported in order to be displayed to the DOM
export default App;
