import React from 'react'
import Review from './Review'
import { Card, ListGroup } from 'react-bootstrap'
import { useState, useEffect } from 'react'

const reviews = [
    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    },    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    },
    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    },
    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    },
    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    },
    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    },
    {
        username: 'Billy',
        sweetnessRating: 3,
        acidityRating: 1,
        biternessRating: 3,
        overallRating: 5,
        feedback: 'ayo dis shit bussn fam lazgoo',
        ratedOn: '1234/423/23'
    }
]

const Reviews = ({ratings}) => {
    const [reviewList, setReviewList] = useState(reviews)

    useEffect( () => {
            setReviewList(ratings)
    }, [])

    return (
        <Card className='bg-background m-auto mt-5 border'>
            <Card.Header className='h4'>Reviews</Card.Header>
            <Card.Body>
                <ListGroup>
                {reviewList.map(review => {
                        return (
                            <ListGroup.Item className='p-0 bg-background m-2 '>
                            <Review
                                username={review.username}
                                sweetness={review.sweatnessRating}
                                acidity={review.acidityRating}
                                bitterness={review.bitternessRating}
                                overall={review.overallRating}
                                feedback={review.feedback}
                                ratedOn={review.ratedOn.substring(0,10)} />
                        </ListGroup.Item>
                        )
                    })}
                </ListGroup>
            </Card.Body>
        </Card>
    )
}

export default Reviews
