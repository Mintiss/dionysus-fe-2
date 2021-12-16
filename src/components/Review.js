import React from 'react'
import { Row, Col, ListGroup, Card } from 'react-bootstrap'

const Review = ({ username, sweetness, acidity, bitterness, overall, feedback, ratedOn }) => {
    return (
        <Card className='bg-background m-auto border'>
            <Card.Header className='h4 justify-content-left align-items-left mt-2 mb-0'>
                <span className="badge bg-purple d-flex ">Review by {username}</span>
            </Card.Header>
            <Card.Body>
                <Row className='m-0 p-0 text-white'>
                    <Col >
                        <p className='mb-0'>Feedback</p>
                    </Col>
                    <Col >
                        <p className='mb-0'>Taste Notes</p>
                    </Col>
                </Row>
                <ListGroup className='mt-0'>
                    <ListGroup.Item className='bg-background'>
                        <Row className='bg-background'>
                            <Col className='bg-background'>
                                <Card className='h-100 text-left border'>
                                    <Card.Body className='text-left bg-dark text-white'>
                                        {feedback}
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col>
                                <ListGroup>
                                    <ListGroup.Item className='bg-dark text-white border'>Bitterness - {bitterness}/5</ListGroup.Item>
                                    <ListGroup.Item className='bg-dark text-white border'>Sweetness - {sweetness}/5</ListGroup.Item>
                                    <ListGroup.Item className='bg-dark text-white border'>Acidity - {acidity}/5</ListGroup.Item>
                                </ListGroup>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='rounded bg-dark text-white border w-50 m-auto mb-2'>Overall Rating - {overall}/5</ListGroup.Item>

                </ListGroup>
                <p className='m-0 text-white'>Review date: {ratedOn}</p>
            </Card.Body>

        </Card>
    )
}

export default Review
