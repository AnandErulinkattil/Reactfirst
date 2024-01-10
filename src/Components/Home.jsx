import React from 'react'
import './Home.css'
import Bg1 from '../Assets/Bg1.jpg'
import { Button, Container, Row, Col } from 'react-bootstrap'


export default function Home() {
  return (
      <div id='Home'>
          <div style={{ backgroundImage: `url(${Bg1})`, }} className='head1'>
              <Container fluid >
                  <Row className=" text-center text-white">
                      <Col sm={12}>
                          <h1 className='header1'>Welcome Fitness Freaks !!!</h1><br /><br />
                          <h2>Are you ready to</h2><br />
                          <h1>Burn Some <span className="text-primary">Calories?</span></h1>
                      </Col>
                  </Row>
                  <div className='btn1'>
                  <Row>
                      <Col sm={12}>
                          <Button href='#Register' className='mx-2 bg-light text-dark'>Join Us</Button><Button href='#About'>Learn more</Button>
                      </Col>
                  </Row>
                  </div>
              </Container>
          </div>
      </div>
  )
}
