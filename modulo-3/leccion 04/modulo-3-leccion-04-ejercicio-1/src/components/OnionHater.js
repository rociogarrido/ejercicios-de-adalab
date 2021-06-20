import React from "react";
import "../stylesheets/App.scss";

function OnionHater() {
  const onChangeListener = (ev) => {
    const textArea = ev.target.value.toLowerCase();
    if (textArea.includes("cebolla ")) {
      alert("¡¡¡Odio la cebolla!!!");
    }
  };
  return (
    <textarea
      className="textArea"
      id="recipy"
      onChange={onChangeListener}
      placeholder="Escribe una receta de sofrito tradicional"
      cols="20"
      rows="10"
    ></textarea>
  );
}

export default OnionHater;
