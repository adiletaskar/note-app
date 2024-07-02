import { configureStore } from "@reduxjs/toolkit";
import noteSlice from "./reducers/noteSlice";
import tagSlice from "./reducers/tagSlice";

export const store = configureStore({
  reducer: {
    notes: noteSlice,
    tags: tagSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
