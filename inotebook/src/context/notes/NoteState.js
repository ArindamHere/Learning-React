import react, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {

    const notesInitial = [
        {
            "_id": "65b9d9cd320b408e96f53206",
            "user": "65b809b71144a1e04714c3d3",
            "title": "My Title",
            "description": "Please wake up early",
            "tag": "personal",
            "date": "2024-01-31T05:25:33.663Z",
            "__v": 0
        },
        {
            "_id": "65b9efa05b8884b77fe2445f",
            "user": "65b809b71144a1e04714c3d3",
            "title": "Notes on today's work",
            "description": "No sleeping and take a coffee",
            "tag": "NotToBeLazyy",
            "date": "2024-01-31T06:58:40.490Z",
            "__v": 0
        }
    ]

    const [notes, setNotes] = useState(notesInitial);
    return (
        <NoteContext.Provider value={{ notes, setNotes }}>
            {props.children}
        </NoteContext.Provider>
    )
}
export default NoteState;