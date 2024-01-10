import React from 'react'
import { Container, Row, Col , Card , Button} from 'react-bootstrap'
import cardpic1 from '../Assets/cardpic1.jpg'
import cardpic2 from "../Assets/cardpic2.jpg"
import cardpic3 from '../Assets/cardpic3.jpg'

export default function Packages() {
  return (
    <div className='packages1'id='Packages'>
        <Container fluid className='py-5'>
            <h1 className="text-center text-dark py-2">Packages We Provide</h1> <hr/>
        <Row className='py-5'>
        <Col sm={4}>
        <Card style={{ height: '35rem' }}>
      <Card.Img variant="top" src={cardpic1} />
      <Card.Body>
        <Card.Title>Group training</Card.Title>
        <Card.Text>
        Group training keeps you motivated and working hard. Working with a coach keeps you safe and injury-free. Each day, we’ll build you a challenging workout that combines the best of all fitness methods, grounded in exercise science.
        </Card.Text>
       <Button variant="secondary">Free 7 Day Trial</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{  height: '35rem' }}>
      <Card.Img variant="top" src={cardpic2} />
      <Card.Body>
        <Card.Title>Online Training</Card.Title>
        <Card.Text>
          Stay fit and healthy from your home.During times of stress and panic, cultivating physical strength and inner calm is vital to your health. Now is not the time to succumb to unhealthy habits. Start working 1-on-1 with a coach to improve your health and wellness from the safety of your home.
        </Card.Text>
        <Button variant="secondary">Free 7 Day Trial</Button>
      </Card.Body>
    </Card>
        </Col>
        <Col sm={4}>
        <Card style={{ height: '35rem' }}>
      <Card.Img variant="top" src={cardpic3} />
      <Card.Body>
        <Card.Title>Private Training</Card.Title>
        <Card.Text>
        Personalized instruction means that every second of your gym time is devoted to meeting your needs. Your personal coach can help you build a specific skill set, strengthen weak areas, gain a competitive edge in your sport, and stay motivated to reach your goals.
        </Card.Text>
        <Button variant="secondary">Free Consultation</Button>
      </Card.Body>
    </Card>
        </Col>

      </Row>
        </Container>
    </div>
  )
}
