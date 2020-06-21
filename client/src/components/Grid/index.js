import React from "react";

const divStyle = {
  fontSize: 'Arial, Helvetica, sans-serif',
};

export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`} style={divStyle}>{children}</div>;
}

export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`} style={divStyle}>{children}</div>;
}

export function Col({ size, children }) {
  return (
    <div style={divStyle} className={size .split(" ") .map(size => "col-" + size) .join(" ")}>
      {children}
    </div>
  );
}
