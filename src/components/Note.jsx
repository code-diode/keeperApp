import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';

function Note(props) {
  function handleDeletion(event) {
    event.preventDefault();
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button 
      type="submit" 
      onClick={handleDeletion}>
      <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
