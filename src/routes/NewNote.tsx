import { useNavigate } from "react-router-dom";
import { v4 as uuidV4 } from "uuid";
import NoteForm from "../components/NoteForm";
import { useAppDispatch, useAppSelector } from "../hooks/redux";
import { addNote } from "../store/reducers/noteSlice";
import { addTag } from "../store/reducers/tagSlice";
import { NoteData, Tag } from "../types/types";

const NewNote: React.FC = () => {
  const { tags } = useAppSelector((store) => store.tags);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onCreateNote = ({ tags, ...data }: NoteData) => {
    dispatch(
      addNote({ ...data, id: uuidV4(), tagIds: tags.map((tag) => tag.id) })
    );

    navigate("..");
  };

  const onAddTag = (tag: Tag) => {
    dispatch(addTag(tag));
  };

  return (
    <>
      <h1 className="mb-4">New Note</h1>
      <NoteForm
        onSubmit={onCreateNote}
        onAddTag={onAddTag}
        availableTags={tags}
      />
    </>
  );
};

export default NewNote;
