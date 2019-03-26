import React, { Component } from "react";
import CO2 from "./1.png";
import FLOW from "./2.png";
import SOLARENERGY from "./3.png";
import {
  Jumbotron,
  ListGroup,
  Container,
  Navbar,
  Nav,
  Row,
  Col
} from "react-bootstrap";
import farmerimg from "./farmerpic.jpg";
import farm2 from "./farm2.png";
import farm1 from "./farm1.png";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
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
        <Jumbotron style={{ minHeight: "420px" }}>
          <div style={{ marginLeft: "100px" }}>
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
        </Jumbotron>
        <Jumbotron
          fluid
          style={{ minHeight: "460px", backgroundColor: "#E7E06E" }}
        >
          <div style={{ marginLeft: "100px" }}>
            <Row>
              <Col lg="5">
                <p
                  style={{
                    color: "white",
                    fontSize: "40px",
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
                    color: "#546f1e",
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
              <Col lg="2 " />
              <Col lg="5">
                <div style={{ marginTop: "-144px" }}>
                  <img width="70%" src={farmerimg} alt="farmer pic" />
                </div>
              </Col>
            </Row>
          </div>
        </Jumbotron>
        <Jumbotron
          fluid
          style={{ minHeight: "420px", backgroundColor: "white" }}
        >
          <div style={{ marginLeft: "100px" }}>
            <Row>
              <Col lg="3">
                <div style={{ marginTop: "-166px" }}>
                  <img width="65%" src={farm1} alt="turmic pic" />
                </div>
              </Col>
              <Col lg="3">
                <div style={{ marginTop: "-166px" }}>
                  <img width="65%" src={farm2} alt="farm pic" />
                </div>
              </Col>
              <Col lg="6" />
            </Row>
            <Row>
              <Col lg="5">
                <div style={{ color: "#546f1e", marginTop: "70px" }}>
                  <p>
                    Born on 12th Sep 1978, Santosh is the second child of his
                    parents. He hails from Rau Pusa village in the district of
                    Samastipur, Bihar. He owns 37 katha of turmeric farmland,
                    sowing the Morangia variety in the month of May. He has been
                    in the profession for over 20 years.
                  </p>
                  <p>
                    Currently he lives with his wife, younger brother and 3
                    children, all of them attending the community schools.
                    Encouraged by the partnership with Claro Minigrid Livelihod
                    Scheme, he plans to completely switch his house and farms
                    into clean energy technologies.
                  </p>
                </div>
              </Col>
              <Col lg="3" />
              <Col lg="4">
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
                        <Col lg="2">
                          <img
                            className="responsive"
                            alt="CO2"
                            src={CO2}
                            style={{ width: "46px", marginLeft: "-11px" }}
                          />
                        </Col>
                        <Col lg="8">
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
                        <Col lg="2">
                          <img
                            className="responsive"
                            alt="flow"
                            src={FLOW}
                            style={{ width: "46px", marginLeft: "-11px" }}
                          />
                        </Col>
                        <Col lg="8">
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
                        <Col lg="2">
                          <img
                            className="responsive"
                            alt="energy"
                            src={SOLARENERGY}
                            style={{ width: "46px", marginLeft: "-11px" }}
                          />
                        </Col>
                        <Col lg="8">
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
        <Jumbotron style={{ minHeight: "420px", backgroundColor: "#f1d3d8" }}>
          <div style={{ marginLeft: "100px" }}>
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
        </Jumbotron>
      </div>
    );
  }
}

export default App;
