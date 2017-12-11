import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import YTSearch from 'youtube-api-search';
// import Components
import Searchbar from './components/searchbar'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'


const API_KEY = 'AIzaSyA0hFrAPOzezNZZnc_hMaLqVA7utVelio8';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    }
    this.onSelectedVideo = this.onSelectedVideo.bind(this)
  }
  componentDidMount(){
    YTSearch(
      {
        key: API_KEY,
        term: 'surfboards'
      },
      (data)=> {
        console.log(data)
        this.setState({
          videos: data,
          selectedVideo: data[0]
        })
        console.log(this.state.videos)

      }
    )
  }
  onSelectedVideo(videoClicked){
    this.setState({
      selectedVideo: videoClicked
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Searchbar />
        <VideoDetail video = {this.state.selectedVideo}/>
        <VideoList onSelectedVideo={this.onSelectedVideo} videos={this.state.videos}/>
      </div>
    );
  }
}

export default App;
