import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Zoom from "react-reveal/Zoom";
import { Fade } from "react-reveal";
import nyc from "../../images/cropphoto.png";
import captapp from "../../images/captapp.png";
import hd from "../../images/supermind.png";
import pp from "../../images/shotassistant.png";
import { FaCode } from "react-icons/fa";
import { Link } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";

export default function Projects() {
  return (
    <div>
      <Container fluid className="certificate-section" id="about">
        <Container>
          <Row>
            <Col
              md={12}
              className="certificate-description d-flex justify-content-start"
            >
              <Zoom left cascade>
                <h1 className="aboutme-heading">Projects</h1>
              </Zoom>
            </Col>
            <Col md={3}>
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
                    <img src={nyc} alt={nyc} style={{ objectFit: "cover" }} />
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
                      Crop.photo project is a platform leveraging AI to enable
                      users to edit their images. During the project, I
                      collaborated with two fellow front-end developers, three
                      backend developers, and a QA specialist. I've worked for 1
                      years with this team in the EST time zone.
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
            <Col md={3}>
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
                    <img src={hd} alt={hd} style={{ objectFit: "cover" }} />
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
                      Supermind Bot is the Chat bot management platform using
                      several LLM models. The developers can create their own
                      chatbots in this platform and users can use the chatbots
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
            <Col md={3}>
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
                      Whether it's a sunset cocktail cruise, fishing, transport,
                      or just becoming familiar with your local waters we’re
                      here to help. You pick the trip and date, we’ll instantly
                      match you with local Captains who can make your day a much
                      more enjoyable one.
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
            <Col md={3}>
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
                    <img src={pp} alt={pp} style={{ objectFit: "cover" }} />
                    <div className="project--showcaseBtn">
                    </div>
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
                      Signle Page shop assistant app using pure HTML, CSS, JavaScript.
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
          </Row>
          <div className="blog--viewAll">
            <Link to="/projectspage">
              <button className="btn btn-primary">
                View All
                <HiArrowRight className="viewArr" />
              </button>
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
}
