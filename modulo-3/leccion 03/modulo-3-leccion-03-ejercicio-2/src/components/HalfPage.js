import React from 'react';

function HalfPage(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
    </div>
  );
}

export default HalfPage;
