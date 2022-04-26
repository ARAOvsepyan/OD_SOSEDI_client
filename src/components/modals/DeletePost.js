import React, {useState, useContext, useEffect} from 'react';
import Modal from "react-bootstrap/Modal";
import {Context} from "../../index";
import {Button, Dropdown, ModalBody} from "react-bootstrap";
import {deletePost, fetchBlogTitles} from '../../http/blogApi'


const DeletePost = ({show, onHide}) => {
    const {blog} = useContext(Context)
    const [title, setTitle] = useState('')

    useEffect(() => {
        fetchBlogTitles().then(
            data => {blog.setBlog(data)})
    }, [])

    const deleteThePost = () => {
        deletePost(title).then(data => {
            setTitle('')
            onHide()
        })
    }
    

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Удалить пост
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Dropdown>
                     <Dropdown.Toggle>{title || "Выберите название поста"}</Dropdown.Toggle>
                        <Dropdown.Menu >
                            {blog.blog.map(blog =>
                                <Dropdown.Item
                                    onClick={() => setTitle(blog.title)}
                                    key={blog.id}
                                >
                                    {blog.title}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                </Dropdown>
            </ModalBody>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide} >Закрыть</Button>
                <Button variant="outline-success" onClick={deleteThePost} >Удалить</Button>
            </Modal.Footer>
        </Modal>
    );
        
};

export default DeletePost;