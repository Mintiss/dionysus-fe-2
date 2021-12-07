import statueImage from '../images/dionysus.png'
import Figure from 'react-bootstrap/Figure'
import { useNavigate } from "react-router-dom";


const WelcomeScreen = () => {
    const navigate = useNavigate()

    return (
        <Figure>
            <Figure.Image
                alt="dionysus statue"
                src={statueImage}
                width='75%'
            />
        </Figure>
    )
}

export default WelcomeScreen
