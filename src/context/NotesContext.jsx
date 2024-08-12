import { createContext, useContext, useReducer } from "react";

const NotesContext = createContext()

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



export default function NotesProvider({ children }) {
    const [notes, dispatch] = useReducer(noteReducer, [])

    return <NotesContext.Provider value={{ notes, dispatch }}>
        {children}
    </NotesContext.Provider>
}


export function useNotes() {
    return useContext(NotesContext)
}