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
import dream from "../../images/dream.png";
import budds from "../../images/budds.png";
import rblx from "../../images/rblx.png";
import spyne from "../../images/spyne.png";
import qrcode from "../../images/qrcode.png";

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
                                  with your local waters we're here to help. You
                                  pick the trip and date, we'll instantly match
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
                              href="https://dream.ai/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Dream AI
                                </h5>
                                <img
                                  src={dream}
                                  alt="dream ai"
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
                                  Dream AI is an advanced image generation platform that transforms text descriptions into stunning visual artwork. Using state-of-the-art AI models, users can create unique images for various purposes from simple descriptions.
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
                                React, TypeScript, Next.js, TailwindCSS
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
                              href="https://budds.ai/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Budds AI
                                </h5>
                                <img
                                  src={budds}
                                  alt="budds ai"
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
                                  Budds AI is an innovative mental health chatbot that provides 24/7 emotional support and guidance. It uses advanced natural language processing to offer personalized conversations, coping strategies, and mental wellness resources.
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
                                React, Node.js, Express, MongoDB
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
                              href="https://www.rblxai.com/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  RBLX AI
                                </h5>
                                <img
                                  src={rblx}
                                  alt="rblx ai"
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
                                  RBLX AI is a specialized tool for Roblox developers and creators, generating high-quality icons and thumbnails using AI. It streamlines the creation process for game assets, helping developers create more engaging content efficiently.
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
                                React, Python, FastAPI, TensorFlow
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
                              href="https://www.spyne.ai/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  Spyne AI
                                </h5>
                                <img
                                  src={spyne}
                                  alt="spyne ai"
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
                                  Spyne AI revolutionizes automobile merchandising with AI-powered image enhancement and virtual staging. It helps dealerships and sellers transform regular car photos into professional, showroom-quality images automatically.
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
                                React, AWS, Computer Vision, PyTorch
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
                              href="https://qrcode-ai.com/"
                              target="_blank"
                            >
                              <div className="projectContent">
                                <h5 id={"first"} style={{ color: "#fbd9ad" }}>
                                  QR Code AI
                                </h5>
                                <img
                                  src={qrcode}
                                  alt="qr code generator"
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
                                  A powerful and user-friendly QR code generator that creates customizable QR codes for various purposes. Features include dynamic QR codes, analytics tracking, and advanced customization options with AI-enhanced design capabilities.
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
                                React, Next.js, TypeScript, TailwindCSS
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
