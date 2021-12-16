import React from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'

const BatchDetails = ({ batch }) => {

    return (
        <Card className='bg-background m-auto mt-5 border'>
            <Card.Header className='h4'>Batch details</Card.Header>
            <Card.Body>
                <ListGroup>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Batch ID</span>
                            </Col>
                            <Col>
                                <span>{batch.batchId}</span>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Barrel Count</span>
                            </Col>
                            <Col>
                                <span>{batch.barrelCount}</span>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Target Humidity</span>
                            </Col>
                            <Col>
                                <span>{batch.targetHumidity}</span>
                            </Col>
                        </Row></ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Target Temperature</span>
                            </Col>
                            <Col>
                                <span>{batch.targetTemperature}</span>
                            </Col>
                        </Row></ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Stored On</span>
                            </Col>
                            <Col>
                                <span>{(batch.storedOn).substring(0, 10)}</span>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Storage End</span>
                            </Col>
                            <Col>
                                <span>{(batch.finishedStorage).substring(0, 10)}</span>
                            </Col>
                        </Row>
                    </ListGroup.Item>
                    {batch.ratings.length !== 0 && <ListGroup.Item className='text-white bg-dark border'>
                        <Row className='g-2 text-white bg-dark'>
                            <Col>
                                <span>Average Overall Rating</span>
                            </Col>
                            <Col>
                                <span>{
                                    batch.ratings.map(ratings => ratings.overallRating)
                                        .reduce((sum, value) => {
                                            return sum + value;
                                        }, 0) / batch.ratings.length

                                }</span>
                            </Col>
                        </Row>
                    </ListGroup.Item>}
                </ListGroup>
            </Card.Body>

        </Card>
    )
}

export default BatchDetails
