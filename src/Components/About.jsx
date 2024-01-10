import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import './About.css'
import Bg2 from '../Assets/Bg2.jpg'
export default function About() {
  return (
    <div id='About'>
        <Container fluid>
                <Row className=" text-center text-dark my-5 py-5">
                    <Col sm={6}>
                        <img  src={Bg2} alt="" />
                    </Col>
                    <Col sm={6}>
                    <h1>About Us</h1><hr/>
                    <p>At Fitness Club, we believe that fitness and wellbeing are the cornerstones of a full and vibrant life. Established in 2002, we began our journey as a family-owned business dedicated to providing exceptional gym equipment at affordable prices. But, we dreamed bigger than just being an ordinary fitness equipment supplier; we aspired to lead the industry.

Two decades later, we are proud to have transformed Gym and Fitness into one of India's premier online retailers of fitness & Health. We've moved beyond just supplying gear – we've become advocates for fitness, wellbeing and life enrichment. Our commitment to excellence is reflected not only in the quality equipment we provide but also in the lives we've improved.

Our real success lies in the thousands of customers we've empowered to live longer, more joyful, and healthier lives. We're more than just a fitness company – we're your partners in health, your cheerleaders on the sideline, motivating you to reach your personal fitness goals. Embrace the fitness journey with us and see how it transforms your world.</p>
                    </Col>
                </Row>

              </Container>

    </div>
  )
}

