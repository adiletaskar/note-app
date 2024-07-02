import { useMemo } from "react";
import {
  Navigate,
  Outlet,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { useAppSelector } from "../hooks/redux";
import { Note } from "../types/types";

const NoteLayout: React.FC = () => {
  const { id } = useParams();
  const { notes } = useAppSelector((store) => store.notes);
  const { tags } = useAppSelector((store) => store.tags);

  const notesWithTags = useMemo(() => {
    return notes.map((note) => ({
      ...note,
      tags: tags.filter((tag) => note.tagIds.includes(tag.id)),
    }));
  }, [notes, tags]);

  const note = notesWithTags.find((n) => n.id === id);
  if (!note) return <Navigate to="/" replace />;
  return <Outlet context={note} />;
};

export function useNote() {
  return useOutletContext<Note>();
}

export default NoteLayout;
