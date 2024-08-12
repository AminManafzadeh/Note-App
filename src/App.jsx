
import { useState } from 'react'
import './App.css'
import AddNewNote from './components/AddNewNote'
import NotHeader from './components/NotHeader'
import NoteList from './components/NoteList'
import NoteStatus from './components/NoteStatus'
import NotesProvider from './context/NotesContext'

function App() {

  const [sort, setSort] = useState("latest")

  return (
    <NotesProvider>
      <div className='container mx-auto'>
        <NotHeader sort={sort} onSort={(e) => setSort(e.target.value)} />
        <div className='flex justify-between gap-8'>
          <AddNewNote />
          <div className='w-2/3'>
            <NoteStatus />
            <NoteList sort={sort} />
          </div>
        </div>
      </div>
    </NotesProvider>
  )
}

export default App
