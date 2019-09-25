import React, { Component } from "react";
import SOLARENERGY from "./images/3.png";
import MINIGRID from "./images/Minigrid.png";
import CALENDER from "./images/calender.png";
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
import farmerimg from "./images/Ramanand.jpg";
import farm2 from "./images/farm2.png";
import farm1 from "./images/farm1.png";
import "./mobile.css";
import AOS from "aos";
import logo from "./images/logonew.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "aos/dist/aos.css";
AOS.init();
// const containerStyle = { position: "absolute", width: "84%", height: "46%" };
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar
          id="head"
          collapseOnSelect
          expand="md"
          bg="light"
          variant="light"
        >
          <Navbar.Brand href="https://www.claroagro.com/lp/" target="_blank">
            <img
              src={logo}
              width="180"
              height="70"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />{" "}
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" />
            <Nav>
              <Nav.Link>
                {" "}
                <AnchorLink href="#farmer">Farmer</AnchorLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <AnchorLink href="#contactus">Contact us</AnchorLink>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

class App extends Component {
  componentDidMount() {
    window.onscroll = function() {
      scrollFunction();
    };

    function scrollFunction() {
      if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
      ) {
        document.getElementById("myBtn").style.display = "block";
      } else {
        document.getElementById("myBtn").style.display = "none";
      }
    }
    // var image = document.getElementsByClassName("thumbnail");
    // new simpleParallax(image, {
    //   delay: 0.6,
    //   transition: "cubic-bezier(0,0,0,1)"
    // });
    if (window.screen.width >= 480) {
      this.props.history.push("./");
    }
  }
  render() {
    return (
      <div>
        <Container>
          <AnchorLink href="#head">
            <button id="myBtn" title="Go to top">
              <i class="fas fa-arrow-up"></i>
            </button>
          </AnchorLink>
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
                  Ramanand <b>Prasad</b>
                </h2>
                <small style={{ color: "lightgray" }}>
                  Ramchandar Pur, Gopalganj
                </small>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            id="farmer"
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
                Ramanand Prasad was on boarded as a Farmer Partner at Claro Agro
                in 2018. He has been using our Solar Irrigation Service
                (IAAS/Mini Grid) via the Mobile Solar trolley (Patvan). In a
                span of 1 year, he has generated significant savings by
                offsetting expensive diesel and in the process has made a real
                contribution to the environment as well. The additional savings
                now help him spend more on healthcare for his family and
                education for his children.
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
                Ramanand Prasad hails from ramchandar pur village in the
                district of gopalganj in bihar. He owns 1 katha acres of
                farmland on which he is growing spices, sowing the local
                variety. He has been practicing farming for 10 years.
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
                Currently he lives with his 10 family member. Encouraged by the
                partnership with Claro Agro, he plans to move up the value chain
                and further improve his income and improve the lives of his
                family.
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
                  Our Intervention
                </h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs="3" md="3">
                        <img
                          className="responsive"
                          alt="CO2"
                          src={MINIGRID}
                          style={{
                            opacity: "0.5",
                            width: "70px",
                            marginLeft: "-11px"
                          }}
                        />
                      </Col>
                      <Col xs="9" md="9">
                        <span>
                          <b>Minigrid</b>
                        </span>
                        <p>
                          <small>Intervention Type</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="3" md="3">
                        <img
                          className="responsive"
                          alt="CO2"
                          src={SOLARENERGY}
                          style={{ width: "70px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="9" md="9">
                        <span>
                          <b>20 kW</b>
                        </span>
                        <p>
                          <small>Intervention Size</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="3" md="3">
                        <img
                          className="responsive"
                          alt="CO2"
                          src={CALENDER}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="9" md="9">
                        <span>
                          <b>2018</b>
                        </span>
                        <p>
                          <small>Installed and first</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron id="contactus" fluid="true">
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
                  <span style={{ color: "#51c7ec", fontSize: "x-large" }}>
                    Write to Ramanand
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
                    message to our friend, Ramanand.
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
