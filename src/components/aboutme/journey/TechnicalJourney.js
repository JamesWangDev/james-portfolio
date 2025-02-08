import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import ComputerIcon from "@mui/icons-material/Computer";
import {
  DiHtml5,
  DiPython,
  DiReact,
  DiPhp,
  DiJava,
  DiCss3,
  DiJavascript1,
  DiMysql,
  DiNodejs,
} from "react-icons/di";
import Flip from "react-reveal/Flip";

function TechnicalJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        {/* <Link className="btn btn-primary m-1" to="/experiencejourney">
          Experience Journey
        </Link> */}
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Technical Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        {/* DevOps & Cloud - Earlier Experience */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2018 - 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">DevOps & Cloud</h3>
          <p>
            • CI/CD implementation and automation
            <br />
            • Docker containerization and orchestration
            <br />
            • Cloud infrastructure management
            <br />
            • Performance optimization and monitoring
          </p>
        </VerticalTimelineElement>

        {/* Full Stack Development */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2020 - 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<DiReact />}
        >
          <h3 className="vertical-timeline-element-title">Full Stack Development</h3>
          <p>
            • Building scalable web applications with modern frameworks
            <br />
            • Frontend: React, Vue, Next.js, TypeScript
            <br />
            • Backend: Node.js, Laravel, RESTful APIs
            <br />
            • Database: MongoDB, PostgreSQL, MySQL
          </p>
        </VerticalTimelineElement>

        {/* AI/LLM Development - Most Recent */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="2022 - Present"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<ComputerIcon />}
        >
          <h3 className="vertical-timeline-element-title">AI/LLM Development</h3>
          <p>
            • Building AI-powered applications using OpenAI and LangChain
            <br />
            • Implementing RAG systems with Vector Databases
            <br />
            • Developing custom chatbots and AI assistants
            <br />
            • Optimizing prompt engineering and embeddings
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default TechnicalJourney;
