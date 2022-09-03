import React from 'react';

import Container from "react-bootstrap/esm/Container";

import ReactLoading from 'react-loading';

function Loading() {
    return (
        <Container style={{height: '83vh'}} className='d-flex flex-column justify-content-evenly'>
            <div className="d-flex flex-column align-items-center">
                <ReactLoading type={'spin'} color={'#fff'}  />
                <p>Loding</p>
            </div>
        </Container>
    );
}

export default Loading;