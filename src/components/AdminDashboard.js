import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import ListGroup from 'react-bootstrap/ListGroup'
import Tab from 'react-bootstrap/Tab'
import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton'
import { useState } from 'react'


let testUserList = [
    {
        username: 'User 1',
        role: 'Gay',
        name: 'Bob'
    },
    {
        username: 'User 2',
        role: 'bay',
        name: 'Bobby'
    },
    {
        username: 'User 3',
        role: 'Hayy',
        name: 'Boobie'
    },
    {
        username: 'User 4',
        role: 'asdasddd',
        name: 'Boobie'
    },
    {
        username: 'User 5',
        role: 'fasfas',
        name: 'Boobie'
    }
]



const AdminDashboard = () => {
    const [userList, setUserList] = useState(testUserList)

    const changeRole = (index, role) => {
        let updatedUserlist = userList
        updatedUserlist[index].role = role
        setUserList([...updatedUserlist])
    }

    return (
        <Card className='bg-background w-50 m-auto mt-5 border'>
            <Card.Header className='h4'>Admin Dashboard</Card.Header>
            <Card.Body>
                <Card.Title>Registered users</Card.Title>
                <Tab.Container defaultActiveKey="#user1">

                    <ListGroup className='w-75 m-auto border'>

                        {userList.map(user => {
                            const href = `#user${userList.findIndex(x => x.username === user.username) + 1}`
                            return (
                                <ListGroup.Item className='text-black font-weight-bolder text-capitalize' action href={href}>
                                    {user.username}, ({user.role})
                                </ListGroup.Item>
                            )
                        })}
                    </ListGroup>

                    <Tab.Content>

                        {userList.map(user => {
                            const index = userList.findIndex(x => x.username === user.username)
                            const href = `#user${index + 1}`
                            return (
                                <Tab.Pane eventKey={href}>
                                    <Card.Title className='mt-3'>Role Selection</Card.Title>
                                    <DropdownButton title="Change Role" variant='purple'>
                                        <Dropdown.Item onClick={() => changeRole(index, 'user')}>User</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeRole(index, 'sommieler')}>Sommieler</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeRole(index, 'cunt')}>Cunt</Dropdown.Item>
                                        <Dropdown.Item onClick={() => changeRole(index, 'admin')}>Admin</Dropdown.Item>
                                    </DropdownButton>
                                </Tab.Pane>
                            )
                        })}
                    </Tab.Content>
                </Tab.Container>
            </Card.Body>
        </Card >
    )
}

export default AdminDashboard
