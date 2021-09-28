import Card from 'react-bootstrap/Card'

const MyFooter = () => (
    <Card className="text-center">
        
        <Card.Body>
            <Card.Text>
                Address: Frankfurter Allee 60, 10247 Berlin
            </Card.Text>
            
        </Card.Body>
        <Card.Footer className="text-muted">Made in Berlin</Card.Footer>
    </Card>
)

export default MyFooter