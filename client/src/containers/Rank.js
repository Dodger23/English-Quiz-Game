import {useNavigate} from "react-router-dom";

import Container from "react-bootstrap/esm/Container"

import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Button from '../components/Button'

function Rank({name, score, userRank}) {
    
    const navigate = useNavigate();

    return (
        <Container style={{height: '83vh'}} className='d-flex flex-column justify-content-evenly'>
            <div className="name">{name}</div>

            <Card className="custome-card" >
                <Row className="row h-100 w-100">
                    
                    <Col xs={12} md={5}>
                        <div className="feedback-container">
                            <p className="feedback-title">Rank</p>
                            <p className="feedback-value">{userRank}%</p>
                        </div>
                    </Col>

                    <Col xs={12} md={2}>
                        <div className="d-flex justify-content-center align-items-center p-3 h-100">
                            <span className="divider"></span>
                        </div>
                    </Col>

                    <Col xs={12} md={5}>
                        <div className="feedback-container">
                            <p className="feedback-title">Score</p>
                            <p className="feedback-value">{score}</p>
                        </div>
                    </Col>

                </Row>

            </Card>

            <Button title={'Try Again'} onClick={() => navigate('/home')}></Button>
        </Container>
    );
}

export default Rank;