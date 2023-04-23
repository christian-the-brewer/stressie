import React from 'react'
import { Container } from 'react-bootstrap'
import "../../styles/footer.css"

function Footer() {
    return (
        <Container>
            <div className='footer'>
                <div id='footer-links' style={{ color: '#F96302' }}>
                    <a href='/about'>About Us</a>
                    <a href='/'>Privacy Policy</a>
                </div>
                <p>&copy; 2023 Hard Hat Zen</p>
            </div>
        </Container>
    )
}

export default Footer