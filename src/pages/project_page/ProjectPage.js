import React from "react";
import Particle from "../../Particle";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/cropphoto.png";
import hd from "../../images/supermind.png";
import pp from "../../images/shotassistant.png";
import captapp from "../../images/captapp.png";
import inworld from "../../images/inworld.png";
import vacasa from "../../images/vacssa.png";
export default function ProjectPage() {
  return (
    <section className="home-section">
      <Container fluid id="home">
        <Particle />
        <Container className="home-content">
          <div
            className="d-flex justify-content-center"
            width="100%"
            style={{ backgroundColor: "#fbd9ad" }}
          >
            <Zoom left cascade>
              <h1 style={{ color: "rgb(134 61 176" }}>PROJECTS</h1>
            </Zoom>
          </div>
          <div>
            <div>
              <Container fluid className="certificate-section" id="about">
                <Container>
                  <Row>
                    <Col md={12} className="mt-5">
                      <Row className="g-5">
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <a
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                              href="https://www.crop.photo/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Crop.Photo AI
                                </h5>
                                <img
                                  src={nyc}
                                  alt={nyc}
                                  style={{ objectFit: "cover" }}
                                />
                                <div className="project--showcaseBtn"></div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Crop.photo project is a platform leveraging AI
                                  to enable users to edit their images. During
                                  the project, I collaborated with two fellow
                                  front-end developers, three backend
                                  developers, and a QA specialist. I've worked
                                  for 1 years with this team in the EST time
                                  zone.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                React, Next.js, TypeScript, Jotai, fabric.js
                              </div>
                            </a>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <a
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                              href="https://supermind.bot/en/home"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Supermind Bot
                                </h5>
                                <img
                                  src={hd}
                                  alt={hd}
                                  style={{ objectFit: "cover" }}
                                />
                                <div className="project--showcaseBtn"></div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Supermind Bot is the Chat bot management
                                  platform using several LLM models. The
                                  developers can create their own chatbots in
                                  this platform and users can use the chatbots
                                  as they need.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                React, Next.js, Laravel
                              </div>
                            </a>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <a
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                              href="https://thecaptapp.com/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Our Captain, Your Boat!
                                </h5>
                                <img
                                  src={captapp}
                                  alt={captapp}
                                  style={{ objectFit: "cover" }}
                                />
                                <div className="project--showcaseBtn"></div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Whether it's a sunset cocktail cruise,
                                  fishing, transport, or just becoming familiar
                                  with your local waters we’re here to help. You
                                  pick the trip and date, we’ll instantly match
                                  you with local Captains who can make your day
                                  a much more enjoyable one.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                CSS, JavaScript, Vue, SCSS
                              </div>
                            </a>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <a
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                              href="https://fitdaypass.com/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Shop Assitant
                                </h5>
                                <img
                                  src={pp}
                                  alt={pp}
                                  style={{ objectFit: "cover" }}
                                />
                                <div className="project--showcaseBtn"></div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Signle Page shop assistant app using pure
                                  HTML, CSS, JavaScript.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, SCSS, React, JavaScript
                              </div>
                            </a>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <a
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                              href="https://fitdaypass.com/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Inworld Dashboard
                                </h5>
                                <img
                                  src={inworld}
                                  alt={inworld}
                                  style={{ objectFit: "cover" }}
                                />
                                <div className="project--showcaseBtn"></div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Give players groundbreaking game mechanics,
                                  dynamic NPCs, and worlds that evolve with each
                                  action. Whether you're looking to unlock new
                                  player experiences, streamline game design, or
                                  future proof your AI infrastructure, Inworld
                                  helps uplevel your game development with AI.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, SCSS, React, Next.js
                              </div>
                            </a>
                          </Fade>
                        </Col>
                        <Col md={3} className="col-sm-12 col-md-4">
                          <Fade bottom>
                            <a
                              key={1}
                              className="singleProject"
                              style={{
                                backgroundColor: "rgb(142 70 186 / 31%)",
                                border: "1px solid",
                              }}
                              href="https://fitdaypass.com/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Vacasa Rental Management
                                </h5>
                                <img
                                  src={vacasa}
                                  alt={vacasa}
                                  style={{ objectFit: "cover" }}
                                />
                                <div className="project--showcaseBtn"></div>
                              </div>
                              <h6>
                                <p
                                  className="project--desc"
                                  style={{
                                    background: "#fbd9ad",
                                    color: "#b061df",
                                    fontWeight: 600,
                                  }}
                                >
                                  Vacasa is North America’s #1 vacation rental
                                  partner, providing expert care to more than
                                  40,000 vacation homes in the most sought-after
                                  guest destinations.
                                </p>
                              </h6>
                              <div
                                className="project--lang"
                                style={{
                                  background: "#fbd9ad",
                                  color: "#b061df",
                                  fontWeight: 600,
                                }}
                              >
                                HTML, CSS, SCSS, React, Next.js
                              </div>
                            </a>
                          </Fade>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </div>
          </div>
        </Container>
      </Container>
    </section>
  );
}
