import { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const host = "http://localhost:5000"
    const notesInitial = []
    const [notes, setNotes] = useState(notesInitial);

    // Get all notes
    const getNotes = async () => {

        //TODO - > API call
        const response = await fetch(`${host}/api/notes/fetchallnotes`, {
            method: "GET",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViODA5YjcxMTQ0YTFlMDQ3MTRjM2QzIn0sImlhdCI6MTcwNjYwMDUxNX0.6xYQVZx3Pz6RaT4F-14YaRagZwJz1IBQXTjvxFgf0Kc'
            }
        })

        const json = await response.json();
        console.log(json)
        setNotes(json)
    }

    // Add Note
    const addNote = async (title, description, tag) => {

        //TODO - > API call
        const response = await fetch(`${host}/api/notes/addnote`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViODA5YjcxMTQ0YTFlMDQ3MTRjM2QzIn0sImlhdCI6MTcwNjYwMDUxNX0.6xYQVZx3Pz6RaT4F-14YaRagZwJz1IBQXTjvxFgf0Kc'
            },
            body: JSON.stringify({ title, description, tag })
        })

        const note = {
            "_id": "65b9d9cd3203b408e96f53206",
            "user": "65b809b71144a1e04714c3d3",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2024-01-31T05:25:33.663Z",
            "__v": 0
        };
        setNotes(notes.concat(note));
    }
    //Delete a Note
    const deleteNote = async (id) => {

        //TODO - > API call

        const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViODA5YjcxMTQ0YTFlMDQ3MTRjM2QzIn0sImlhdCI6MTcwNjYwMDUxNX0.6xYQVZx3Pz6RaT4F-14YaRagZwJz1IBQXTjvxFgf0Kc'
            }
        })
        const json = response.json();
        console.log(json);

        console.log("Deleting the note with id");
        //in this only the notes which are not equal to the id will stay in the note. 
        const newNotes = notes.filter((note) => { return note._id !== id })
        setNotes(newNotes);

    }
    //Edit a Note
    const editNote = async (id, title, description, tag) => {
        // API Call
        const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'auth-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjViODA5YjcxMTQ0YTFlMDQ3MTRjM2QzIn0sImlhdCI6MTcwNjYwMDUxNX0.6xYQVZx3Pz6RaT4F-14YaRagZwJz1IBQXTjvxFgf0Kc'
            },
            body: JSON.stringify({ title, description, tag })
        })

        const json = response.json();
        // logic to edit in client
        for (let index = 0; index < notes.length; index++) {
            const element = notes[index];
            if (element._id === id) {
                element.title = title;
                element.description = description;
                element.tag = tag;
            }
        }
    }

    return (
        <NoteContext.Provider value={{ notes, addNote, deleteNote, editNote, getNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;