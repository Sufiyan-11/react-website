import React from 'react';
import { Container, Row,Col, Button,Card } from 'react-bootstrap';
import brand from '../assets/brand-inverse.png';
import home from '../assets/home.jpg';
import project1 from '../assets/project-1.jpg';
import project2 from '../assets/project-2.jpg';
import project3 from '../assets/project-3.jpg';
import project4 from '../assets/project-4.jpg';
import project5 from '../assets/project-5.jpg';
import project6 from '../assets/project-6.jpg';
import user from '../assets/user.png';
import leaf from '../assets/leaf.png';
import house from '../assets/house.png';
import apple from '../assets/apple-logo.png';


const Home = () => {
  return (
    <>
      <section className='banner bg-dark-overlay'>
        <Container>
          <Row>
            <Col lg="6">
            <img src={brand} className='homeimg img-fluid'alt='brand'/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='aboutme'>
        <Container>
          <Row>
            <Col lg="6" sm="12">
            <h1 className='mt-5'>A Few Words About Me</h1>
            <p className='mt-5 fs-5 pclr'>My name is Samantha Morgan, and I have been a fine artist since my youth. 
              I find inspiration from the innovative styles of contemporary and urban art, such as graphic and graffiti illustrations.
              I strongly believe that art is a global form of communication. 
              It educates visually by either moving you, pleasing you, or even inspiring you.</p>
            <Button variant='light' className='rounded-pill learnbtn' >Learn More</Button>
            </Col>
            <Col lg="6" sm="12">
              <img src={home} className='mt-5 img-fluid' alt='home'/>
            </Col>
          </Row>
        </Container>
      </section>
      <section className='painting bg-body-tertiary mt-5 pt-5'>
        <Container>
          <Row>
            <h1 className='text-center pb-4'>My Paintings</h1>
            <Col lg="4" sm="12" className='cardmargin'>
            <Card className='shadow h-100'>
            <Card.Img variant="top" src={project1} alt='project1'/>
            <Card.Body>
              <Card.Title className='cardtitle'>Sea Storm</Card.Title>
              <Card.Text className='cardtxt'>
              This painting is one of my latest works on sea and ocean topics.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>

            <Col lg="4" sm="12"className='cardmargin'>
            <Card className='shadow h-100'>
            <Card.Img variant="top" src={project4} alt='project4'/>
            <Card.Body>
              <Card.Title className='cardtitle'>Ruins of Ancient Fortress</Card.Title>
              <Card.Text className='cardtxt'>
              When I've been to Scotland, I made this painting just in a day.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>

            <Col lg="4"sm="12"className='cardmargin'>
            <Card className='shadow h-100'>
            <Card.Img variant="top" src={project3} alt='project3'/>
            <Card.Body>
              <Card.Title className='cardtitle'>Two Lovers</Card.Title>
              <Card.Text className='cardtxt'>
              This work was finished in two days for my customers from San Diego, CA, who needed something special.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>

            <Col lg="4"sm="12"className='cardmargin cardmargin1'>
            <Card className='shadow h-100 my-5'>
            <Card.Img variant="top" src={project2} alt='project2'/>
            <Card.Body>
              <Card.Title className='cardtitle'>Watercolor Portrait</Card.Title>
              <Card.Text className='cardtxt'>
              Jane Williams, my friend and colleague, asked me to paint her portrait and this is what I did.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>

            <Col lg="4"sm="12"className='cardmargin'>
            <Card className='shadow h-100 my-5'>
            <Card.Img variant="top" src={project5} alt='project5'/>
            <Card.Body>
              <Card.Title className='cardtitle'>Birches in Autumn</Card.Title>
              <Card.Text className='cardtxt'>
              I love painting autumn trees and this work is a perfect example.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>

            <Col lg="4"sm="12"className='cardmargin'>
            <Card className='shadow h-100 my-5'>
            <Card.Img variant="top" src={project6} alt='project6'/>
            <Card.Body>
              <Card.Title className='cardtitle'>Green Landscape</Card.Title>
              <Card.Text className='cardtxt'>
              Another abstract work, which appeared at my last year's exhibition, Morgan Paintings 2016.
              </Card.Text>
            </Card.Body>
          </Card>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='service mt-5 pt-5'>
        <Container>
          <Row>
            <Col lg='12'sm="12" className='text-center mb-5'>
            <h1>Services</h1>
              <p className='fs-5 pclr'>If you are looking for custom paintings, which will decorate your home or office,
                 consider booking one or several of<br/> my services listed below. 
                They will add more colors and emotions to your daily life.</p>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
              <div className='box rounded'>
                <div className='text-center my-5 py-5'>
                <img src={user} alt='user'/>
                <h3>portrait</h3>
                </div>
              </div>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
            <div className='box rounded'>
                <div className='text-center my-5 py-5'>
                <img src={leaf} alt='user'/>
                <h3>Landscape</h3>
                </div>
              </div>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
            <div className='box rounded'>
                <div className='text-center my-5 py-5'>
                <img src={apple} alt='user'/>
                <h3>Still Life</h3>
                </div>
              </div>
            </Col>

            <Col lg='3'sm="12" className='boxmargin'>
            <div className='box rounded'>
                <div className='text-center my-5 py-5'>
                <img src={house} alt='user'/>
                <h3>Urban</h3>
                </div>
              </div>
            </Col>
            <Col lg='6' className='text-center mt-5'>
            <Button variant='light' className='rounded-pill learnbtn'>View All Services</Button>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Home
