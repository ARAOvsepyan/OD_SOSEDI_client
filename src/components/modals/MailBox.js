import React, { useContext, useEffect } from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form, ModalBody} from "react-bootstrap";
import MailBoxList from './components/MailBoxList';
import { Context } from '../..';
import { fetchMessage } from '../../http/messageAPI';

const MailBox = ({show, onHide}) => {

    const {message} = useContext(Context)

    useEffect(() => {
        fetchMessage().then(data => {message.setMessage(data.rows)})
    })

    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
            size="lg"
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Почтновый ящик
                </Modal.Title>
            </Modal.Header>
            <ModalBody>
                <Form>
                    <MailBoxList/>   
                </Form>
            </ModalBody>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={data => onHide()}>Закрыть</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default MailBox;