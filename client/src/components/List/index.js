import React from "react";

const divStyle = {
  fontSize: 'Arial, Helvetica, sans-serif',
};

export function List({ children }) {
  return (
    <div className="list-overflow-container">
      <ul className="list-group text-primary" style={divStyle}>{children}</ul>
    </div>
  );
}

export function ListItem({ children }) {
  return <li className="list-group-item">{children}</li>;
}
