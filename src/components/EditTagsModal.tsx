import { ChangeEvent } from "react";
import { Button, Col, Form, Modal, Row, Stack } from "react-bootstrap";
import { useAppDispatch } from "../hooks/redux";
import { removeTag, updateTag } from "../store/reducers/tagSlice";
import { Tag } from "../types/types";

interface EditTagsModalProps {
  availableTags: Tag[];
  show: boolean;
  handleClose: () => void;
}

const EditTagsModal: React.FC<EditTagsModalProps> = ({
  availableTags,
  show,
  handleClose,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Modal show={show} onHide={handleClose} className="flex-direction-column">
      <Modal.Header closeButton>
        <Modal.Title>Edit Tags</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Stack gap={2}>
            {availableTags.map((tag) => {
              return (
                <Row key={tag.id}>
                  <Col>
                    <Form.Control
                      type="text"
                      value={tag.label}
                      onChange={(e: ChangeEvent<HTMLInputElement>) =>
                        dispatch(
                          updateTag({ id: tag.id, label: e.target.value })
                        )
                      }
                    />
                  </Col>
                  <Col xs="auto">
                    <Button
                      variant="outline-danger"
                      onClick={() => dispatch(removeTag(tag.id))}
                    >
                      &times;
                    </Button>
                  </Col>
                </Row>
              );
            })}
          </Stack>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditTagsModal;
