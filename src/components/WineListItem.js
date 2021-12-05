import Card from 'react-bootstrap/Card'
import ListGroup from 'react-bootstrap/ListGroup'

const WineListItem = ({ batchName, companyTitle, averageRating, ratingAmount, storedOn }) => {
    return (
        <Card className='bg-dark p-0 text-white'>
            <Card.Body>
                <Card.Title>{batchName}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">By {companyTitle}</Card.Subtitle>
                <ListGroup variant="flush rounded">
                    <ListGroup.Item>Average rating {averageRating}</ListGroup.Item>
                    <ListGroup.Item>Rated by {ratingAmount} users</ListGroup.Item>
                    <ListGroup.Item>Batch was stored on {storedOn}</ListGroup.Item>
                </ListGroup>
                
            </Card.Body>
        </Card>
    )
}

export default WineListItem
