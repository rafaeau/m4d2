import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import booksRelease from '../data/scifi.json'

const MyCarousel = () => (
    <Container>
    <Row className="justify-content-center" style={{ marginTop: '1em' }}>
        <Col xs={12} md={6} className="text-center">
            <h3>Latest Sci-fi releases</h3>
            <Carousel className="my-4">
                {
                    booksRelease.map(scifi => (
                        <Carousel.Item key={scifi.id}>
                            <img
                                className="d-block w-100"
                                style={{objectFit: "cover"}}
                                src={scifi.img}
                                /* width={348}
                                height={500} */
                            />
                            {/* <Carousel.Caption>
                                <h3>{scifi.title}</h3>
                            </Carousel.Caption> */}
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </Col>
    </Row>
</Container>
)

export default MyCarousel