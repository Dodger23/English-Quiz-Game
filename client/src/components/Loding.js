import Container from "react-bootstrap/esm/Container";

function Loading() {
    return (
        <Container style={{height: '83vh'}} className='d-flex flex-column justify-content-evenly'>
            <div className="d-flex justify-content-center">
                Loading...
            </div>
        </Container>
    );
}

export default Loading;