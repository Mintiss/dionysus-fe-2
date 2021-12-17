import {useState, useEffect} from 'react'
import { Card } from 'react-bootstrap'
import axios from '../axios';
import { Row, Col } from 'react-bootstrap';

const AvarageReadings = ({batchId}) => {
    const [averageReadings, setAverageReadings] = useState('')

    useEffect( async () => {
        await axios.get(`/UIGateway/GetReadingsSinceBeginning`, { params: { batchId: batchId } })
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    setAverageReadings(res.data)
                }
            }).catch(error => {
                alert('Failed get average readings', error.message)
            })
    }, [])

    return (
        <Card className='bg-background  m-auto mt-5 border'>
            <Card.Header className='h4'>Average Readings</Card.Header>
            <Card.Body>
                <Row>
                    <Col>
                        <span>Average Temperature - {parseInt(averageReadings.temperatureReading)} °C</span>
                    </Col>
                    <Col>
                        <span>Average Humidity - {parseInt(averageReadings.humidityReading)} %</span>
                    </Col>
                </Row>
            </Card.Body>
        </Card>
    )
}

export default AvarageReadings
