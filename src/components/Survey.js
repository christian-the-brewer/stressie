import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Container, Button } from 'react-bootstrap'
import "../styles/survey.css"

function Survey() {
    return (
        <Container className='survey'>
            <h2>When stressed, I cope by...</h2>
            <div id='button-box'>
                <div id='row1'>
                    <Button variant='outline-dark' className='survey-button' >Avoidant</Button>
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