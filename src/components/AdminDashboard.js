import React from 'react'
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'

const AdminDashboard = () => {
    return (
        <Modal>
            <Modal.Header>
                <Modal.Title>Administrator Dashboard</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
                <Button variant="success">Go back</Button>
                <Button variant="purple">Save changes</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default AdminDashboard
