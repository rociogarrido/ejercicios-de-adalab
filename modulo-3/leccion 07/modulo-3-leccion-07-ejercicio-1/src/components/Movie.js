import React, { useState } from "react";
import MovieForm from "./MovieForm";
import MovieCard from "./MovieCard";

/*class Movie extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      language: "",
    };
    this.handleFormChange = this.handleFormChange.bind(this);
  }

  handleFormChange(target) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div className="movie">
        <MovieForm
          handleFormChange={this.handleFormChange}
          title={this.state.title}
          description={this.state.description}
          language={this.state.language}
        />
        <MovieCard
          title={this.state.title}
          description={this.state.description}
          language={this.state.language}
        />
      </div>
    );
  }
}*/

function Movie() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [language, setLanguage] = useState("");

  const handleFormChange = (id, value) => {
    if (id === "title") {
      setTitle(value);
    } else if (id === "description") {
      setDescription(value);
    } else if (id === "language") {
      setLanguage(value);
    }
  };
  return (
    <div className="movie">
      <MovieForm
        handleFormChange={handleFormChange}
        title={title}
        description={description}
        language={language}
      />
      <MovieCard title={title} description={description} language={language} />
    </div>
  );
}

export default Movie;
