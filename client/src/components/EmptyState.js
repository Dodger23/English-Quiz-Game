import {useNavigate} from "react-router-dom";

import Container from "react-bootstrap/esm/Container";

import Button from './Button'

function EmptyState({message}) {
    const navigate = useNavigate();
    return (
        <Container style={{height: '83vh'}} className='d-flex flex-column justify-content-evenly'>
            <div className="d-flex flex-column justify-content-center align-items-center">
                {message}
                <div className="my-5">
                    <Button title={'Go to Home Page'} onClick={() => navigate('/home')}></Button>
                </div>
            </div>
        </Container>
    );
}

export default EmptyState;