import 'bulma/css/bulma.min.css'; // Import Bulma CSS
import EditText from './edittext';
import React, { useState } from 'react';
import { SAVE_NOTE_URL } from '../utils/constants';

// TextBox.js
const TextBox = ({uuid, deleteTextBox } ) => {

    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');


    const handleDeleteClick = () => {
        deleteTextBox(uuid);
    };
    
    
    const handleSubmit = () => {
        const data = {
          title: title,
          content: content
        };
      
        fetch(SAVE_NOTE_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })
          .then(response => response.json())
          .then(result => {
            console.log('Post successful:', result);
            // Perform any additional operations based on the response
          })
          .catch(error => {
            console.error('Error posting data:', error);
            // Handle the error appropriately
          });
      };

    return (
        <div id={{uuid}} className="box has-background-primary has-text-white m-4" style={{ maxHeight: '300px', maxWidth: '500px' }}>
            <div className="level">
            <div className="level-left">
                <div className="level-item">
                    <EditText text={title}  setText={setTitle} type={"title"} handleSubmit={handleSubmit}/>
                </div>
            </div>
            <div className="level-right">
                <div className="level-item">
                    <button className="delete" onClick={handleDeleteClick}></button>
                </div>
            </div>
            </div>
            <div className="content">
                <EditText text={content} setText={setContent} type={"content"} handleSubmit={handleSubmit} />
            </div>
        </div>
    );
  };

  export default TextBox;  