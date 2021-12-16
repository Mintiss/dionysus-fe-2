import React from 'react'
import Chart from './Chart'
import { Card } from 'react-bootstrap'


const ReadingCharts = ({batchId}) => {
    return (
        <Card className='bg-background m-auto mt-5 border'>
            <Card.Header className='h4'>Reading charts</Card.Header>
            <Card.Body>
                <Chart batchId={batchId} />
            </Card.Body>
        </Card>
    )
}

export default ReadingCharts
