import React, { useState, useEffect } from 'react'
import { Modal, Button } from 'react-bootstrap'

function ModalComponent({ showModal, setShowModal, count, setCount, text }) {


    const [timer, setTimer] = useState(5);

    const handleClose = () => {
        setShowModal(false)
        setCount(count + 1)
    };


    useEffect(() => {

        function handleCloseAll() {
            setShowModal(false)
            setCount(count + 1);
        }

        function handleTimer(time) {
            time > 0 && setTimer(time - 1);
            time === 0 && handleCloseAll();
        }

        setTimeout(() => {
            handleTimer(timer)
        }, 1000)
        return () => clearTimeout(timer);
    }, [timer])

    return (
        <Modal
            show={showModal}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {text}
                <p>{timer}</p>
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
