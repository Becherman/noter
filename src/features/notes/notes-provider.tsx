import React, {useState} from 'react'
import { NotesContext } from './notes-context'
import { useNotesFromLocalStorage } from './use-local-storage-notes';

type NotesProviderProps = {
  children: React.ReactElement;
}

export const NotesProvider: React.FC<NotesProviderProps> = ({children}) => {
  const {getNotesFromLS} = useNotesFromLocalStorage();
  const savedNotes = getNotesFromLS();
  const [notes, setNotes] = useState(savedNotes)

  return (
    <NotesContext.Provider value={{notes, setNotes}}>
      {children}
    </NotesContext.Provider>
  )
}