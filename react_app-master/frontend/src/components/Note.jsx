import React from "react";
// import "../styles/Note.css"

function Note({ note, onDelete }) {
    const formattedDate = new Date(note.created_at).toLocaleDateString("en-US")

    return (
        <div className="note-container">
            <div className="note-container">
    <p className="note-title">Name:{note.name}</p>
    <p className="note-title">Breed:{note.breed}</p>
    <p className="note-title">Description:{note.description}</p>
    <p className="note-title">Age:{note.age}</p>
    <p className="note-title">Contact:{note.phone_number}</p>
    
   
    <img src={note.image} alt={note.file} style={{ width: '200px', height: '200px' }} />
    
    <button className="delete-button" onClick={() => onDelete(note.id)}>
        Delete
    </button>
    <button className="delete-button" onClick={() => onDelete(note.id)}>
        Modify
    </button>
</div>

        </div>
    );


}

export default Note