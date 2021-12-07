import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import FloatingLabel from 'react-bootstrap/FloatingLabel'

const CreateBatch = () => {
    return (
        <Card className='bg-background w-50 m-auto mt-5 border'>
            <Card.Header className='h4'>Create a new batch</Card.Header>
            <Card.Body>
                <Form className='w-50 m-auto p-5'>

                    <FloatingLabel controlId="floatingInput" label="Barrel Count" className="mb-3">
                        <Form.Control type="text" placeholder="Barrel Count" />
                    </FloatingLabel>


                    <FloatingLabel controlId="floatingPassword" label="Target Temperature" className="mb-3">
                        <Form.Control type="password" placeholder="Target Temperature" />
                    </FloatingLabel>

                    <FloatingLabel controlId="floatingPassword" label="Target Humidity" className="mb-3">
                        <Form.Control type="password" placeholder="Target Humidity" />
                    </FloatingLabel>

                    <button className='btn text-white bg-purple m-1' >Create Batch</button>
                </Form>
            </Card.Body>
        </Card>
    )
}

export default CreateBatch
