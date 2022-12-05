import {useContext} from 'react';
import {compareById, insertAt} from '../../utils/common';
import {NotesContext} from './notes-context';

const withoutBy = <T>(coll: T[], cb: (arg: T) => boolean): T[] => {
  return coll.filter((item) => !cb(item));
};

export const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error('useNotes should be invoked in scope of NotesContext');
  }

  const {notes, setNotes} = context;

  const addNote = (note: any) => {
    setNotes([...notes, note]);
  };

  const addNotes = (newNotes: any[]) => {
    setNotes([...notes, ...newNotes]);
  };

  const getNote = (noteId: string) => {
    return notes.find(compareById(noteId));
  };

  const editNote = (noteId: string, content: any) => {
    const targetNoteIdx = notes.findIndex(compareById(noteId));
    const updatedNote = {...notes[targetNoteIdx], content};

    setNotes(insertAt(notes, updatedNote, targetNoteIdx));
  };

  const flushNotes = () => {
    setNotes([]);
  };

  const removeNote = (noteId: string) => {
    const updatedNotes = withoutBy(notes, compareById(noteId));
    setNotes(updatedNotes);
  };

  return {
    addNote,
    addNotes,
    getNote,
    editNote,
    flushNotes,
    notes,
    removeNote,
    setNotes,
  };
};
