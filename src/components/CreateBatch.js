import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import { FloatingLabel, Col, Row, Alert } from 'react-bootstrap'
import { useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import axios from '../axios'


const CreateBatch = () => {
    const [barrelCount, setBarrelCount] = useState()
    const [targetTemperature, setTargetTemperature] = useState()
    const [targetHumidity, setTargetHumidity] = useState()
    const [startDate, setStartDate] = useState(new Date())
    const [endDate, setEndDate] = useState(new Date())


    const createBatch = async e => {
        e.preventDefault()

        if (barrelCount === '' || typeof barrelCount !== 'number')
            return alert('Barrel count must be a number')
        if (targetTemperature === '' || typeof targetTemperature !== 'number')
            return alert('Target temperature must be a number')
        if (targetHumidity === '' || typeof targetHumidity !== 'number')
            return alert('Target humidity must be a number')
        if (startDate.getTime() === endDate.getTime() || endDate < startDate)
            return alert('Date range invalid')

        await axios.post(`/batch/addbatch`, {
            barrelCount: barrelCount,
            targetHumidity: targetHumidity,
            targetTemperature: targetTemperature,
            storedOn: startDate.toISOString(),
            finishedStorage: endDate.toISOString()
        }).then(res => {
            if (res.status === 200) {
                alert(`Created wine batch with id ${res.data}` )
            }
        }).catch(error => {
            alert('Error creating batch ', error.message)
        })

    }

    return (
        <Card className='bg-background w-50 m-auto mt-5 border'>
            <Card.Header className='h4'>Create a new batch</Card.Header>
            <Card.Body>
                <Form className='w-50 m-auto p-5'>

                    <FloatingLabel controlId="floatingInput" label="Barrel Count" className="mb-3">
                        <Form.Control type="text" placeholder="Barrel Count" className='bg-dark' onChange={e => setBarrelCount(parseInt(e.target.value))} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Target Temperature" className="mb-3">
                        <Form.Control type="text" placeholder="Target Temperature" className='bg-dark' onChange={e => setTargetTemperature(parseInt(e.target.value))} />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Target Humidity" className="mb-3">
                        <Form.Control type="text" placeholder="Target Humidity" className='bg-dark' onChange={e => setTargetHumidity(parseInt(e.target.value))} />
                    </FloatingLabel>

                    <Row className='mb-3'>
                        <Col className='mb-3'>
                            <span>Storage start</span>
                            <DatePicker
                                selected={startDate}
                                onChange={date => setStartDate(date)}
                                showYearDropdown
                                dropdownMode='select' />
                        </Col>
                        <Col>
                            <span>Storage end</span>
                            <DatePicker
                                selected={endDate}
                                onChange={date => setEndDate(date)}
                                showYearDropdown
                                dropdownMode='select' />
                        </Col>
                    </Row>

                    <button className='btn text-white bg-purple m-1' onClick={createBatch} >Create Batch</button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateBatch
