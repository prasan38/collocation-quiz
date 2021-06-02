import React, { useState, useEffect } from 'react'
import CardComponent from './CardComponent'


function QuizGame() {

    const [count, setCount] = useState(1);
    const [correctAnsCount, setCorrectAnsCount] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8002/api/quiz", {
            headers: {
                "accept": "application/json"
            }
        }).then(res => res.json())
            .then(res => setData(res))
    }, [])

    return (
        <>
            <div className="score-info">
                <h2>Attempted {(count > data.length) ? data.length : count} / {data.length} Questions: Score: {correctAnsCount}</h2>
            </div>

            {count <= data.length ? <CardComponent data={data[count - 1]}
                count={count}
                setCount={setCount}
                correctAnsCount={correctAnsCount}
                setCorrectAnsCount={setCorrectAnsCount} />
                :
                <a href="/">Play Again</a>
            }



        </>
    )
}

export default QuizGame
