import React, { useState } from 'react'

function AddNewNote({ onAddNote }) {
    const [title, setTitle] = useState("")
    const [description, setDescription] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault()

        if (!title || !description) return null
        const newNote = {
            title,
            description,
            id: Date.now(),
            completed: false,
            createdAt: new Date().toISOString()
        }

        onAddNote(newNote)
        setTitle("")
        setDescription("")
    }

    return (
        <div className='w-1/3'>
            <h2 className='font-bold text-xl'>Add New Note</h2>
            <form className=' gap-6 grid' onSubmit={handleSubmit}>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    type="text"
                    className='text-field'
                    placeholder='Note Title'
                />
                <input
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    className='text-field'
                    placeholder='Note description'
                />
                <button type='submit' className='rounded-lg p-4 bg-[#4f46e5] text-white text-base'>
                    Add New Note
                </button>
            </form>
        </div>
    )
}

export default AddNewNote