import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'
import { NavLink } from 'react-router-dom'

const WineListItem = ({ batch }) => {

    return ( 
        <Card className='bg-background p-0 text-white border'>
            <Card.Body>
                <Card.Title>Batch number - {batch.batchId}</Card.Title>
                <ListGroup variant="flush rounded border">
                    <ListGroup.Item className='bg-dark text-white '>Batch was stored on {batch.storedOn.substring(0, 10)}</ListGroup.Item>
                    <ListGroup.Item className='bg-dark text-white '>Storage end date {batch.finishedStorage.substring(0, 10)}</ListGroup.Item>
                </ListGroup>
                <NavLink to={`/batch/${batch.batchId}`} className='btn btn-purple mt-3'> More details</NavLink>

            </Card.Body>
        </Card>
    )
}

export default WineListItem
