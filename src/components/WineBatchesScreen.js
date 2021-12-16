import WineListItem from './WineListItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import { useEffect, useState } from 'react'
import axios from '../axios'
import Chart from './Chart'

const wineBatchList = [
    {
        batchId: 1,
        barrelCount: 12,
        targetHumidity: 69.2,
        targetTemperature: 21.1,
        storedOn: "2021-12-10T16:02:02.163",
        finishedStorage: "2021-12-10T16:02:02.163",
        environmentalControllers: [],
        environmentalReadings: [],
        notifications: [],
        ratings: []
    },
    {
        batchId: 1,
        barrelCount: 12,
        targetHumidity: 69.2,
        targetTemperature: 21.1,
        storedOn: "2021-12-10T16:02:02.163",
        finishedStorage: "2021-12-10T16:02:02.163",
        environmentalControllers: [],
        environmentalReadings: [],
        notifications: [],
        ratings: []
    },
    {
        batchId: 1,
        barrelCount: 12,
        targetHumidity: 69.2,
        targetTemperature: 21.1,
        storedOn: "2021-12-10T16:02:02.163",
        finishedStorage: "2021-12-10T16:02:02.163",
        environmentalControllers: [],
        environmentalReadings: [],
        notifications: [],
        ratings: []
    },
    {
        batchId: 1,
        barrelCount: 12,
        targetHumidity: 69.2,
        targetTemperature: 21.1,
        storedOn: "2021-12-10T16:02:02.163",
        finishedStorage: "2021-12-10T16:02:02.163",
        environmentalControllers: [],
        environmentalReadings: [],
        notifications: [],
        ratings: []
    },
    {
        batchId: 1,
        barrelCount: 12,
        targetHumidity: 69.2,
        targetTemperature: 21.1,
        storedOn: "2021-12-10T16:02:02.163",
        finishedStorage: "2021-12-10T16:02:02.163",
        environmentalControllers: [],
        environmentalReadings: [],
        notifications: [],
        ratings: []
    },
    {
        batchId: 1,
        barrelCount: 12,
        targetHumidity: 69.2,
        targetTemperature: 21.1,
        storedOn: "2021-12-10T16:02:02.163",
        finishedStorage: "2021-12-10T16:02:02.163",
        environmentalControllers: [],
        environmentalReadings: [],
        notifications: [],
        ratings: []
    },
]

const WineBatchesScreen = () => {
    const [wineBatches, setWinebatches] = useState(wineBatchList)

    useEffect(async () => {
        await axios.get(`/batch/getallbatches`)
            .then(res => {
                if (res.status === 200) {
                    console.log(res.data)
                    setWinebatches(res.data)
                }
            }).catch(error => {
                alert('Failed to fetch batches', error.message)
            })
    }, [])

    return (
        <Card className='bg-background w-50 m-auto mt-5 border'>
            <Card.Body>
                <Card.Header className='h3'>Explore the wines tracked on Dionysus!</Card.Header>
                <ListGroup variant="flush p-0">
                    {wineBatches.map(batch => {
                        return (
                            <ListGroup.Item className='p-0 bg-background m-2 '>
                                <WineListItem
                                    batch={batch}
                                />
                            </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default WineBatchesScreen
