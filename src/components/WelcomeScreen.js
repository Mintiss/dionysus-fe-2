import statueImage from '../images/dionysus.png'
import Figure from 'react-bootstrap/Figure'

const WelcomeScreen = () => {
    return (
        <Figure>
            <Figure.Image
                alt="dionysus statue"
                src={statueImage}
                width='75%'
            />
            <Figure.Caption>
                <h1 className='text-white'>Monitoring, reviewing and rating for the classy alcoholic </h1>
            </Figure.Caption>
        </Figure>
    )
}

export default WelcomeScreen
