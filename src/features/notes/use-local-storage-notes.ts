import { useLocalStorage } from '../../hooks/use-local-storage'
import { Note } from './notes-types';

export const useNotesFromLocalStorage = () => {
  const {write, read, remove} = useLocalStorage();

  const getNotesFromLS = (): Note => {
    const notes = read('notes');
    return notes ?? [];
  }

  const setNotesToLS = (notes: unknown[]) => {
    write('notes', notes);
  }

  const removeNotesFromLS = () => {
    remove('notes');
  }
  
  return {
    getNotesFromLS,
    setNotesToLS,
    removeNotesFromLS,
  }
}
