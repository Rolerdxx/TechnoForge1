import "./App.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import logo from "./TechnoForge-removebg-preview.png";
import Button from "react-bootstrap/Button";
import AnchorLink from "react-anchor-link-smooth-scroll-v2";
import { useState, useRef } from "react";
import Form from "react-bootstrap/Form";
import emailjs from "@emailjs/browser";
import ScrollToTop from "react-scroll-up";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import Alert from "react-bootstrap/Alert";
import Spinner from "react-bootstrap/Spinner";

function App() {
  const [show, setshow] = useState(false);
  const [show1, setshow1] = useState(false);
  const [show2, setshow2] = useState(false);
  const [alertt, setalert] = useState(false);
  const [loading, setloading] = useState(false);

  const form = useRef();

  const sendit = (e) => {
    e.preventDefault();
    setloading(true);
    emailjs
      .sendForm(
        "service_3s7yo34",
        "template_u23j7vm",
        form.current,
        "4sUXG8Vo50aBmoROL"
      )
      .then(
        (result) => {
          setTimeout(() => {
            setalert(true);
            setloading(false);
          }, 3000);
          setalert(false);
        },
        (error) => {
          setloading(false);
          // show the user an error
        }
      );
  };

  return (
    <>
      <header
        style={{
          textAlign: "center",
          position: "sticky",
          marginBottom: "20px",
        }}
      >
        <img style={{ height: "200px" }} src={logo} />

        <Container>
          <Row>
            <Col>
              <AnchorLink className="but" href="#projects">
                Projects.
              </AnchorLink>
            </Col>
            <Col>
              <AnchorLink className="but" href="#about">
                About.
              </AnchorLink>
            </Col>
            <Col>
              <AnchorLink className="but" href="#contactform">
                contact.
              </AnchorLink>
            </Col>
          </Row>
        </Container>
      </header>

      <Container fluid>
        <video id="background-video" autoplay loop muted>
          <source src="./file.mp4" type="video/mp4" />
        </video>
        <Row id="topimg">
          <h1>TechnoForge - Blah Blah</h1>
        </Row>
        <Row
          id="projects"
          style={{
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "80px",
          }}
        >
          <h1 className="title">Projects.</h1>
        </Row>
        <Row>
          <Col
            onMouseLeave={() => {
              setshow(false);
            }}
            onMouseEnter={() => {
              setshow(true);
            }}
            id="p1"
            md
          >
            <div
              className="labb"
              style={show ? { display: "block" } : { display: "none" }}
            >
              Project 1
            </div>
          </Col>
          <Col
            id="p1"
            onMouseLeave={() => {
              setshow1(false);
            }}
            onMouseEnter={() => {
              setshow1(true);
            }}
            md
          >
            <div
              className="labb"
              style={show1 ? { display: "block" } : { display: "none" }}
            >
              Project 2
            </div>
          </Col>
          <Col
            id="p1"
            onMouseLeave={() => {
              setshow2(false);
            }}
            onMouseEnter={() => {
              setshow2(true);
            }}
            md
          >
            <div
              className="labb"
              style={show2 ? { display: "block" } : { display: "none" }}
            >
              Project 3
            </div>
          </Col>
        </Row>

        <Row id="midimg"></Row>

        <Row
          id="about"
          style={{
            textAlign: "center",
            marginTop: "80px",
            marginBottom: "80px",
          }}
        >
          <h1 className="title">About.</h1>
          <p id="para">
            Generating random paragraphs can be an excellent way for writers to
            get their creative flow going at the beginning of the day. The
            writer has no idea what topic the random paragraph will be about
            when it appears. This forces the writer to use creativity to
            complete one of three common writing challenges. The writer can use
            the paragraph as the first one of a short story and build upon it. A
            second option is to use the random paragraph somewhere in a short
            story they create. The third option is to have the random paragraph
            be the ending paragraph in a short story. No matter which of these
            challenges is undertaken, the writer is forced to use creativity to
            incorporate the paragraph into their writing.{" "}
          </p>
        </Row>
        <Row id="bottomimg"></Row>

        <Row id="contactform">
          <h1 className="title">Contact.</h1>
          <Form
            ref={form}
            onSubmit={sendit}
            style={{ width: "40%", margin: "auto" }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Name*</Form.Label>
              <Form.Control name="name" type="text" required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address*</Form.Label>
              <Form.Control
                name="email"
                type="email"
                placeholder="name@example.com"
                required
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control name="phone" type="text" />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Message*</Form.Label>
              <Form.Control name="message" as="textarea" rows={4} required />
            </Form.Group>
            TechnoForge@gmail.com
            <Button
              style={{ width: "15%", marginLeft: "54%" }}
              variant="outline-dark"
              type="submit"
              disabled={loading ? true : false}
            >
              Send
            </Button>
            <Spinner
              style={
                loading
                  ? { display: "block", marginLeft: "95%" }
                  : { display: "none", marginLeft: "95%" }
              }
              animation="border"
              role="status"
            >
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <Alert
              style={alertt ? { display: "block" } : { display: "none" }}
              key="success"
              variant="success"
            >
              Thanks for contacting us!
            </Alert>
          </Form>
        </Row>
        <Row id="footer">
          <p>@blasd dwdwopd dopwk dwop</p>
        </Row>
      </Container>
      <ScrollToTop showUnder={160}>
        <BsFillArrowUpCircleFill size="lg" />
        Back to top
      </ScrollToTop>
    </>
  );
}

export default App;
