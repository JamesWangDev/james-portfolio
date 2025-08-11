import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
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
          <h1>Experience Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="October 2022 – November 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Evolphin Software
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Full Stack Engineer | CA, United States | Remote
          </h6>
          <p>• Contributed to Crop Photo AI platform—a scalable, AI-powered DAM/MAM system enabling seamless version control, collaboration, and creative workflows across images, video, and metadata-rich assets.</p>
          <p>• Spearheaded the adoption of server-side rendering (SSR) strategies in Next.js projects, leading to a 60% increase in page load speed and improved SEO rankings.</p>
          <p>• Designed mobile-first, responsive UI components to enhance accessibility across devices—leading to a noticeable uptick in engagement.</p>
          <p>• Developed custom hooks in React to simplify state management and improve code reusability across different modules.</p>
          <p>• Collaborated on WebAssembly integration to accelerate complex image and video processing workflows.</p>
          <p>• Enhanced web accessibility by implementing WCAG 2.1 guidelines, making the platform more inclusive.</p>
          <p>• Automated CI/CD pipelines with GitHub Actions, reducing deployment times by 30% and improving release reliability.</p>
          <p>• Led the migration from JavaScript to TypeScript to improve code maintainability and reduce bugs.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="May 2020 – August 2022"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Self-Employed
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Full Stack Developer | Remote | Freelancing
          </h6>
          <p>• Delivered full-stack solutions for multiple SaaS platforms, leveraging modern web technologies to build scalable, user-friendly applications.</p>
          <p>• Developed Supermind.bot — an AI-powered chatbot platform designed to enhance customer interactions through intelligent automation.</p>
          <p>• Built The Captapp — a comprehensive platform streamlining digital content capture and management for businesses and individual users.</p>
          <p>• Created QRCode AI — an innovative SaaS tool for generating and managing dynamic QR codes integrated with AI-driven analytics.</p>
          <p>• Developed decentralized finance (DeFi) apps on Ethereum using Solidity smart contracts, integrating Chainlink Oracles for reliable data feeds.</p>
          <p>• Built NFT marketplaces on Solana with Rust and Anchor, optimizing transactions and integrating WalletConnect for wallet interoperability.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="July 2017 – March 2020"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            Crawford House
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            Web Developer | Hong Kong
          </h6>
          <p>• Integrated REST APIs for dynamic data handling, improving system responsiveness.</p>
          <p>• Revamped the front-end architecture, migrating from JavaScript to TypeScript to improve maintainability.</p>
          <p>• Led internal training sessions for junior developers, increasing overall team efficiency.</p>
          <p>• Innovated the implementation of dark mode using CSS variables and React context, enhancing user experience for nighttime browsing.</p>
          <p>• Collaborated on a cross-functional team to integrate WebAssembly modules, significantly boosting performance for complex calculations.</p>
          <p>• Architected a reusable component library with Storybook, streamlining UI development and ensuring design consistency across projects.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
