import React, { useState } from 'react'
import { Card, Form, Button } from 'react-bootstrap'
import ModalComponent from './ModalComponent';

function CardComponent({ data, count, setCount, correctAnsCount, setCorrectAnsCount }) {

    const [answered, setAnswered] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [modalText, setModalText] = useState('');


    const handleClick = (e, clickedAns, answer) => {

        if (clickedAns === answer) {
            setModalText("Correct")
            setCorrectAnsCount(correctAnsCount + 1)

        } else {
            setModalText("Incorrect! The correct answer is " + answer)

        }
        setShowModal(true);
        setAnswered(true);

    }

    return (
        <>
            {answered && <ModalComponent showModal={showModal} setShowModal={setShowModal} count={count} setCount={setCount} text={modalText} />}
            <Card>
                <Card.Body>
                    <Card.Title>{data.word}</Card.Title>
                    <Card.Text>
                        <Button
                            variant="secondary"
                            onClick={e => handleClick(e, data.options[0].optionVal, data.answer)}>
                            {data.options[0].optionVal}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={e => handleClick(e, data.options[1].optionVal, data.answer)}>
                            {data.options[1].optionVal}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={e => handleClick(e, data.options[2].optionVal, data.answer)}>
                            {data.options[2].optionVal}
                        </Button>
                        <Button
                            variant="secondary"
                            onClick={e => handleClick(e, data.options[3].optionVal, data.answer)}>
                            {data.options[3].optionVal}
                        </Button>
                    </Card.Text>
                </Card.Body>
            </Card>
            <hr />
        </>
    )
}

export default CardComponent
