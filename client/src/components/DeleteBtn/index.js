import React from "react";

function DeleteBtn(props) {
  return (
    <span {...props} role="button" tabIndex="0">
      <button type="button" class="btn btn-primary">Remove</button>
    </span>
  );
}

export default DeleteBtn;
