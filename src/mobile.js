import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import CO2 from "./1.png";
import FLOW from "./2.png";
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
import farmerimg from "./farmerpic.jpg";
import farm2 from "./farm2.png";
import farm1 from "./farm1.png";
import "./mobile.css";
import AOS from "aos";
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
   
    
    if (window.screen.width >= 480) {
      this.props.history.push('/');
    }
  }
  render() {
    return (
      <div>
        <Container>
          <Header />
          <Jumbotron fluid="true">
            <div className="hero-image">
              <img fluid src={farmerimg} alt="farmer pic" />
            </div>
            <div className="title">
              <h5>Know your farmer</h5>
              <h2 style={{ color: "#53e253" }}>
                Santosh <b>Thankur</b>
              </h2>
              <small style={{ color: "lightgray" }}>Rau pusa, samastipur</small>
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
              style={{
                backgroundColor: "#E7DD74",
                padding: "7vw"
              }}
            >
              <p>
                Santosh dropped out of school in Grade 8 as the sole breadearner
                of his family. He joined Clam in 2013 and since then has saved
                over Rs 1,24,343 in agricultural input cost with clean energy
                and irrigation services in a span of 6 years.{" "}
              </p>
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
              style={{
                backgroundColor: "#E7DD74",
                padding: "7vw"
              }}
            >
              <div>
                <img
                  style={{ width: "-webkit-fill-available" }}
                  fluid="true"
                  src={farm1}
                  alt="farmer pic"
                />
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
              style={{
                backgroundColor: "#E7DD74",
                padding: "7vw"
              }}
            >
              <p>
                Born on 12th Sep 1978, Santosh is the second child of his
                parents. He hails from Rau Pusa village in the district of
                Samastipur, Bihar. He owns 37 katha of turmeric farmland, sowing
                the Morangia variety in the month of May. He has been in the
                profession for over 20 years.
              </p>
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
              style={{
                backgroundColor: "#E7DD74",
                padding: "7vw"
              }}
            >
              <div>
                <img
                  style={{ width: "-webkit-fill-available" }}
                  fluid="true"
                  src={farm2}
                  alt="farmer pic"
                />
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
              style={{
                backgroundColor: "#E7DD74",
                padding: "7vw"
              }}
            >
              <p>
                Currently he lives with his wife, younger brother and 3
                children, all of them attending the community schools.
                Encouraged by the partnership with Claro Minigrid Livelihod
                Scheme, he plans to completely switch his house and farms into
                clean energy technologies.
              </p>
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
              style={{
                padding: "7vw"
              }}
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
            </Jumbotron>
          </div>
          <Jumbotron fluid="true">
            <div className="hero-image">
              <img fluid src={Imgturmeric} alt="farmer pic" />
            </div>
            <div className="titleturmeric">
              <h2>Get to Know turmeric</h2>
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
              style={{
                backgroundColor: "#F7E7E7",
                padding: "7vw"
              }}
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
              style={{
                backgroundColor: "#F7E7E7",
                padding: "7vw"
              }}
            >
              <div>
                <img
                  style={{
                    maxHeight: "fit-content",
                    width: "-webkit-fill-available"
                  }}
                  fluid="true"
                  src={Imgplant}
                  alt="farmer pic"
                />
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
              style={{
                backgroundColor: "#F7E7E7",
                padding: "7vw"
              }}
            >
              <p>
                And, of course, it doubles up as a natural remedy for the common
                cold- Take a teaspoon of turmeric and add it to a quarter of a
                cup of milk. Mix it in well and simmer over a slow heat,
                allowing it to cool before drinking. Remaining turmeric can be
                heated over a flame until it gives off a faint vapour - inhale
                this if you have a stuffy nose.
              </p>
            </Jumbotron>
          </div>
          <Jumbotron fluid="true">
            <div className="hero-image">
              <img
                fluid="true"
                style={{ width: "-webkit-fill-available" }}
                src={land}
                alt="farmer pic"
              />
            </div>
            <div className="titleturmeric">
              <h2>The farmland and soil</h2>
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
              style={{
                backgroundColor: "#EDF3E9",
                padding: "7vw"
              }}
            >
              <p>
                Santosh owns 15 plots of land in the block of Rau Pusa. The area
                falls under middle Gangetic plain agro climatic zone. The lands
                of this zone which are alluvial plains are sloppy towards the
                south east direction with a very low gradient as evidenced by
                the direction in which the rivers flow.
              </p>
              <p>
                The rivers of Burhi Gandak, Baya, Kosi, Kamla, Kareh, Jhamwari
                and Balan flow in Samastipur. As all the rivers and rivulets
                originate in the high Himalayas, dominated by mechanical
                weathering of rocks, the soils are mostly light to medium light
                textured except those away from the direct influence of the
                rivers.
              </p>
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
              style={{
                backgroundColor: "#EDF3E9",
                padding: "7vw"
              }}
            >
              <div>
                <img
                  style={{
                    maxHeight: "fit-content",
                    width: "-webkit-fill-available"
                  }}
                  fluid="true"
                  src={landsoil}
                  alt="farmer pic"
                />
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
              style={{
                backgroundColor: "#EDF3E9",
                padding: "7vw",
                height: "-webkit-fill-available"
              }}
            >
              <p>
                The upland soils are well drained to moderately well drained.
                The medium low lands and the low lands soils, although of good
                to moderate permeability, have become some what poorly drained
                due to high water table in the areas. The soils are moderately
                rich to poor in nitrogen (especially in Gopalganj and Siwan
                districts), moderate to very low in available phosphorus and
                medium to high in available potash. The soils are showing
                symptoms of deficiency of zinc and iron mostly induced by high
                available calcium.
              </p>
              <div>
                <Map
                  containerStyle={containerStyle}
                  mapTypeControl={false}
                  gestureHandling={"greedy"}
                  zoomControl={true}
                  streetViewControl={false}
                  fullscreenControl={false}
                  google={this.props.google}
                  initialCenter={{
                    lat: 25.9845,
                    lng: 85.6807
                  }}
                  zoom={10}
                >
                  <Marker
                    position={{
                      lat: 25.9845,
                      lng: 85.6807
                    }}
                    name={"Current location"}
                  />
                </Map>
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
              style={{
                padding: "7vw"
              }}
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
            </Jumbotron>
          </div>
          <Jumbotron fluid="true">
            <div
              style={{
                padding: "7vw",
                backgroundImage: `url(${backgroundimg})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
              }}
            >
              <div>
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
              style={{ backgroundColor: "#686667", padding: "7vw" }}
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
            </Jumbotron>
          </div>
        </Container>
      </div>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyCHi5ryWgN1FcZI-Hmqw3AdxJQmpopYJGk"
})(App);
