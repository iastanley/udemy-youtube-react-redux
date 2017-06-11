import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = process.env.API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    //to show the user some videos on first load
    this.videoSearch('surfboards');
  }

  videoSearch(term) {
    YTSearch({
      key: API_KEY,
      term: term
    },
    videos => this.setState({ videos, selectedVideo: videos[0] })
    );
  }

  render() {
    //using lodash to throttle videoSearch callback method
    const videoSearch = _.debounce(term => this.videoSearch(term), 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList
          onVideoSelect={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}/>
      </div>
    );
  }
} //end of App component

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);
