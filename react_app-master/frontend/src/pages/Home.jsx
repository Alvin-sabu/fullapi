import { useState, useEffect } from "react";
import api from "../api";
import Note from "../components/Note";
import CreatePost from './Createpost';
import Navbar from "./Navbar";

function Home() {
    const [notes, setNotes] = useState([]);
   
    useEffect(() => {
        getNotes();
    }, []);

  
    const getNotes = () => {
        api
            .get("/api/notes/")
            .then((res) => res.data)
            .then((data) => {
                setNotes(data);
            })
            .catch((err) => alert(err));
    };

    const deleteNote = (id) => {
        api
            .delete(`/api/notes/delete/${id}/`)
            .then((res) => {
                if (res.status === 204) alert("Dog deleted!");
                else alert("Failed to delete note.");
                getNotes();
            })
            .catch((error) => alert(error));
    };

   

    return (
        <div style={{ 
            backgroundImage: "url('https://i.pinimg.com/originals/37/1f/db/371fdbaaeddc587ddd4781a2297c5279.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            padding: '20px'
        }}>
            <Navbar />
            {/* <CreatePost /> */}
            <div className="content-container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                <h2>Dogs</h2>
                {notes.map((note) => (
                    <div className="note-box" key={note.id} style={{ flex: '0 0 auto', margin: '10px', backgroundColor: '#f2f2f2', borderRadius: '8px', padding: '20px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
                        <Note note={note} onDelete={deleteNote} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
