import { useState } from 'react';

import { useNavigate } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from '../components/Button'

import '../assets/styles/slider.css'

function Home () {

    const navigate = useNavigate();
    
    const [name, setName] = useState('');

    const handleTextChange = (event) => {
        const value = event.target.value;
        setName(value)
    }

    return (
        <Container>

            <div style={{height: '83vh'}} className='d-flex flex-column justify-content-evenly '>
                <Card 
                    bg='white'
                    text='black'
                    className='custome-card'>
                    <Card.Header bsPrefix='custome-card-header'>
                        Ready?
                    </Card.Header>

                    <Card.Body>
                        <div className='d-flex justify-content-center mt-3'>
                            <input 
                                type='text' 
                                className='name-input' 
                                placeholder='Enter Your Name Here'
                                value={name}
                                onChange={handleTextChange}/>
                        </div>
                    </Card.Body>
                </Card>

                <Button 
                title={'Start Now'} 
                disabled={name === '' ? true : false} 
                onClick={() => navigate('/quiz', {state: {name: name}})}/>

            </div>

        </Container>
    )
}

export default Home