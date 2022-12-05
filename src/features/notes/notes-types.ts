export type Note = any;

export type Notes = Note[];

export type NotesContextType = {
  notes: Note[];
  setNotes: (notes: Note[]) => void;
};