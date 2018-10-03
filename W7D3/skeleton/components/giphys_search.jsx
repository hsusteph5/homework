import React from 'react';

import GiphysIndex from './giphys_index';

class GiphySearch extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchTerm: ""
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    e.preventDefault();
    const searchTerm = e.target.value
    this.setState({searchTerm});
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.fetchSearchGiphys(this.state.searchTerm);
  }

  render() {

    return (
      <div>
        <input onChange={this.handleChange} value={this.state.searchTerm}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    );
  }
}


export default GiphySearch;
