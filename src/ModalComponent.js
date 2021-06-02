import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalComponent({ showModal, setShowModal, count, setCount, text }) {


    const handleClose = () => {
        setShowModal(false)
        setCount(count + 1)
    };


    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Your Result</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {text}
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Next
          </Button>

            </Modal.Footer>
        </Modal>
    )
}

export default ModalComponent
