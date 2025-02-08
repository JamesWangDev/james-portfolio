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
import spyne from "../../images/spyne.png";
import qrcode from "../../images/qrcode.png";

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
            <Col md={3}>
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
