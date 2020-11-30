import React, { useState, useContext } from 'react';
import NotesContext from '../context/notes-context';

function AddNoteForm() {
    const { dispatch } = useContext(NotesContext)
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const addNote = (e) => {
        e.preventDefault()
        dispatch({
            type: 'ADD_NOTE',
            title,
            body
        })
        // setNotes([
        //   ...notes,
        //   { title, body }
        // ])

        setTitle('')
        setBody('')
    }

    return (
        <div>
            <form onSubmit={addNote}>
                <input value={title} onChange={(e) => setTitle(e.target.value)}/>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}></textarea>
                <button>Add Note</button>
            </form>
        </div>
    )
}

export default AddNoteForm