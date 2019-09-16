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
  Col
} from "react-bootstrap";
import farmerimg from "./images/farmerpic.jpg";
import farm2 from "./images/farm2.png";
import farm1 from "./images/farm1.png";
import "./App.css";
import AOS from "aos";
import simpleParallax from "simple-parallax-js";
import "aos/dist/aos.css";
AOS.init();
const containerStyle = { position: "absolute", height: "90%" };
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
    if (window.screen.width <= 480) {
      this.props.history.push("/mobile");
    }
  }
  render() {
    return (
      <div>
        <Header />

        <Jumbotron style={{ minHeight: "300px" }}>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            <div className="section">
              <p
                style={{
                  fontSize: "94px",
                  fontFamily: "-webkit-body",
                  color: "gray"
                }}
              >
                Know
              </p>
              <p
                style={{
                  marginTop: "-98px",
                  marginLeft: "119px",
                  fontFamily: "-webkit-body",
                  fontSize: "80px",
                  color: "lightgray"
                }}
              >
                your
              </p>
              <p
                style={{
                  marginTop: "-110px",
                  fontSize: "130px",
                  fontFamily: "-webkit-body",
                  color: "#9bd29b"
                }}
              >
                <b>farmer</b>
              </p>
            </div>
          </div>
        </Jumbotron>

        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <Jumbotron
            fluid
            style={{ minHeight: "460px", backgroundColor: "#E7DD74" }}
          >
            <div className="section">
              <Row>
                <Col style={{ marginTop: "40px" }} xs="5" md="5">
                  <p
                    style={{
                      color: "white",
                      fontSize: "40px"
                    }}
                  >
                    Santosh Thakur
                  </p>
                  <p
                    style={{
                      color: "white",
                      // fontSize: "18px",
                      marginTop: "-30px"
                    }}
                  >
                    Rau pusa, samastipur
                  </p>
                  <p
                    style={{
                      // color: "#546f1e",
                      // fontSize: "16px",
                      marginTop: "40px"
                    }}
                  >
                    Santosh dropped out of school in Grade 8 as the sole
                    breadearner of his family. He joined Clam in 2013 and since
                    then has saved over Rs 1,24,343 in agricultural input cost
                    with clean energy and irrigation services in a span of 6
                    years.{" "}
                  </p>
                </Col>
                <Col xs="1" md="2 " />
                <Col xs="6" md="5">
                  <div className="farmerimg">
                    {/* <div 
                data-aos="fade-up"
                data-aos-offset="200"
                data-aos-delay="50"
                data-aos-duration="1000"
                data-aos-once="true"
                data-aos-easing="ease-in-out"> */}
                    <img
                      className="thumbnail"
                      width="70%"
                      src={farmerimg}
                      alt="farmer pic"
                    />
                    {/* <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={1000}>
                  
                </ReactCSSTransitionGroup> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </div>
        <div
          data-aos="fade-up"
          data-aos-offset="200"
          data-aos-delay="50"
          data-aos-duration="600"
          data-aos-once="true"
          data-aos-easing="ease-in-out"
        >
          <Jumbotron
            fluid
            style={{ minHeight: "500px", backgroundColor: "white" }}
          >
            <div className="section">
              <Row>
                <Col xs="3" md="3">
                  <div style={{ marginTop: "-140px" }}>
                    {/* <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-once="true"
                      data-aos-easing="ease-in-out"
                    > */}
                    <img
                      className="thumbnail"
                      width="65%"
                      src={farm1}
                      alt="turmic pic"
                    />
                    {/* </div> */}
                  </div>
                </Col>
                <Col xs="3" md="3">
                  <div style={{ marginTop: "-140px" }}>
                    <img
                      className="thumbnail"
                      width="65%"
                      src={farm2}
                      alt="farm pic"
                    />
                  </div>
                  {/* </div> */}
                </Col>
                <Col xs="6" md="6" />
              </Row>
              <Row>
                <Col xs="5" md="5">
                  <div style={{ marginTop: "70px" }}>
                    <p>
                      Born on 12th Sep 1978, Santosh is the second child of his
                      parents. He hails from Rau Pusa village in the district of
                      Samastipur, Bihar. He owns 37 katha of turmeric farmland,
                      sowing the Morangia variety in the month of May. He has
                      been in the profession for over 20 years.
                    </p>
                    <p>
                      Currently he lives with his wife, younger brother and 3
                      children, all of them attending the community schools.
                      Encouraged by the partnership with Claro Minigrid
                      Livelihod Scheme, he plans to completely switch his house
                      and farms into clean energy technologies.
                    </p>
                  </div>
                </Col>
                <Col xs="3" md="3" />
                <Col xs="4" md="4">
                  <div>
                    <h3
                      style={{
                        marginLeft: "26px",
                        marginBottom: "20px",
                        color: "gray"
                      }}
                    >
                      Our Impact
                    </h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col xs="2" md="2">
                            <img
                              className="responsive"
                              alt="CO2"
                              src={CO2}
                              style={{ width: "46px", marginLeft: "-11px" }}
                            />
                          </Col>
                          <Col xs="8" md="8">
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
                          <Col xs="2" md="2">
                            <img
                              className="responsive"
                              alt="flow"
                              src={FLOW}
                              style={{ width: "46px", marginLeft: "-11px" }}
                            />
                          </Col>
                          <Col xs="8" md="8">
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
                          <Col xs="2" md="2">
                            <img
                              className="responsive"
                              alt="energy"
                              src={SOLARENERGY}
                              style={{ width: "46px", marginLeft: "-11px" }}
                            />
                          </Col>
                          <Col xs="8" md="8">
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
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </div>

        <Jumbotron
          style={{
            minHeight: "480px",
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
            <div className="section" style={{ marginTop: "80px" }}>
              <Row>
                <Col xs="7" md="7" />
                <Col xs="3" md="3">
                  <div>
                    <div
                      style={{
                        padding: "25px",
                        marginBottom: "40px",
                        backgroundColor: "white",
                        borderRadius: "5px"
                      }}
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
                            <Col xs={{ span: 3, offset: 7 }}>
                              <Button type="submit">Submit</Button>
                            </Col>
                          </Form.Group>
                        </Form>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs="2" md="2" />
              </Row>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron
          style={{
            minHeight: "300px",
            backgroundColor: "	#686667"
          }}
        >
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            data-aos-delay="50"
            data-aos-duration="600"
            data-aos-once="true"
            data-aos-easing="ease-in-out"
          >
            <div style={{ padding: "20px" }}>
              <Row>
                <Col xs="8" md="8" />
                <Col style={{ marginTop: "80px" }} xs="4" md="4">
                  <Row>
                    <Col>
                      <Button variant="link">About Us</Button>
                    </Col>
                    <Col>
                      <Button variant="link">Terms of service</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="link">Careers</Button>
                    </Col>
                    <Col>
                      <Button variant="link">Privacy policy</Button>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Button variant="link">Blog</Button>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Row>
                    <Col xs="3" md="3">
                      <span style={{ color: "white", fontSize: "xx-large" }}>
                        Claro <b>Agro</b>
                      </span>
                    </Col>
                    <Col
                      xs="4"
                      md="4"
                      style={{ color: "white", fontSize: "medium" }}
                    >
                      <span>F213/A, Old MB Road, Lado Sarai,</span>
                      <br />
                      <span>New Delhi 110030</span>
                    </Col>
                  </Row>
                </Col>

                <Col xs="4" md="4" />
              </Row>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default App;
