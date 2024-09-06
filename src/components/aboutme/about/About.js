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
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple">James Wang </b> 
                  and I am a <b className="purple">Senior full-stack developer </b> 
                    who has 7+ years of experience in software development from<b className="purple">Hong Kong </b>
                <br />
                <br />
                        I am proficient in various programming languages and frameworks such as &nbsp;
                  <b className="purple">
                    {" "}
                    HTML, CSS, JavaScript, TypeScript, PHP, Python, React, Vue, Next.js, Tailwind CSS, NodeJS, Laravel, etc.{" "}
                  </b>
                <br />
                <br />
                Recently, I am interested in &nbsp;

                  <b className="purple">
                    {" "}
                    AI, LLM, Chatbot, Open AI, GPT, etc. {" "}
                  </b>
                <br />
                <br />
                I follow standard industry web development methodologies and standard coding styles and best practices in development. &nbsp;
                <br />
                <br />I am free for now so I can dedicate to your project at anytime. Please feel free to contact me anytime. &nbsp;
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
