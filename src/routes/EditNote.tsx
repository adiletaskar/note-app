import { useNavigate } from "react-router-dom";
import NoteForm from "../components/NoteForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { useNote } from "../layouts/NoteLayout";
import { updateNote } from "../store/reducers/noteSlice";
import { addTag } from "../store/reducers/tagSlice";
import { NoteData, Tag } from "../types/types";

const EditNote: React.FC = () => {
  const { tags } = useAppSelector((store) => store.tags);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const note = useNote();

  const onUpdateNote = (id: string, { tags, ...data }: NoteData) => {
    dispatch(updateNote({ id, ...data, tagIds: tags.map((tag) => tag.id) }));
    navigate("..");
  };

  const onAddTag = (tag: Tag) => {
    dispatch(addTag(tag));
  };

  return (
    <>
      <h1 className="mb-4">Edit Note</h1>
      <NoteForm
        {...note}
        onSubmit={(data) => onUpdateNote(note.id, data)}
        onAddTag={onAddTag}
        availableTags={tags}
      />
    </>
  );
};

export default EditNote;
