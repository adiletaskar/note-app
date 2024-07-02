import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Tag } from "../../types/types";

export interface TagState {
  tags: Tag[];
}
const initialState: TagState = {
  tags: JSON.parse(localStorage.getItem("TAGS") || "[]"),
};

const tagSlice = createSlice({
  name: "tagss",
  initialState,
  reducers: {
    addTag: (state, action: PayloadAction<Tag>) => {
      state.tags.push(action.payload);
      localStorage.setItem("TAGS", JSON.stringify(state.tags));
    },
    removeTag: (state, action: PayloadAction<string>) => {
      state.tags = state.tags.filter((tag) => tag.id !== action.payload);
      localStorage.setItem("TAGS", JSON.stringify(state.tags));
    },
    updateTag: (
      state,
      action: PayloadAction<{ id: string; label: string }>
    ) => {
      state.tags = state.tags.map((tag) => {
        if (tag.id === action.payload.id) {
          return { ...tag, label: action.payload.label };
        } else return tag;
      });
      localStorage.setItem("TAGS", JSON.stringify(state.tags));
    },
  },
});

export const { addTag, removeTag, updateTag } = tagSlice.actions;

export default tagSlice.reducer;
