import { Badge, Button, Col, Row, Stack } from "react-bootstrap";
import ReactMarkDown from "react-markdown";
import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../hooks/redux";
import { useNote } from "../layouts/NoteLayout";
import { removeNote } from "../store/reducers/noteSlice";

const Note: React.FC = () => {
  const note = useNote();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDelete = () => {
    dispatch(removeNote(note.id));
    navigate("..");
  };
  return (
    <>
      <Row className="align-items-center mb-4">
        <Col>
          <h1>{note.title}</h1>
          {note.tags.length > 0 && (
            <Stack gap={1} direction="horizontal" className=" flex-wrap">
              {note.tags.map((tag) => (
                <Badge key={tag.id} className="text-truncate">
                  {tag.label}
                </Badge>
              ))}
            </Stack>
          )}
        </Col>
        <Col xs="auto">
          <Stack gap={2} direction="horizontal">
            <Link to={`/${note.id}/edit`}>
              <Button variant="primary">Edit</Button>
            </Link>
            <Button variant="outline-danger" onClick={handleDelete}>
              Delete
            </Button>
            <Link to="/">
              <Button variant="secondary">Back</Button>
            </Link>
          </Stack>
        </Col>
      </Row>
      <ReactMarkDown>{note.markdown}</ReactMarkDown>
    </>
  );
};

export default Note;
