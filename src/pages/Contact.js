import React from 'react';
import { Container,Row,Col,Form, Button } from 'react-bootstrap';
import envelope from '../assets/envelope.png';
import phone from '../assets/phone.png';
import building from '../assets/building.png';


const Contact = () => {
  return (
    <>
<section className='about bg-dark-overlay'>
      <h1 className='text-light hdabout'>CONTACT</h1>
    </section>
    <section className='contact mt-5'>
      <Container>
        <Row>
          <Col xs lg='6'>
            <h1>Get In Touch </h1>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Your Name" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="email" placeholder="Your Email Address" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="number" placeholder="Your Mobile Number" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control type="text" placeholder="Your City" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Control as="textarea" rows={3} placeholder='Your Message' required />
        </Form.Group>
        <Button variant='light'className='rounded-pill learnbtn' >Send Message</Button>
      </Form>
          </Col>

          <Col lg='6'sm='12'>
            <h1>Our Address</h1>
           <div><img src={building} alt='building'/> <small>2130 Fulton Street, San Diego, CA 94117-1080 USA</small></div><br/>
           <span><img src={phone} alt='phone'/> <small>1-800-1234-567</small></span><br/><br/>
           <span><img src={envelope} alt='envelope'/></span> <small>info@demolink.org</small><br/>
           <iframe className='mt-5' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15093.860107984761!2d72.8397202!3d18.9550594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7cfdf5cadca43%3A0x2f248f63460fcd4f!2sHeuristic%20Academy!5e0!3m2!1sen!2sin!4v1688651063244!5m2!1sen!2sin" width="100%" height="400" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </Col>
        </Row>
      </Container>
    </section>


    </>
  )
}

export default Contact
