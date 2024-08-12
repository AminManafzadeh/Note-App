import React from 'react'
import Message from './Message'
import { useNotes } from '../context/NotesContext'

function NoteStatus() {
    const { notes } = useNotes()

    const allNotes = notes.length
    const completedNotes = notes.filter(n => n.completed).length
    const unCompletedNotes = allNotes - completedNotes

    if (!allNotes) return <Message><h2 >No Notes has already been added</h2></Message>

    return (
        <ul className='flex justify-between items-center mb-8 text-[#94a3b8]'>
            <li>All <span className='bg-[#94a3b8] rounded-full inline-block py-1 px-1 text-xs text-[#e0e7ff]'>{allNotes}</span></li>
            <li>Completed <span className='bg-[#94a3b8] rounded-full inline-block py-1 px-1 text-xs text-[#e0e7ff]'>{completedNotes}</span></li>
            <li>Open <span className='bg-[#94a3b8] rounded-full inline-block py-1 px-1 text-xs text-[#e0e7ff]'>{unCompletedNotes}</span></li>
        </ul>
    )
}

export default NoteStatus