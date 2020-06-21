import React from "react";

export function Input(props) {
  return (
    <div className="form-group">
      <input className="form-control" {...props} />
    </div>
  );
}

export function TextArea(props) {
  return (
    <div className="form-group">
      <textarea className="form-control" rows="20" {...props} />
    </div>
  );
}

export function FormBtn(props) {
  return (
   <div className="ml-3" >
   <button {...props} style={{ float: "left", marginBottom: 10, marginLeft:10, }} className="btn btn-primary">
      {props.children}
    </button>
    </div>
  );
}
