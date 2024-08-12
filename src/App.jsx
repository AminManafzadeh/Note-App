
import { useReducer, useState } from 'react'
import './App.css'
import AddNewNote from './components/AddNewNote'
import NotHeader from './components/NotHeader'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'

function App() {

  const noteReducer = (state, { type, payload }) => {
    switch (type) {
      case "addNote": {
        return [...state, payload]
      }
      case "deleteNote": {
        const filteredNotes = [...state].filter(note => note.id !== payload)
        return filteredNotes
      }
      case "completedNote": {
        const completedNotes = [...state].map(note => note.id === payload ? { ...note, completed: !note.completed } : note)
        return completedNotes
      }

      default:
        throw new Error("unknown action" + type)
    }
  }

  // const [notes, setNotes] = useState([])
  const [notes, dispatch] = useReducer(noteReducer, [])
  const [sort, setSort] = useState("latest")




  const handleAddNote = (newNote) => {
    // setNotes([...notes, newNote])
    dispatch({ type: "addNote", payload: newNote })
  }

  const handleDelete = (id) => {
    // const filteredNotes = notes.filter(note => note.id !== id)
    // setNotes(filteredNotes)

    dispatch({ type: "deleteNote", payload: id })
  }

  const handleCompleted = (e) => {
    const noteId = Number(e.target.value)
    // const copmletedNotes = notes.map((note) => note.id == noteId ? { ...note, completed: !note.completed } : note)
    // console.log(copmletedNotes)
    // setNotes(copmletedNotes)

    dispatch({ type: "completedNote", payload: noteId })
  }


  return (
    <div className='container mx-auto'>
      <NotHeader notes={notes} sort={sort} onSort={(e) => setSort(e.target.value)} />
      <div className='flex justify-between gap-8'>
        <AddNewNote onAddNote={handleAddNote} />
        <div className='w-2/3'>
          <NoteStatus notes={notes} />
          <NoteList notes={notes} sort={sort} onDelete={handleDelete} onCompleted={handleCompleted} />
        </div>
      </div>
    </div>
  )
}

export default App
