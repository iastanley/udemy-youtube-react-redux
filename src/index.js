import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';

const API_KEY = process.env.API_KEY;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: []
    }
    //to show the user some videos on first load
    YTSearch({
      key: API_KEY,
      term: 'surfboards'
    }, function(videos) {
      this.setState({ videos });
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
} //end of App component

ReactDOM.render(
  <App/>,
  document.querySelector('.container')
);
