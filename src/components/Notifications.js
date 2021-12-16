import { useEffect, useState } from 'react'
import { Dropdown } from 'react-bootstrap'
import axios from '../axios';
import Notification from './Notification';


const Notifications = () => {
    const [notifications, setNotifications] = useState([])

    useEffect(async () => {
        await axios.get(`/Notification/GetAllNotifications`)
            .then(res => {
                if (res.status === 200) {
                    setNotifications(res.data)
                    console.log('notifications', res.data)
                }
            }).catch(error => {
                alert('Failed get notifications', error.message)
            })

    }, [])

    return (
        <Dropdown>
            <Dropdown.Toggle variant="purple" id="dropdown-basic">
                Notifications
            </Dropdown.Toggle>

            <Dropdown.Menu variant="dark" className='border p-0'>

                {notifications.map(notification => {return (
                    <Dropdown.Item className='m-0 p-0 round'><Notification notification={notification}/> </Dropdown.Item>
                )})
                } 
            </Dropdown.Menu>
        </Dropdown>
    )
}

export default Notifications
