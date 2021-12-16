import { useState, useContext } from 'react'
import { Card, Row, Col, Form, ListGroup } from 'react-bootstrap'
import StarRatings from 'react-star-ratings';
import {UserContext} from '../Contexts/UserContext';    
import axios from '../axios';



const StarRating = ({batchId}) => {
    const [sweetnessRating, setSweetnessRating] = useState(0)
    const [acidityRating, setAcidityRating] = useState(0)
    const [bitternessRating, setBitternessRating] = useState(0)
    const [overallRating, setOverallRating] = useState(0)
    const [feedback, setFeedback] = useState('')
    const {user, setUser} = useContext(UserContext);


    const rateBatch = async () => {
        if (feedback === '') return alert('Please provide some feedback')
        if(sweetnessRating === 0) return alert('Please provide a sweetness rating')
        if(acidityRating === 0) return alert('Please provide a acidity rating')
        if(bitternessRating === 0) return alert('Please provide a bitterness rating')
        if(overallRating === 0) return alert('Please provide an overall rating')

        await axios.post(`/rating/addrating`, {username: user.username, batchId: batchId, sweatnessRating: sweetnessRating, acidityRating: acidityRating, bitternessRating: bitternessRating, overallRating: overallRating, feedback: feedback, ratedOn: new Date(Date.now()).toISOString()})
            .then(res => {
                if(res.status === 200)
                {
                    console.log(res.data)
                }
            }).catch(error => {
                console.log("Status was not OK: " + error.message);
               
            })
    }

    return (
        <Card className='bg-background m-auto mt-5 border'>
            <Card.Header className='h4'>Leave a review</Card.Header>
            <Card.Body>
                <Form className='mb-3'>
                    <Form.Group>
                        <Form.Label>Leave batch feedback</Form.Label>
                        <Form.Control className='bg-dark' as="textarea" rows={3} onChange={e => setFeedback(e.target.value)} />
                    </Form.Group>
                </Form>
                <ListGroup>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <p className='m-0 align-items-center'>Sweetness</p>
                            </Col>
                            <Col className='m-0 align-items-center'>
                                <StarRatings
                                    rating={sweetnessRating}
                                    starRatedColor='purple'
                                    changeRating={setSweetnessRating}
                                    numberOfStars={5}
                                    starDimension='40px'
                                    starHoverColor='rgb(52, 58, 64)'
                                    name='sweetnessRating'
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <p className='m-0 align-items-center'>Acidity</p>
                            </Col>
                            <Col className='m-0 align-items-center'>
                                <StarRatings
                                    rating={acidityRating}
                                    starRatedColor='purple'
                                    changeRating={setAcidityRating}
                                    numberOfStars={5}
                                    starDimension='40px'
                                    starHoverColor='rgb(52, 58, 64)'
                                    name='sweetnessRating'
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <p className='m-0 align-items-center'>Bitterness</p>
                            </Col>
                            <Col className='m-0 align-items-center'>
                                <StarRatings
                                    rating={bitternessRating}
                                    starRatedColor='purple'
                                    changeRating={setBitternessRating}
                                    numberOfStars={5}
                                    starDimension='40px'
                                    starHoverColor='rgb(52, 58, 64)'
                                    name='sweetnessRating'
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <p className='m-0 align-items-center'>Overall</p>
                            </Col>
                            <Col className='m-0 align-items-center'>
                                <StarRatings
                                    rating={overallRating}
                                    starRatedColor='purple'
                                    changeRating={setOverallRating}
                                    numberOfStars={5}
                                    starDimension='40px'
                                    starHoverColor='rgb(52, 58, 64)'
                                    name='sweetnessRating'
                                />
                            </Col>
                        </Row>
                    </ListGroup.Item>
                </ListGroup>
                <button className='btn btn-purple mt-3' onClick={rateBatch}>Submit review</button>
            </Card.Body>

        </Card>
    )
}

export default StarRating
