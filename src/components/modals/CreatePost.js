import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, ModalBody} from "react-bootstrap";
import { createPost } from '../../http/blogApi';
import { observer } from 'mobx-react-lite';

const CreatePost = observer(({show, onHide}) => {
    const [title, setTitle] = useState('')
    const [main_text, setMain_Text] = useState([])
    const [file, setFile] = useState(null)

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addPost = () => {
        const postForm = new FormData()
        postForm.append('title', title)
        postForm.append('main_text', main_text)
        postForm.append('img', file)
        createPost(postForm).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавить пост
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                <Form.Control
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                        className="mt-3"
                        placeholder="Введите заголовок"
                    />
                    <Form.Group
                        className="mt-3"
                        controlId="exampleForm.ControlTextarea1"
                    >
                        <Form.Label>Введите основной текст</Form.Label>
                        <Form.Control 
                            as="textarea"
                            rows={3}
                            value={main_text}
                            onChange={e => setMain_Text(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>              
                </Form>
            </ModalBody>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
                <Button variant="outline-success" onClick={addPost} >Добавить</Button>
            </Modal.Footer>
        </Modal>
    );
        
});

export default CreatePost;