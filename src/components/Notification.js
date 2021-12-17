import React from 'react'
import { Row, Col } from 'react-bootstrap'
import axios from '../axios';


const Notification = ({ notification }) => {

    const resolveNotification = async () => {
        await axios.get(`/Notification/ResolveNotification`, { params: { notificationId: notification.notificationId } })
            .then(res => {
                if (res.status === 200) {
                    notification.resolved = true
                }
            }).catch(error => {
                alert('Failed to resolve notification', error.message)
            })
    }

    return (
        <div className='border justify-content-center'>
            <span className='m-1'>Abnormal reading at batch {notification.batchId}</span>
            <Row>
                <Col className='m-1'>
                    Teperature - Reading: {notification.temperatureReading} Target: {notification.temperatureTarget}
                </Col>
                <Col className='m-1'>
                    Humidity - Reading: {notification.humidityReading} Target: {notification.humidityTarget}
                </Col>
                <Col className='m-1'>
                    Date - {(notification.postedOn).substring(0,10)} {(notification.postedOn).substring(11,19)} 
                </Col>
                <Col>
                    <button className='btn btn-purple m-1 align-self-center' onClick={resolveNotification}>Mark as resolved</button>
                </Col>
            </Row>
        </div>
    )
}

export default Notification
