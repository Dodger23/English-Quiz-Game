import { useState } from 'react';
import Card from 'react-bootstrap/Card';
import '../../assets/styles/slider.css'
import '../../assets/styles/globals.css'
import Actions from './Actions';
import Ticks from './Ticks';

function Slider () {
    const pages = [
        {
            title: 'Welcome! 👋',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                'sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
            ]
        },
        {
            title: 'How to Start? 🤔',
            paragraphs: [
                '1- Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
                '2- sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
                '3- Ut enim ad minim veniam, quis nostrud exercitation ullamco',
            ]
        },
        {
            title: 'Ranking 🏅',
            paragraphs: [
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
            ]
        },
    ]

    const [currentPage, setCurrentPage] = useState(0);

    const showNextPage = () => {
        let next = currentPage + 1;
        setCurrentPage(next)

    }
    const showPrevPage = () => {
        let prev = currentPage - 1;
        setCurrentPage(prev)
    }

    return (
        <div style={{height: '83vh'}} className='d-flex flex-column justify-content-center '>
            
            <Card   
                bg='white'
                text='black'
                className='custome-card'>
                    
                <Card.Header bsPrefix='custome-card-header'>
                    {pages[currentPage].title}
                </Card.Header>
                
                <Card.Body >
                    <div className='custome-card-body'>
                        {
                            pages[currentPage].paragraphs.map((text, index) => <p key={index}>{text}</p>)
                        }              
                    </div>
                </Card.Body>
            </Card>

            <Ticks currentPage={currentPage}/>

            <Actions currentPage={currentPage} showNextPage={showNextPage} showPrevPage={showPrevPage}/>
        </div>
    )
}

export default Slider