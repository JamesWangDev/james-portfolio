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
                <b className="purple">Full Stack Engineer</b> with over 8 years 
                of experience delivering high-performance SaaS, blockchain, and DevOps solutions from <b className="purple">Hong Kong</b>.
                <Fade left cascade duration={1500}>
                  I specialize in building scalable applications using modern technologies including{" "}
                  <b className="purple">
                    React, Next.js, Vue, Node.js, TypeScript, and Cloud Services
                  </b>
                  . Known for fast, reliable work style, full-time availability, and quick communication that keeps projects moving seamlessly from idea to launch.
                </Fade>
                <br />
                <Fade right cascade duration={1500}>
                  Currently, I'm deeply involved in{" "}
                  <b className="purple">
                    AI-powered SaaS platforms, focusing on building intelligent systems for image processing, 
                    blockchain development, and scalable web applications
                  </b>
                  . I'm passionate about creating solutions that solve real-world problems and drive business value.
                </Fade>
                <Fade bottom duration={1500}>
                  My expertise spans from responsive frontend designs to robust backend architectures, 
                  with particular strength in AI integration, blockchain development, and DevOps automation. 
                  I pride myself on writing clean, maintainable code and following industry best practices.
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
