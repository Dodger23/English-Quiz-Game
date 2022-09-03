import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Button from '../components/Button'
import '../assets/styles/slider.css'
import { Link } from 'react-router-dom';

function Home ({name, setName}) {
    
   

    const handleChange = (event) => {
        const value = event.target.value;
        setName(value);
    };

    return (
        <Container>

            <div style={{height: '83vh'}} className='d-flex flex-column justify-content-center '>
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
                                onChange={handleChange}/>
                        </div>
                    </Card.Body>
                </Card>

                <div className='d-flex justify-content-center mt-5'>
                    <Link to={name === '' ? '' : '/quiz'}  style={{textDecoration: 'none', cursor: 'default'}} >
                        <Button title={'Start Now'} disabled={name === '' ? true : false}/>
                    </Link>
                </div>
            </div>

        </Container>
    )
}

export default Home