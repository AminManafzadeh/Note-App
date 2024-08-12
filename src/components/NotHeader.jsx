import { useNotes } from "../context/NotesContext"


function NotHeader({ sort, onSort }) {
    const { notes } = useNotes()
    const allNotes = notes.length

    return (
        <div className='flex items-center justify-evenly py-1  mb-12 border-b-2 border-solid border-[#cbd0da]'>
            <div className=' h-full text-xl font-bold'>My Notes ({allNotes})</div>
            <select value={sort} onChange={onSort}>
                <option value="latest">Sort based on latest notes</option>
                <option value="earliest">Sort based on earliest notes</option>
                <option value="completed">Sort based on completed notes</option>
            </select>
        </div>
    )
}

export default NotHeader