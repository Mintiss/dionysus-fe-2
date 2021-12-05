import WineListItem from './WineListItem'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'


const wineBatchList = [
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    },
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    },
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    },
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    },
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    },
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    },
    {
        batchName: 'CherryCum',
        companyTitle: 'Pop dat shit',
        averageRating: '4.5',
        ratingAmount: 123,
        storedOn: 'yesterday idk'
    }
]

const WineBatchesScreen = () => {
    return (
        <Card className='bg-background w-50 m-auto mt-5 border'>
            <Card.Body>
            <Card.Header className='h3'>Explore the wines tracked on Dionysus!</Card.Header>
                <ListGroup variant="flush p-0">
                    {wineBatchList.map(batch => {
                        return (
                            <ListGroup.Item className='p-0 border m-2 '>
                            <WineListItem
                                batchName={batch.batchName}
                                companyTitle={batch.companyTitle}
                                averageRating={batch.averageRating}
                                ratingAmount={batch.ratingAmount}
                                storedOn={batch.storedOn} />
                        </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default WineBatchesScreen
