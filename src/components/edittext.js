import React, {useRef } from 'react';
import { TIMEOUT_DELAY } from '../utils/constants';


const EditText = ({text, setText, type, handleSubmit}) => {
    const className="title is-4";
    
    const timeoutRef = useRef(null);

    const handleTextChange = (event) => {
        setText(event.target.value);
    
        // Clear any existing timeout
        clearTimeout(timeoutRef.current);
    
        // Set a new timeout to call handleSubmit after N seconds
        timeoutRef.current = setTimeout(handleSubmit, TIMEOUT_DELAY);
    };



  return (
    <div className="field">
      <div className="control">
        <input
          className={`input ${className}`}
          placeholder="Enter text here"
          type="text"
          value={text}
          onChange={handleTextChange}
          style={{
            background: 'transparent',
            border: 'none',
            boxShadow: 'none',
            color: 'inherit',
          }}
        />
      </div>
    </div>
  );
};

export default EditText;
