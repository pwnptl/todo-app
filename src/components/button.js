import React from 'react';

const AddNewNoteButton = ({ handleClick }) => {
  return (
    <div className="section">
      <button className="button is-primary" onClick={handleClick}>+</button>
    </div>
  );
};

export default AddNewNoteButton;
