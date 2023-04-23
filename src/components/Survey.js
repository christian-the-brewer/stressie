import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import "../styles/survey.css"

function Survey() {
    /*  TO DO:
     - keep track of which question user is on
     - show current question and buttons for answer
     - store answer in a user object
     - check if a button(answer) has been selected befor allowing user to continue
     - at last question, show submit button to navigate to suggestion with user as prop
    */


    const [user, setUser] = useState(null)
    const [updated, setUpdated] = useState(false)

    const navigate = useNavigate()

    //  let user = {
    //     coping_style: "",
    //     time: 15,
    //     activities: "Music",
    //  }

    function addAnswer(param, answer) {
        //function on each button to add answer to user model

    }



    return (
        <Container className='survey'>
            <h2>When stressed, I cope by...</h2>
            <div id='button-box'>
                <div id='row1'>
                    <Button variant='outline-dark' className='survey-button' onClick={addAnswer("avoidant")} >Avoidant</Button>
                    <Button variant='outline-dark' className='survey-button'>Problem</Button>
                </div>
                <div id='row2'>
                    <Button variant='outline-dark' className='survey-button'>Expressive</Button>
                    <Button variant='outline-dark' className='survey-button'>Something</Button>
                </div>
            </div>
        </Container>
    )
}

export default Survey