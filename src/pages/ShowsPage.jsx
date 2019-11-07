import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

import ShowDetails from "./ShowDetails";

class ShowsPage extends Component {
  state = {
    shows: []
  };

  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=batman")
      .then(res => res.json())
      .then(data => {
        const shows = data.map(item => item.show);
        this.setState({
          shows
        });
      });
  }

  render() {
    return (
      <div>
        <h1>Shows</h1>
        <ul>
          {this.state.shows.map(show => (
            <li key={show.id}>
              <Link to={`/shows/${show.id}`}> {show.name}</Link>
            </li>
          ))}
        </ul>

        <Route path="/shows/:showId" component={ShowDetails} />
      </div>
    );
  }
}

export default ShowsPage;
