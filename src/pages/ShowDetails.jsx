import React, { Component } from "react";

class ShowDetails extends Component {
  componentDidMount() {
    fetch(`http://api.tvmaze.com/shows/${this.props.match.params.showId}`);
  }

  render() {
    return (
      <div>
        <h3>Show details</h3>
        <p>{`http://api.tvmaze.com/shows/${this.props.match.params.showId}`}</p>
      </div>
    );
  }
}

export default ShowDetails;
