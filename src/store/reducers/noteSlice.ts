import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NoteRaw } from "../../types/types";

export interface NoteSate {
  notes: NoteRaw[];
}
const initialState: NoteSate = {
  notes: JSON.parse(localStorage.getItem("NOTES") || "[]"),
};

const noteSlice = createSlice({
  name: "notes",
  initialState,
  reducers: {
    setNotes: (state, action: PayloadAction<NoteRaw[]>) => {
      state.notes = action.payload;
      localStorage.setItem("NOTES", JSON.stringify(state.notes));
    },
    addNote: (state, action: PayloadAction<NoteRaw>) => {
      state.notes.push(action.payload);
      localStorage.setItem("NOTES", JSON.stringify(state.notes));
    },
    removeNote: (state, action: PayloadAction<string>) => {
      state.notes = state.notes.filter((note) => note.id !== action.payload);
      localStorage.setItem("NOTES", JSON.stringify(state.notes));
    },
    updateNote: (state, action: PayloadAction<NoteRaw>) => {
      const index = state.notes.findIndex(
        (item) => item.id === action.payload.id
      );
      state.notes[index] = action.payload;
    },
  },
});

export const { setNotes, addNote, removeNote, updateNote } = noteSlice.actions;

export default noteSlice.reducer;
