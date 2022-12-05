import React from 'react';
import {NotesContextType} from './notes-types';

export const NotesContext = React.createContext<NotesContextType>({notes: [], setNotes(notes) {}});
