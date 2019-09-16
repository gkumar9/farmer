import React, { Component } from "react";
import CO2 from "./images/1.png";
import FLOW from "./images/2.png";
import SOLARENERGY from "./images/3.png";
import backgroundimg from "./images/background.png";
import {
  Jumbotron,
  ListGroup,
  Button,
  Form,
  Navbar,
  Nav,
  Row,
  Col,
  Container
} from "react-bootstrap";
import farmerimg from "./images/farmerpic.jpg";
import farm2 from "./images/farm2.png";
import farm1 from "./images/farm1.png";
import "./mobile.css";
import AOS from "aos";
import simpleParallax from "simple-parallax-js";

import "aos/dist/aos.css";
AOS.init();
const containerStyle = { position: "absolute", width: "84%", height: "46%" };
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="md" bg="light" variant="light">
          <Navbar.Brand href="#" style={{ color: "green" }}>
            Claro <b>Agro</b>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link href="#">Home</Nav.Link>
              <Nav.Link href="#">About us</Nav.Link>
              <Nav.Link>Careers</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {
    var image = document.getElementsByClassName("thumbnail");
    new simpleParallax(image, {
      delay: 0.6,
      transition: "cubic-bezier(0,0,0,1)"
    });
    if (window.screen.width >= 480) {
      this.props.history.push("/");
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Header />
          <Jumbotron fluid="true">
            <div className="hero-image">
              <img
                fluid="true"
                className="thumbnail"
                src={farmerimg}
                alt="farmer pic"
              />
            </div>
            <div
              data-aos="fade-down"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <div className="title">
                <h5>Know your farmer</h5>
                <h2 style={{ color: "#53e253" }}>
                  Santosh <b>Thankur</b>
                </h2>
                <small style={{ color: "lightgray" }}>
                  Rau pusa, samastipur
                </small>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#E7DD74",
              padding: "7vw"
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <p>
                Santosh dropped out of school in Grade 8 as the sole breadearner
                of his family. He joined Clam in 2013 and since then has saved
                over Rs 1,24,343 in agricultural input cost with clean energy
                and irrigation services in a span of 6 years.{" "}
              </p>{" "}
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#E7DD74",
              padding: "7vw"
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <div>
                <img
                  className="thumbnail"
                  style={{ width: "-webkit-fill-available" }}
                  fluid="true"
                  src={farm1}
                  alt="farmer pic"
                />
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#E7DD74",
              padding: "7vw"
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <p>
                Born on 12th Sep 1978, Santosh is the second child of his
                parents. He hails from Rau Pusa village in the district of
                Samastipur, Bihar. He owns 37 katha of turmeric farmland, sowing
                the Morangia variety in the month of May. He has been in the
                profession for over 20 years.
              </p>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#E7DD74",
              padding: "7vw"
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <div>
                <img
                  className="thumbnail"
                  style={{ width: "-webkit-fill-available" }}
                  fluid="true"
                  src={farm2}
                  alt="farmer pic"
                />
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#E7DD74",
              padding: "7vw"
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <p>
                Currently he lives with his wife, younger brother and 3
                children, all of them attending the community schools.
                Encouraged by the partnership with Claro Minigrid Livelihod
                Scheme, he plans to completely switch his house and farms into
                clean energy technologies.
              </p>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              padding: "7vw"
            }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <div
                style={{
                  alignItems: "center",
                  display: "flex",
                  flexDirection: "column"
                }}
              >
                <h3
                  style={{
                    marginBottom: "20px",
                    color: "gray"
                  }}
                >
                  Our Impact
                </h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs="3">
                        <img
                          className="responsive"
                          alt="CO2"
                          src={CO2}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="9">
                        <span>
                          <b>1212121 tonnes</b>
                        </span>
                        <p>
                          <small>CO2 avoided</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="3">
                        <img
                          className="responsive"
                          alt="flow"
                          src={FLOW}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="9">
                        <span>
                          <b>23234324 kL</b>
                        </span>
                        <p>
                          <small>Water pumped</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="3">
                        <img
                          className="responsive"
                          alt="energy"
                          src={SOLARENERGY}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="9">
                        <span>
                          <b>1712.3 GWh</b>
                        </span>
                        <p>
                          <small>Energy generated</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron fluid="true">
            <div
              style={{
                padding: "7vw",
                backgroundImage: `url(${backgroundimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="600"
                data-aos-once="true"
                data-aos-easing="ease-in-out"
              >
                <div
                // style={{
                //   padding: "25px",
                //   marginBottom: "40px",
                //   backgroundColor: "white",
                //   borderRadius: "5px"
                // }}
                >
                  <span style={{ color: "#51c7ec", fontSize: "xx-large" }}>
                    <b> Write to Santosh</b>
                  </span>
                  <br />
                  <small
                    style={{
                      marginTop: "-40px",
                      fontSize: "small",
                      color: "gray"
                    }}
                  >
                    We will be happy to pass your thank you note or feedback
                    message to our friend, Santosh.
                  </small>
                  <div style={{ marginTop: "20px" }}>
                    <Form>
                      <Form.Group>
                        <Form.Label
                          style={{ fontSize: "smaller", color: "gray" }}
                        >
                          Name
                        </Form.Label>
                        <Form.Control type="text" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label
                          style={{ fontSize: "smaller", color: "gray" }}
                        >
                          Email
                        </Form.Label>
                        <Form.Control type="email" />
                      </Form.Group>
                      <Form.Group>
                        <Form.Label
                          style={{ fontSize: "smaller", color: "gray" }}
                        >
                          Message
                        </Form.Label>
                        <Form.Control as="textarea" rows="3" />
                      </Form.Group>
                      <Form.Group as={Row}>
                        <Col xs={{ span: 4, offset: 8 }}>
                          <Button type="submit">Submit</Button>
                        </Col>
                      </Form.Group>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{ backgroundColor: "#686667", padding: "7vw" }}
          >
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <ListGroup variant="flush" style={{ background: "transparent" }}>
                <ListGroup.Item
                  style={{
                    background: "transparent",
                    padding: "0.5rem 0.25rem"
                  }}
                >
                  <Button variant="link">About Us</Button>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    background: "transparent",
                    padding: "0.5rem 0.25rem"
                  }}
                >
                  <Button variant="link">Terms of service</Button>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    background: "transparent",
                    padding: "0.5rem 0.25rem"
                  }}
                >
                  <Button variant="link">Careers</Button>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    background: "transparent",
                    padding: "0.5rem 0.25rem"
                  }}
                >
                  <Button variant="link">Privacy policy</Button>
                </ListGroup.Item>
                <ListGroup.Item
                  style={{
                    background: "transparent",
                    padding: "0.5rem 0.25rem"
                  }}
                >
                  <Button variant="link">Blog</Button>
                </ListGroup.Item>
              </ListGroup>

              <Row style={{ marginTop: "5vw" }}>
                <Col>
                  <Row>
                    <Col xs="4">
                      <span style={{ color: "white", fontSize: "larger" }}>
                        Claro <b>Agro</b>
                      </span>
                    </Col>
                    <Col xs="8" style={{ color: "white", fontSize: "medium" }}>
                      <span>F213/A, Old MB Road, Lado Sarai,</span>
                      <br />
                      <span>New Delhi 110030</span>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
export default App;
