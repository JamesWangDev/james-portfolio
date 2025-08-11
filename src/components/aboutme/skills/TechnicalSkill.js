import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Tada from "react-reveal/Tada";
import Zoom from "react-reveal/Zoom";

export default function TechnicalSkill() {
  return (
    <div>
      <div className="mt-5 d-flex flex-row justify-content-center">
        <Link className="btn btn-primary me-3" to="/technicalSkill">
          Technical Skill
        </Link>
        <Link className="btn btn-primary me-3" to="/personalskill">
          Personal Skill
        </Link>
        <Link className="btn btn-primary " to="/toolkit">
          Toolkit
        </Link>
      </div>
      <Zoom left cascade>
        <h1 className="mt-4">Technical Skills</h1>
      </Zoom>
      <Container className="mt-4">
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          {/* Frontend Development */}
          <Col md={4}>
            <h1 style={{ fontSize: "100px", color: "#61dafb", fontWeight: 700 }}>
              95%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div class="progress">
                <div
                  role={"progressbar"}
                  id={"frontend"}
                  aria-valuenow={"95"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                  style={{ width: "95%" }}
                ></div>
              </div>
              <h2
                style={{
                  color: "#61dafb",
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                Frontend Development
              </h2>
              <p style={{ color: "#fbd9ad", fontSize: "14px" }}>
                React, Next.js, Vue, Nuxt.js, TypeScript, Svelte, Tailwind CSS, Material-UI, Styled-components
              </p>
            </div>
          </Col>

          {/* Backend Development */}
          <Col md={4}>
            <h1 style={{ fontSize: "100px", color: "#68a063", fontWeight: 700 }}>
              92%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div class="progress">
                <div
                  role={"progressbar"}
                  id={"backend"}
                  aria-valuenow={"92"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                  style={{ width: "92%" }}
                ></div>
              </div>
              <h2
                style={{
                  color: "#68a063",
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                Backend Development
              </h2>
              <p style={{ color: "#fbd9ad", fontSize: "14px" }}>
                Node.js, Express.js, NestJS, Fastify, Laravel, PHP, RESTful APIs, GraphQL, Strapi
              </p>
            </div>
          </Col>

          {/* Database & Cloud */}
          <Col md={4}>
            <h1 style={{ fontSize: "100px", color: "#ff6b6b", fontWeight: 700 }}>
              90%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div class="progress">
                <div
                  role={"progressbar"}
                  id={"database"}
                  aria-valuenow={"90"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                  style={{ width: "90%" }}
                ></div>
              </div>
              <h2
                style={{
                  color: "#ff6b6b",
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                Database & Cloud
              </h2>
              <p style={{ color: "#fbd9ad", fontSize: "14px" }}>
                MySQL, MongoDB, DynamoDB, AWS, GCP, Azure, Vercel, Netlify, Docker, CI/CD
              </p>
            </div>
          </Col>

          {/* Blockchain Development */}
          <Col md={4}>
            <h1 style={{ fontSize: "100px", color: "#f7931e", fontWeight: 700 }}>
              88%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div class="progress">
                <div
                  role={"progressbar"}
                  id={"blockchain"}
                  aria-valuenow={"88"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                  style={{ width: "88%" }}
                ></div>
              </div>
              <h2
                style={{
                  color: "#f7931e",
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                Blockchain Development
              </h2>
              <p style={{ color: "#fbd9ad", fontSize: "14px" }}>
                Solidity, Rust, Web3.js, Ethers.js, Hardhat, Truffle, Thirdweb, DeFi, NFTs
              </p>
            </div>
          </Col>

          {/* AI/ML Development */}
          <Col md={4}>
            <h1 style={{ fontSize: "100px", color: "#41f2ff", fontWeight: 700 }}>
              85%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div class="progress">
                <div
                  role={"progressbar"}
                  id={"ai"}
                  aria-valuenow={"85"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                  style={{ width: "85%" }}
                ></div>
              </div>
              <h2
                style={{
                  color: "#41f2ff",
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                AI/ML Development
              </h2>
              <p style={{ color: "#fbd9ad", fontSize: "14px" }}>
                OpenAI, LangChain, Vector DBs, RAG, Prompt Engineering, Computer Vision
              </p>
            </div>
          </Col>

          {/* DevOps & Tools */}
          <Col md={4}>
            <h1 style={{ fontSize: "100px", color: "#00d4aa", fontWeight: 700 }}>
              87%
            </h1>
            <div style={{ paddingLeft: "50px", paddingRight: "50px" }}>
              <div class="progress">
                <div
                  role={"progressbar"}
                  id={"devops"}
                  aria-valuenow={"87"}
                  aria-valuemin={"0"}
                  aria-valuemax={"100"}
                  style={{ width: "87%" }}
                ></div>
              </div>
              <h2
                style={{
                  color: "#00d4aa",
                  fontSize: "25px",
                  marginTop: "13px",
                  fontWeight: 700,
                }}
              >
                DevOps & Tools
              </h2>
              <p style={{ color: "#fbd9ad", fontSize: "14px" }}>
                Git, GitHub Actions, Docker, AWS, CI/CD, Testing, Performance Optimization
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
