import { useState, useEffect } from 'react'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import BootstrapSwitchButton from 'bootstrap-switch-button-react'
import { FormControl } from 'react-bootstrap'
import { InputGroup } from 'react-bootstrap'
import axios from '../axios';



const BatchDashboard = ({ batchId }) => {
    const [autoAjustTemp, setAutoAjustTemp] = useState(true)
    const [autoAjustHum, setAutoAjustHum] = useState(true)
    const [tempTarget, setTempTarget] = useState('')
    const [humTarget, setHumTarget] = useState('')
    const [humPlaceholder, setHumPlaceholder] = useState('Auto')
    const [tempPlaceholder, setTempPlaceholder] = useState('Auto')

    console.log('batchid from batch dash', batchId)

    useEffect(async () => {
        getBatch()
        getTempAjustmentModes()
        getHumAjustmentModes()
    }, [])

    const getBatch = async () => {
        await axios.get(`/batch/GetBatch`, { params: { batchId: batchId } })
            .then(res => {
                if (res.status === 200) {
                    setTempTarget(res.data.targetTemperature)
                    setHumTarget(res.data.targetHumidity)
                }
            }).catch(error => {
                alert('Failed to get batch', error.message)
            })
    }

    const getTempAjustmentModes = async () => {
        batchId = parseInt(batchId)
        await axios.get(`/EnvironmentalController/GetManualControl`, { batchId: batchId, pinNo: 14 })
            .then(res => {
                if (res.status === 200) {
                    console.log('temp ajustemt', res.data)
                }
            }).catch(error => {
                alert('Failed to get tempautoajust', error.message)
            })
    }

    const getHumAjustmentModes = async () => {
        batchId = parseInt(batchId)
        await axios.get(`/EnvironmentalController/GetManualControl`, { batchId: batchId, pinNo: 15 })
            .then(res => {
                if (res.status === 200) {
                    console.log('humdidity ajustemnt', res.data)
                }
            }).catch(error => {
                alert('Failed to get humautoajust', error.message)
            })
    }

    const updateValues = async () => {
        if (!autoAjustTemp) {
            if (tempTarget === '' || typeof tempTarget !== 'number') return alert('Temperature target invalid')
            await axios.put(`/Batch/SetTemperatureTarget`,
                {
                    temperatureTarget: parseInt(tempTarget),
                    batchId: parseInt(batchId) 
                })
                .then(res => {
                    if (res.status === 200) {
                        getBatch()
                        alert('Temp target updated')
                    }
                }).catch(error => {
                    alert('Failed to update temp values', error.message)
                })
        }
        if (!autoAjustHum) {
            if (humTarget === '' || typeof humTarget !== 'number') return alert('Invalid hum target')
            await axios.put(`/Batch/SetHumidityTarget`,
                {
                    humidityTarget: parseInt(humTarget),
                    batchId: batchId 
                })
                .then(res => {
                    if (res.status === 200) {
                        console.log(res.data)
                        getBatch()
                        alert('Hum target updated')
                    }
                }).catch(error => {
                    alert('Failed to update hum values', error.message)
                })
        }
        if (autoAjustTemp) {
            await axios.put(`/EnvironmentalController/SetManualControl`,
                {
                    enableManualControl: true,
                    pinNo: 14,
                    batchId: parseInt(batchId)
                })
                .then(res => {
                    if (res.status === 200) {
                        getBatch()
                        alert('Auto ajust enabled for temperature')
                    }
                }).catch(error => {
                    alert('Failed to enable temperature auto ajust', error.message)
                })
        }
        if (autoAjustHum) {
            await axios.put(`/EnvironmentalController/SetManualControl`,
                {
                    enableManualControl: true,
                    pinNo: 15,
                    batchId: parseInt(batchId)
                })
                .then(res => {
                    if (res.status === 200) {
                        getBatch()
                        alert('Auto ajust enabled for humidity')
                    }
                }).catch(error => {
                    alert('Failed to enable humidity auto ajust', error.message)
                })
        }

    }

    return (
        <Card className='bg-background m-auto mt-5 border'>
            <Card.Header className='h4'>Ajust batch conditions</Card.Header>
            <Card.Body>
                <Row className="g-2 mb-1">
                    <Col>Target Temperature</Col>
                    <Col>Target Humidity </Col>
                </Row>
                <Row className="g-2 mb-2">
                    <Col>
                        <InputGroup className="mb-2">
                            <FormControl className='bg-dark' value={tempTarget} onChange={e => setTempTarget(e.target.value)} disabled={autoAjustTemp} id="inlineFormInputGroup" placeholder={tempPlaceholder} />
                            <InputGroup.Text className='bg-dark'>°C</InputGroup.Text>
                        </InputGroup>
                    </Col>
                    <Col>
                        <InputGroup className="mb-2">
                            <FormControl className='bg-dark' value={humTarget} onChange={e => setHumTarget(e.target.value)} disabled={autoAjustHum} id="inlineFormInputGroup" placeholder={humPlaceholder} />
                            <InputGroup.Text className='bg-dark'>%</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <span>Automatic Ajustment</span>
                <Row className='g-2 mt-2'>
                    <Col>
                        <BootstrapSwitchButton
                            onstyle="purple"
                            width={200}
                            offstyle="dark"
                            checked={autoAjustTemp}
                            onlabel='Enabled'
                            style='border'
                            offlabel='Disabled'
                            onChange={(checked) => {
                                if (checked === true) {
                                    setAutoAjustTemp(checked)
                                    setTempPlaceholder('Auto')
                                }
                                if (checked === false) {
                                    setAutoAjustTemp(checked)
                                    setTempPlaceholder('Temperature')
                                }
                            }}
                        />
                    </Col>
                    <Col>
                        <BootstrapSwitchButton
                            onstyle="purple"
                            width={200}
                            offstyle="dark"
                            checked={autoAjustHum}
                            onlabel='Enabled'
                            style='border'
                            offlabel='Disabled'
                            onChange={(checked) => {
                                if (checked === true) {
                                    setAutoAjustHum(checked)
                                    setHumPlaceholder('Auto')
                                }
                                if (checked === false) {
                                    setAutoAjustHum(checked)
                                    setHumPlaceholder('Humidity')
                                }
                            }}
                        />
                    </Col>
                </Row>
                <button className='btn btn-purple mt-2' onClick={updateValues}>Update values</button>
            </Card.Body>
        </Card>
    )
}

export default BatchDashboard
