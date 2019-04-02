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
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

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
              <Container fluid>
                <Row>
                  <Col style={{ marginTop: "80px" }} xs="5" md="5">
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
                      breadearner of his family. He joined Clam in 2013 and
                      since then has saved over Rs 1,24,343 in agricultural
                      input cost with clean energy and irrigation services in a
                      span of 6 years.{" "}
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
                      <img width="70%" src={farmerimg} alt="farmer pic" />
                      {/* <ReactCSSTransitionGroup
                  transitionName="example"
                  transitionAppear={true}
                  transitionAppearTimeout={1000}>
                  
                </ReactCSSTransitionGroup> */}
                    </div>
                  </Col>
                </Row>
              </Container>
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
            style={{ minHeight: "490px", backgroundColor: "white" }}
          >
            <div className="section">
              <Container fluid>
                <Row>
                  <Col xs="3" md="3">
                    <div style={{ marginTop: "-100px" }}>
                      {/* <div
                      data-aos="fade-up"
                      data-aos-offset="200"
                      data-aos-delay="50"
                      data-aos-duration="1000"
                      data-aos-once="true"
                      data-aos-easing="ease-in-out"
                    > */}
                      <img width="65%" src={farm1} alt="turmic pic" />
                      {/* </div> */}
                    </div>
                  </Col>
                  <Col xs="3" md="3">
                    <div style={{ marginTop: "-100px" }}>
                      <img width="65%" src={farm2} alt="farm pic" />
                    </div>
                    {/* </div> */}
                  </Col>
                  <Col xs="6" md="6" />
                </Row>
                <Row>
                  <Col xs="5" md="5">
                    <div style={{ marginTop: "70px" }}>
                      <p>
                        Born on 12th Sep 1978, Santosh is the second child of
                        his parents. He hails from Rau Pusa village in the
                        district of Samastipur, Bihar. He owns 37 katha of
                        turmeric farmland, sowing the Morangia variety in the
                        month of May. He has been in the profession for over 20
                        years.
                      </p>
                      <p>
                        Currently he lives with his wife, younger brother and 3
                        children, all of them attending the community schools.
                        Encouraged by the partnership with Claro Minigrid
                        Livelihod Scheme, he plans to completely switch his
                        house and farms into clean energy technologies.
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
              </Container>
            </div>
          </Jumbotron>
        </div>

        <Jumbotron style={{ minHeight: "300px", backgroundColor: "#F7E7E7" }}>
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
                &nbsp;Get to know
              </p>
              <p
                style={{
                  marginTop: "-75px",
                  marginLeft: "95px",
                  fontFamily: "-webkit-body",
                  fontSize: "80px",
                  color: "#e1a3a3"
                }}
              >
                about
              </p>
              <p
                style={{
                  marginTop: "-116px",
                  fontSize: "130px",
                  fontFamily: "-webkit-body",
                  color: "#739d73"
                }}
              >
                <b>turmeric</b>
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
          <Jumbotron fluid style={{ minHeight: "400px" }}>
            <div className="section">
              <Container fluid>
                <Row>
                  <Col xs="5" md="5">
                    <p>
                      Turmeric is one of the most versatile and widely used
                      spices known to man. It adds flavour and colour to all
                      kinds of curries, and is just as likely to be found in
                      cakes, biscuits, cereals, cheese, yoghurt, sweets and even
                      kulS, or Indian milk ice cream. It's also used as a fabric
                      dye, food additive, health remedy, cosmetic and as an
                      application in religious ceremonies.
                    </p>
                    <p>
                      First discovered more than 2,500 years ago, its health
                      properties as a natural anti-inflammatory, antiseptic and
                      antibacterial agent have long been known in the East. It
                      is thought that turmeric can slow down the effects of
                      Alzheimer's disease and multiple sclerosis, and remove
                      liver toxins
                    </p>
                    <p>
                      And, of course, it doubles up as a natural remedy for the
                      common cold- Take a teaspoon of turmeric and add it to a
                      quarter of a cup of milk. Mix it in well and simmer over a
                      slow heat, allowing it to cool before drinking. Remaining
                      turmeric can be heated over a flame until it gives off a
                      faint vapour - inhale this if you have a stuffy nose.
                    </p>
                  </Col>
                  <Col xs="2" md="2 " />
                  <Col xs="5" md="5">
                    <div style={{ marginTop: "-180px" }}>
                      <Row>
                        <Col xs="10" md="10">
                          <img width="97%" src={Imgturmeric} alt="farmer pic" />
                        </Col>
                        <Col xs="2" md="2" />
                      </Row>
                    </div>
                    <div style={{ marginTop: "100px" }}>
                      <Row>
                        <Col xs="4" md="4" />
                        <Col xs="8" md="8">
                          <img width="70%" src={Imgplant} alt="farmer pic" />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Jumbotron>
        </div>

        <Jumbotron
          style={{
            marginTop: "-50px",
            minHeight: "350px",
            backgroundColor: "	#EDF3E9"
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
            <div className="section">
              <p
                style={{
                  fontSize: "94px",
                  fontFamily: "-webkit-body",
                  color: "gray"
                }}
              >
                The farmland
              </p>
              <p
                style={{
                  marginTop: "-78px",
                  marginLeft: "39px",
                  fontFamily: "-webkit-body",
                  fontSize: "80px",
                  color: "lightgray"
                }}
              >
                and
              </p>
              <p
                style={{
                  marginTop: "-120px",
                  marginLeft: "139px",
                  fontSize: "120px",
                  fontFamily: "-webkit-body",
                  color: "#9bd29b"
                }}
              >
                <b>soil</b>
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
          <Jumbotron fluid style={{ minHeight: "460px" }}>
            <div className="section">
              <Container fluid>
                <Row>
                  <Col xs="5" md="5">
                    <p>
                      Santosh owns 15 plots of land in the block of Rau Pusa.
                      The area falls under middle Gangetic plain agro climatic
                      zone. The lands of this zone which are alluvial plains are
                      sloppy towards the south east direction with a very low
                      gradient as evidenced by the direction in which the rivers
                      flow.
                    </p>
                    <p>
                      The rivers of Burhi Gandak, Baya, Kosi, Kamla, Kareh,
                      Jhamwari and Balan flow in Samastipur. As all the rivers
                      and rivulets originate in the high Himalayas, dominated by
                      mechanical weathering of rocks, the soils are mostly light
                      to medium light textured except those away from the direct
                      influence of the rivers.
                    </p>
                    <p>
                      The upland soils are well drained to moderately well
                      drained. The medium low lands and the low lands soils,
                      although of good to moderate permeability, have become
                      some what poorly drained due to high water table in the
                      areas. The soils are moderately rich to poor in nitrogen
                      (especially in Gopalganj and Siwan districts), moderate to
                      very low in available phosphorus and medium to high in
                      available potash. The soils are showing symptoms of
                      deficiency of zinc and iron mostly induced by high
                      available calcium.
                    </p>
                  </Col>
                  <Col xs="2" md="2 " />
                  <Col xs="5" md="5">
                    <div style={{ marginTop: "-100px" }}>
                      <Row>
                        <Col xs="4" md="4" />
                        <Col xs="8" md="8">
                          <img width="70%" src={land} alt="farmer pic" />
                        </Col>
                      </Row>
                    </div>
                    <div style={{ marginTop: "300px" }}>
                      <Row>
                        <Col xs="4" md="4" />
                        <Col xs="8" md="8">
                          <img width="70%" src={landsoil} alt="farmer pic" />
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Jumbotron>
        </div>

        <Jumbotron
          style={{
            marginTop: "-150px",
            minHeight: "600px",
            backgroundColor: "	#D0EDBD"
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
            <div className="section" style={{ marginTop: "70px" }}>
              <Container fluid>
                <Row>
                  <Col style={{ marginTop: "80px" }} xs="3" md="3">
                    <Map
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
                  </Col>
                  <Col xs="4" md="4" />
                  <Col style={{ marginTop: "120px" }} xs="5" md="5">
                    <div style={{ marginLeft: "20px" }}>
                      <h3
                        style={{
                          marginLeft: "26px",
                          marginBottom: "20px",
                          color: "gray"
                        }}
                      >
                        Farmland Stats
                      </h3>
                      <ListGroup>
                        <ListGroup.Item style={{ background: "#D0EDBD" }}>
                          <Row>
                            <Col xs="2" md="2">
                              <img
                                className="responsive"
                                alt="rain"
                                src={rain}
                                style={{ width: "46px", marginLeft: "-11px" }}
                              />
                            </Col>
                            <Col xs="8" md="8">
                              <span>
                                <b>1040-1450</b>
                              </span>
                              <p>
                                <small>Total rainfall (mm)</small>
                              </p>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ background: "#D0EDBD" }}>
                          <Row>
                            <Col xs="2" md="2">
                              <img
                                className="responsive"
                                alt="soil"
                                src={soil}
                                style={{ width: "46px", marginLeft: "-11px" }}
                              />
                            </Col>
                            <Col xs="8" md="8">
                              <span>
                                <b>Sandy loam</b>
                              </span>
                              <p>
                                <small>Soil type</small>
                              </p>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ background: "#D0EDBD" }}>
                          <Row>
                            <Col xs="2" md="2">
                              <img
                                className="responsive"
                                alt="temp"
                                src={temp}
                                style={{ width: "46px", marginLeft: "-11px" }}
                              />
                            </Col>
                            <Col xs="8" md="8">
                              <span>
                                <b>36.6 (max)-7.7 (min)</b>
                              </span>
                              <p>
                                <small>Energy generated</small>
                              </p>
                            </Col>
                          </Row>
                        </ListGroup.Item>
                        <ListGroup.Item style={{ background: "#D0EDBD" }}>
                          <Row>
                            <Col xs="2" md="2">
                              <img
                                className="responsive"
                                alt="ph"
                                src={ph}
                                style={{ width: "46px", marginLeft: "-11px" }}
                              />
                            </Col>
                            <Col xs="8" md="8">
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
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </Jumbotron>

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
              <Container fluid>
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
                        <span
                          style={{ color: "#51c7ec", fontSize: "xx-large" }}
                        >
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
                          We will be happy to pass your thank you note or
                          feedback message to our friend, Santosh.
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
                  </Col>
                  <Col xs="2" md="2" />
                </Row>
              </Container>
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
            <div>
              <Container fluid>
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
              </Container>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyCHi5ryWgN1FcZI-Hmqw3AdxJQmpopYJGk"
})(App);
