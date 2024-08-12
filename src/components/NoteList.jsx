import React from 'react'
import { FaRegTrashCan } from "react-icons/fa6";


function NoteList({ notes, onDelete, onCompleted, sort }) {



    let sortedNotes = notes
    if (sort === "latest") sortedNotes = [...notes].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    if (sort === "earliest") sortedNotes = [...notes].sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt))
    if (sort === "completed") sortedNotes = [...notes].sort((a, b) => Number(a.completed) - Number(b.completed))

    return (
        <div className='overflow-scroll h-[450px]'>
            {sortedNotes.map(note => <NoteItem key={note.id} note={note} onDelete={onDelete} onCompleted={onCompleted} />)}
        </div>
    )
}

export default NoteList


function NoteItem({ note, onDelete, onCompleted }) {

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    }

    return (
        <div className='p-4 bg-white rounded-xl mb-6'>
            <div className='flex items-center justify-between pb-1 mb-2 border-b border-solid border-[#f3f4f6]'>
                <div>
                    <p className={`text-xl text-[#374151] mb-2 font-bold ${note.completed ? "line-through opacity-50" : ""}`}>{note.title}</p>
                    <p className='text-[#94a3b8] mb-2 font-light'>{note.description}</p>
                </div>
                <div className='flex items-center gap-x-6'>
                    <button onClick={() => onDelete(note.id)}><FaRegTrashCan className='text-[#f43f5e] text-xl' /></button>
                    <input onChange={onCompleted} value={note.id} type="checkbox" className='text-xl' />
                </div>
            </div>
            <div className='text-[#cbd5e1]'>
                {new Date(note.createdAt).toLocaleDateString("en-US", options)}
            </div>
        </div>
    )
}