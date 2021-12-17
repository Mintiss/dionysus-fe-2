import BatchDetails from './BatchDetails'
import { Card } from 'react-bootstrap'
import BatchDashboard from './BatchDashboard'
import StarRating from './StarRating'
import Reviews from './Reviews'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import axios from '../axios'
import ReadingCharts from './ReadingCharts'
import { UserContext } from '../Contexts/UserContext';
import AvarageReadings from './AvarageReadings'


const SingleBatch = () => {
    const [batch, setBatch] = useState({})
    const [apiCallDone, setApiCallDone] = useState(false)
    const params = useParams();
    const { user, setUser } = useContext(UserContext)



    useEffect(async () => {
        await axios.get(`/batch/GetBatch`, { params: { batchId: params.batch_id } })
            .then(res => {
                if (res.status === 200) {
                    setProperties(res.data, true)
                }
            }).catch(error => {
                alert('Failed to get batch', error.message)
            })
    }, [])

    const setProperties = (batch, status) => {
        console.log('api call done')
        console.log('batch gotten', batch)
        setBatch(batch)
        setApiCallDone(status)
    }

    return (
        <Card className='bg-background w-50 m-auto mt-5 border'>
            <Card.Header className='h4'>Wine batch ID: {params.batch_id}</Card.Header>
            <Card.Body>
                {apiCallDone && <BatchDetails batch={batch} />}
                {(apiCallDone && (user.role === 'Winemaker' || user.role === 'Administrator')) && <ReadingCharts batchId={params.batch_id} />}                
                {(user.role === 'Winemaker' || user.role === 'Administrator') && <BatchDashboard batchId={params.batch_id} />}
                {(user.role === 'Winemaker' || user.role === 'Administrator' || user.role === 'Sommelier') && <AvarageReadings batchId={params.batch_id} />}
                {(user.role === 'Winemaker' || user.role === 'Administrator') && <StarRating batchId={batch.batchId} />}
                {apiCallDone && <Reviews ratings={batch.ratings} />}
                
            </Card.Body>
        </Card>
    )
}

export default SingleBatch
