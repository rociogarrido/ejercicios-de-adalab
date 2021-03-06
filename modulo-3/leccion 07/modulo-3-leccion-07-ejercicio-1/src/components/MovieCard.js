import React from "react";

/*class MovieCard extends React.Component {
  render() {
    return (
      <div className="movie-card">
        <h2>{this.props.title}</h2>
        <p>{this.props.description}</p>
        <span>{this.props.language}</span>
      </div>
    );
  }
}*/

function MovieCard(props) {
  return (
    <div className="movie-card">
      <h2>{props.title}</h2>
      <p>{props.description}</p>
      <span>{props.language}</span>
    </div>
  );
}

export default MovieCard;
