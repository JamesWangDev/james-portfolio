import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="/lottie/coding.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={2000}>
              <p className="home-about-body">
                My name is <b className="purple">James Wang</b>, a passionate{" "}
                <b className="purple">Senior Full-Stack Developer</b> with over 7 years 
                of experience crafting digital solutions from <b className="purple">Hong Kong</b>.
                <Fade left cascade duration={1500}>
                  I specialize in building scalable applications using modern technologies including{" "}
                  <b className="purple">
                    React, Vue, Next.js, Node.js, and Cloud Services
                  </b>
                  My expertise spans from responsive frontend designs to robust backend architectures.
                </Fade>
                <br />
                <Fade right cascade duration={1500}>
                  Currently, I'm deeply involved in
                  <b className="purple">
                    AI/LLM Development, focusing on building intelligent systems using OpenAI, LangChain, 
                    RAG architectures, and Vector Databases
                  </b>
                  I'm passionate about creating AI-powered solutions that solve real-world problems.
                </Fade>
                <Fade bottom duration={1500}>
                  I pride myself on writing clean, maintainable code and following industry best practices. 
                  My approach combines technical excellence with practical business solutions.
                </Fade>
                <Fade bottom duration={1500}>
                  I'm currently available for new opportunities and would love to discuss how I can 
                  contribute to your project's success. Let's connect and create something amazing together!
                </Fade>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
