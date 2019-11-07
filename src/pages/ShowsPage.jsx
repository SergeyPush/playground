import React, { Component } from "react";

class ShowsPage extends Component {
  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=batman")
      .then(res => res.json())
      .then(data => {
        const shows = data.map(item => item.show);
        console.log(shows);
      });
  }

  render() {
    return (
      <div>
        <h1>Shows</h1>
      </div>
    );
  }
}

export default ShowsPage;
