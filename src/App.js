import './App.css';
import React, { useState } from 'react';
import TextBox from './components/textbox';
import AddNewNoteButton from './components/button';

function App() {
  
  const [notes, setNotes] = useState([]);


  const handleButtonClick = () => {

    // Generate a unique key for the new TextBox
    const uuid = new Date().getTime().toString();
    
    console.log("Create Button clicked!" + uuid);
    const newTextBox = (
      // <TextBox key={key}/>
      <TextBox key={uuid} uuid={uuid} deleteTextBox={deleteTextBox} />
    );

    // Add the new TextBox to the notes array
    setNotes(prevNotes => [...prevNotes, newTextBox]);
  };

  const deleteTextBox = (uuid) => {
    console.log("Delete Button clicked!" + uuid);
    setNotes((prevNotes) => prevNotes.filter((note) => note.key !== uuid));
  };

  return (
    <div className="App">
      <section className="hero is-primary is-small">
      <div className="hero-body">
        <div className="container">
          <h1 className="title">Todo App</h1>
        </div>
      </div>
    </section>
      <main>
        <AddNewNoteButton handleClick={handleButtonClick} />        
        <div className='notes'>
        {notes}
        </div>
      </main>
    </div>
    );
}

export default App;
