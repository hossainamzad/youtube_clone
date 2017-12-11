import React, { Component } from 'react';


class Searchbar extends Component {
  constructor(props){
    super(props);
    this.state = {
      term: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event){
    event.preventDefault();
    console.log("search for: " + event.target.value)
    this.setState({
      term: event.target.value
    })
    this.props.onVideoSearch(this.state.term)
  }
  render(){
    return(
      <div>
        <input vlaue={this.state.term} onChange={this.handleInputChange}/>
      </div>
    )
  }

}
export default Searchbar;
