import React from "react";
import Typewriter from "typewriter-effect";

function Typing() {
    return (
        <Typewriter
            options={{
                strings: [
                    "Full Stack Engineer",
                    "AI/ML Developer",
                    "Blockchain Developer",
                    "SaaS Specialist",
                    "DevOps Engineer",
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default Typing;
