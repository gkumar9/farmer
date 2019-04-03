import React, { Component } from "react";
// import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
// import CO2 from "./1.png";
// import FLOW from "./2.png";
// import SOLARENERGY from "./3.png";
// import Imgturmeric from "./imgturmeric.png";
// import Imgplant from "./imgplant.png";
// import land from "./land.png";
// import landsoil from "./landsoil.png";
// import rain from "./rain.png";
// import soil from "./soil.png";
// import temp from "./temp.png";
// import ph from "./ph.png";
// import backgroundimg from "./background.png";
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
// import farm2 from "./farm2.png";
// import farm1 from "./farm1.png";
import "./mobile.css";
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
        <Container>
          <Header />
          <Jumbotron fluid>
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
                padding: "5vw"
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
        </Container>
      </div>
    );
  }
}

export default App;
