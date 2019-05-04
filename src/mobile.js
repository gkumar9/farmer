import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import CO2 from "./1.png";
import FLOW from "./2.png";
import MINIGRID from "./Minigrid.png";
import CALENDER from "./calender.png";
import SOLARENERGY from "./3.png";
import Imgturmeric from "./imgturmeric.png";
import Imgplant from "./imgplant.png";
import land from "./land.png";
import landsoil from "./landsoil.png";
import rain from "./rain.png";
import soil from "./soil.png";
import temp from "./temp.png";
import ph from "./ph.png";
import backgroundimg from "./background.png";
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
import farmerimg from "./vijay.jpg";
import farm2 from "./farm2.png";
import farm1 from "./farm1.png";
import "./mobile.css";
import AOS from "aos";
import simpleParallax from "simple-parallax-js";
import logo from "./logonew.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

import "aos/dist/aos.css";
AOS.init();
const containerStyle = { position: "absolute", width: "84%", height: "46%" };
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar id="head" collapseOnSelect expand="md" bg="light" variant="light">
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
                <AnchorLink href="#turmeric">Turmeric</AnchorLink>
              </Nav.Link>
              <Nav.Link>
                {" "}
                <AnchorLink href="#gopalgunj">Gopalgunj</AnchorLink>
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
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
      if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
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
        <AnchorLink href="#head"><button  id="myBtn" title="Go to top"><i class="fas fa-arrow-up"></i></button></AnchorLink>
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
                Vijay Mal <b>Prasad</b>
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
                Vijay Mal Prasad was on boarded as a Farmer Partner at Claro
                    Agro in 2018. He has been using our Solar Irrigation Service
                    (Mini Grid) via the Mobile Solar trolley (Patvan). In a
                    span of 1 year, he has generated significant savings by
                    offsetting expensive diesel and in the process has made a
                    real contribution to the environment as well. The additional
                    savings now help him spend more on healthcare for his family
                    and education for his children.
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
              Vijay Mal Prasad hails from ramchandar pur village in the
                      district of gopalganj in Bihar. He owns 4 katha acres of
                      farmland on which he is growing spices, sowing the local
                      variety. He has been practicing farming for 15 years.
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
              Currently he lives with his 5 family member. Encouraged
                      by the partnership with Claro Agro, he plans to move up
                      the value chain and further improve his income and improve
                      the lives of his family.
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
                          style={{ opacity:'0.5',width: "70px", marginLeft: "-11px" }}
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

          <Jumbotron id="turmeric" fluid="true">
            <div className="hero-image">
              <img
                className="thumbnail"
                fluid="true"
                src={Imgturmeric}
                alt="farmer pic"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <div className="titleturmeric">
                <h2>Get to know turmeric</h2>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#F7E7E7",
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
                Turmeric is one of the most versatile and widely used spices
                known to man. It adds flavour and colour to all kinds of
                curries, and is just as likely to be found in cakes, biscuits,
                cereals, cheese, yoghurt, sweets and even kulS, or Indian milk
                ice cream. It's also used as a fabric dye, food additive, health
                remedy, cosmetic and as an application in religious ceremonies.
              </p>
              <p>
                First discovered more than 2,500 years ago, its health
                properties as a natural anti-inflammatory, antiseptic and
                antibacterial agent have long been known in the East. It is
                thought that turmeric can slow down the effects of Alzheimer's
                disease and multiple sclerosis, and remove liver toxins
              </p>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#F7E7E7",
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
                  style={{
                    maxHeight: "fit-content",
                    width: "-webkit-fill-available"
                  }}
                  fluid="true"
                  src={Imgplant}
                  alt="farmer pic"
                />
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#F7E7E7",
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
                And, of course, it doubles up as a natural remedy for the common
                cold- Take a teaspoon of turmeric and add it to a quarter of a
                cup of milk. Mix it in well and simmer over a slow heat,
                allowing it to cool before drinking. Remaining turmeric can be
                heated over a flame until it gives off a faint vapour - inhale
                this if you have a stuffy nose.
              </p>
            </div>
          </Jumbotron>

          <Jumbotron id="gopalgunj" fluid="true">
            <div className="hero-image">
              <img
                className="thumbnail"
                fluid="true"
                style={{ width: "-webkit-fill-available" }}
                src={land}
                alt="farmer pic"
              />
            </div>
            <div
              data-aos="fade-up"
              data-aos-offset="200"
              data-aos-delay="50"
              data-aos-duration="600"
              data-aos-once="true"
              data-aos-easing="ease-in-out"
            >
              <div className="titleturmeric">
                <h2>Farmland & The geography</h2>
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#EDF3E9",
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
                Gopalganj is one of the administrative districts in the Indian
                state of Bihar. The district headquarters is the town of
                Gopalganj, and the district is part of Saran Division. Major
                languages spoken are Bhojpuri, and Hindi.
              </p>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#EDF3E9",
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
                  style={{
                    maxHeight: "fit-content",
                    width: "-webkit-fill-available"
                  }}
                  fluid="true"
                  src={landsoil}
                  alt="farmer pic"
                />
              </div>
            </div>
          </Jumbotron>

          <Jumbotron
            fluid
            style={{
              backgroundColor: "#EDF3E9",
              padding: "7vw",
              height: "232vw"
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
              <p>Facts about Gopalganj:</p>
              <p>
                <b>DEMOGRAPHIC</b>
                <ul>
                  <li>Population: 2,558,037 (2.62% of the state)</li>
                  <li>Women: 1,288,360 (50.12%)</li>
                  <li>Rural population: 2,018,807 (93.93%)</li>
                </ul>
              </p>
              <p>
                <b>SOIL PROFILE:</b>
                <ul>
                  <li>Total rainfall (mm): 1040-1450</li>
                  <li>Soil type: Sandy loam</li>
                  <li>Soil acidity (pH) :6.5-8.4</li>
                </ul>
              </p>
              <p>
                <b>WEATHER/ENVIRONMENT:</b>
                <ul>
                  <li>Annual rainfall(mm): 1040-1450</li>
                  <li>Temperature: 36.6 (max)-7.7 (min)</li>
                </ul>
              </p>
              <div style={{ marginTop: "10vw" }}>
                <Map
                  scrollwheel={false}
                  containerStyle={containerStyle}
                  mapTypeControl={false}
                  gestureHandling={"greedy"}
                  zoomControl={true}
                  streetViewControl={false}
                  fullscreenControl={false}
                  google={this.props.google}
                  initialCenter={{
                    lat: 26.40737,
                    lng: 84.42204
                  }}
                  zoom={12}
                >
                  <Marker
                    position={{
                      lat: 26.40737,
                    lng: 84.42204
                    }}
                    name={"Current location"}
                  />
                </Map>
              </div>
            </div>
          </Jumbotron>

          {/* <Jumbotron
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
                  Farmland Stats
                </h3>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row>
                      <Col xs="4">
                        <img
                          className="responsive"
                          alt="rain"
                          src={rain}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="8">
                        <span>
                          <b>1040-1450</b>
                        </span>
                        <p>
                          <small>Total rainfall (mm)</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="4">
                        <img
                          className="responsive"
                          alt="soil"
                          src={soil}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="8">
                        <span>
                          <b>Sandy loam</b>
                        </span>
                        <p>
                          <small>Soil type</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="4">
                        <img
                          className="responsive"
                          alt="temp"
                          src={temp}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="8">
                        <span>
                          <b>36.6 (max)-7.7 (min)</b>
                        </span>
                        <p>
                          <small>Energy generated</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs="4">
                        <img
                          className="responsive"
                          alt="ph"
                          src={ph}
                          style={{ width: "46px", marginLeft: "-11px" }}
                        />
                      </Col>
                      <Col xs="8">
                        <span>
                          <b>6.5-8.4</b>
                        </span>
                        <p>
                          <small>Soil acidity (pH)</small>
                        </p>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </div>
            </div>
          </Jumbotron> */}

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
                    Write to Vijay
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
                    message to our friend, Vijay.
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
export default GoogleApiWrapper({
  apiKey: "AIzaSyCHi5ryWgN1FcZI-Hmqw3AdxJQmpopYJGk"
})(App);
