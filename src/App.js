import React, { Component } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
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
  Col
} from "react-bootstrap";
import farmerimg from "./images/Ramanand.jpg";
import logo from "./images/logonew.jpg";
import farm2 from "./images/farm2.png";
import farm1 from "./images/farm1.png";
import "./App.css";
import AOS from "aos";
import axios from 'axios'
import "aos/dist/aos.css";
AOS.init();

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
  constructor(props){
    super(props)
    this.state={data:{}}
  }
  componentDidMount() {
    axios({
      url: 'http://staging.clarolabs.in:7060/landingpage/farmer/info/1/',
      method: "POST",
      data: {
        temp: "temp"
      },
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then((res)=>{
      console.log('data:',res.data)
      this.setState({data:res.data.data})
    })
    .catch((e)=>{
      console.log(e)
    })
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
    // var image = document.getElementsByClassName('thumbnail');
    // new simpleParallax(image, {
    //   delay: .6,
    //   transition: 'cubic-bezier(0,0,0,1)'
    // })
    if (window.screen.width <= 480) {
      this.props.history.push("./mobile");
    }
  }
  render() {
    return (
      <div>
        <AnchorLink href="#head">
          <button id="myBtn" title="Go to top">
            <i className="fas fa-arrow-up"></i>
          </button>
        </AnchorLink>
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
                    {this.state.data.name}
                  </p>
                  <p
                    style={{
                      // fontSize: "18px",
                      marginTop: "-30px"
                    }}
                  >
                    {this.state.data.village}, {this.state.data.district}
                  </p>
                  <p
                    style={{
                      // color: "#546f1e",
                      // fontSize: "16px",
                      marginTop: "40px"
                    }}
                  >
                    Ramanand Prasad was on boarded as a Farmer Partner at Claro
                    Agro in 2018. He has been using our Solar Irrigation Service
                    (Mini Grid) via the Mobile Solar trolley (Patvan). In a span
                    of 1 year, he has generated significant savings by
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
                      // width="55%"
                      src={this.state.data.farmerImage}
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
                      Ramanand Prasad hails from ramchandar pur village in the
                      district of gopalganj in bihar. He owns 1 katha acres of
                      farmland on which he is growing spices, sowing the local
                      variety. He has been practicing farming for 10 years.
                      Currently he lives with his 10 family member. Encouraged
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
                              style={{
                                opacity: "0.5",
                                width: "70px",
                                marginLeft: "-11px"
                              }}
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

export default App;
