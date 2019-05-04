import React, { Component } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import CO2 from "./1.png";
import MINIGRID from "./Minigrid.png";
import CALENDER from "./calender.png";
import FLOW from "./2.png";
import SOLARENERGY from "./3.png";
import Imgturmeric from "./imgturmeric.png";
import Imgplant from "./imgplant.png";
import land from "./land.png";
import landsoil from "./landsoil.png";
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
import farmerimg from "./manoj.jpg";
import logo from "./logonew.jpg";
import farm2 from "./farm2.png";
import farm1 from "./farm1.png";
import "./App.css";
import AOS from "aos";
import simpleParallax from "simple-parallax-js";
import "aos/dist/aos.css";
AOS.init();
const containerStyle = { position: "absolute", width: "50%", height: "50%" };
class Header extends Component {
  render() {
    return (
      <div>
        <Navbar id="head" href="#head" collapseOnSelect expand="md" bg="light" variant="light">
          {/* <Navbar.Brand href="./lp/" style={{ color: "green" }}>
            Claro <b>Agro</b>
          </Navbar.Brand> */}
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
    // var image = document.getElementsByClassName('thumbnail');
    // new simpleParallax(image, {
    //   delay: .6,
    //   transition: 'cubic-bezier(0,0,0,1)'
    // })
    window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("myBtn").style.display = "block";
    } else {
      document.getElementById("myBtn").style.display = "none";
    }
  }
    if (window.screen.width <= 480) {
      this.props.history.push("./mobile");
    }
  }
  render() {
    return (
      <div>
      <AnchorLink href="#head"><button  id="myBtn" title="Go to top"><i class="fas fa-arrow-up"></i></button></AnchorLink>
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
                  color: "darkkhaki"
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
            id="farmer"
            fluid
            style={{
              color: "black",
              minHeight: "460px",
              backgroundColor: "#f8eb3c"
            }}
          >
            <div className="section">
              <Row>
                <Col style={{ marginTop: "40px" }} xs="5" md="5">
                  <p
                    style={{
                      fontSize: "40px"
                    }}
                  >
                    Manoj Singh
                  </p>
                  <p
                    style={{
                      // fontSize: "18px",
                      marginTop: "-25px"
                    }}
                  >
                    Ramchandar Pur, Gopalganj
                  </p>
                  <p
                    style={{
                      // color: "#546f1e",
                      // fontSize: "16px",
                      marginTop: "40px"
                    }}
                  >
                    Manoj Singh was on boarded as a Farmer Partner at Claro
                    Agro in 2018. He has been using our Solar Irrigation Service
                    (Mini Grid) via the Mobile Solar trolley (Patvan). In a
                    span of 1 year, he has generated significant savings by
                    offsetting expensive diesel and in the process has made a
                    real contribution to the environment as well. The additional
                    savings now help him spend more on healthcare for his family
                    and education for his children.
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
                      width="55%"
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
                  <div style={{ marginTop: "-80px" }}>
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
                  <div style={{ marginTop: "-80px" }}>
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
                  <div style={{ marginTop: "70px", color: "black" }}>
                    <p>
                      Manoj Singh hails from ramchandar pur village in the
                      district of gopalganj in Bihar. He owns 3 katha acres of
                      farmland on which he is growing spices, sowing the local
                      variety. He has been practicing farming for 10 years.
                      Currently he lives with his 8 family member. Encouraged
                      by the partnership with Claro Agro, he plans to move up
                      the value chain and further improve his income and improve
                      the lives of his family.
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
                      Our Intervention
                    </h3>
                    <ListGroup variant="flush">
                      <ListGroup.Item>
                        <Row>
                          <Col xs="2" md="2">
                            <img
                              className="responsive"
                              alt="CO2"
                              src={MINIGRID}
                              style={{ opacity:'0.5',width: "46px", marginLeft: "-11px" }}
                            />
                          </Col>
                          <Col xs="8" md="8">
                            <span>
                              <b>Minigrid </b>
                            </span>
                            <p>
                              <small>Intervention Type</small>
                            </p>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                      <ListGroup.Item>
                        <Row>
                          <Col xs="2" md="2">
                            <img
                              className="responsive"
                              alt="CO2"
                              src={SOLARENERGY}
                              style={{ width: "46px", marginLeft: "-11px" }}
                            />
                          </Col>
                          <Col xs="8" md="8">
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
                          <Col xs="2" md="2">
                            <img
                              className="responsive"
                              alt="CO2"
                              src={CALENDER}
                              style={{ width: "40px", marginLeft: "-11px" }}
                            />
                          </Col>
                          <Col xs="8" md="8">
                            <span>
                              <b>2018</b>
                            </span>
                            <p>
                              <small>Installed and first used</small>
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
          id="turmeric"
          style={{ minHeight: "350px", backgroundColor: "#dd9cc6" }}
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
                  color: "#343a40"
                }}
              >
                &nbsp;Get to know
              </p>
              <p
                style={{
                  marginTop: "-79px",
                  marginLeft: "115px",
                  fontFamily: "-webkit-body",
                  fontSize: "80px",
                  color: "#646060"
                }}
              >
                about
              </p>
              <p
                style={{
                  marginTop: "-116px",
                  fontSize: "130px",
                  fontFamily: "-webkit-body",
                  color: "#646060"
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
          <Jumbotron fluid style={{ minHeight: "670px" }}>
            <div className="section">
              <Row>
                <Col xs="5" md="5" style={{ color: "black" }}>
                  <p>
                    Turmeric is one of the most versatile and widely used spices
                    known to man. It adds flavour and colour to all kinds of
                    curries, and is just as likely to be found in cakes,
                    biscuits, cereals, cheese, yoghurt, sweets and even kulS, or
                    Indian milk ice cream. It's also used as a fabric dye, food
                    additive, health remedy, cosmetic and as an application in
                    religious ceremonies.
                  </p>
                  <p>
                    First discovered more than 2,500 years ago, its health
                    properties as a natural anti-inflammatory, antiseptic and
                    antibacterial agent have long been known in the East. It is
                    thought that turmeric can slow down the effects of
                    Alzheimer's disease and multiple sclerosis, and remove liver
                    toxins
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
                  <div style={{ marginTop: "-120px" }}>
                    <Row>
                      <Col xs="10" md="10">
                        <img
                          className="thumbnail"
                          width="97%"
                          src={Imgturmeric}
                          alt="farmer pic"
                        />
                      </Col>
                      <Col xs="2" md="2" />
                    </Row>
                  </div>
                  <div style={{ marginTop: "5vw" }}>
                    <Row>
                      <Col xs="4" md="4" />
                      <Col xs="8" md="8">
                        <img
                          className="thumbnail"
                          width="70%"
                          src={Imgplant}
                          alt="farmer pic"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </div>

        <Jumbotron
          id="gopalgunj"
          style={{
            marginTop: "-50px",
            minHeight: "350px",
            backgroundColor: "	#ff5959"
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
                  fontSize: "120px",
                  fontFamily: "-webkit-body",
                  color: "wheat"
                }}
              >
                Farmland
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
                &
              </p>
              <p
                style={{
                  marginTop: "-120px",
                  marginLeft: "139px",
                  fontSize: "94px",
                  fontFamily: "-webkit-body",
                  color: "lightgray"
                }}
              >
                <b>The geography</b>
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
          <Jumbotron fluid="true" style={{ minHeight: "690px" }}>
            <div className="section">
              <Row>
                <Col style={{ color: "black" }} xs="5" md="5">
                  <p>
                    Gopalganj is one of the administrative districts in the
                    Indian state of Bihar. The district headquarters is the town
                    of Gopalganj, and the district is part of Saran Division.
                    Major languages spoken are Bhojpuri, and Hindi.
                  </p>
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
                </Col>
                <Col xs="2" md="2 " />
                <Col xs="5" md="5">
                  <div style={{ marginTop: "-24%" }}>
                    <Row>
                      <Col xs="3" md="3" />
                      <Col xs="9" md="9">
                        <img
                          className="thumbnail"
                          width="70%"
                          src={land}
                          alt="farmer pic"
                        />
                      </Col>
                    </Row>
                  </div>
                  <div style={{ marginTop: "25%" }}>
                    <Row>
                      <Col xs="3" md="3" />
                      <Col xs="9" md="9">
                        <img
                          className="thumbnail"
                          width="70%"
                          src={landsoil}
                          alt="farmer pic"
                        />
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Jumbotron>
        </div>

        <Jumbotron
          fluid
          style={{
            marginTop: "-9%",
            minHeight: "480px",
            backgroundColor: "	whitesmoke"
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
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "left",
                  textAlign: "center"
                  // margin:'3em'
                }}
              >
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
                    lat: 26.40757,
                    lng: 84.42232
                  }}
                  zoom={12}
                >
                  <Marker
                    position={{
                      lat: 26.40757,
                      lng: 84.42232
                    }}
                    name={"Current location"}
                  />
                </Map>
                {/* <Row>
                  <Col xs="3" md="3" />
                  <Col style={{ marginTop: "40px" }} xs="6" md="6">
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
                  <Col xs="3" md="3" />
                </Row> */}
              </div>
            </div>
          </div>
        </Jumbotron>

        <Jumbotron
          id="contactus"
          style={{
            minHeight: "480px",
            marginTop: "-7%",
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
                <Col xs="8" md="8" />
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
                      <span style={{ color: "#51c7ec", fontSize: "x-large" }}>
                        Write to Manoj
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
                        message to our friend, Manoj.
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
                <Col xs="1" md="1" />
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

export default GoogleApiWrapper({
  apiKey: "AIzaSyCHi5ryWgN1FcZI-Hmqw3AdxJQmpopYJGk"
})(App);
