import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container: HTMLDivElement | null) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container: HTMLDivElement | null) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO" id="whatido">
      <div className="what-box">
        <h2 className="title">
          S<span className="hat-h2">KILLS &</span>
          <div>
            E<span className="do-h2">XPERTISE</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el: HTMLDivElement | null) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>PROGRAMMING</h3>
              <h4>Core Software & IT Skills</h4>
              <p>
                Developing core programming skills in C, Python, and Java, alongside Data Structures & Algorithms, DBMS, Operating Systems, and Web Technologies.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">C Programming</div>
                <div className="what-tags">Basic Python</div>
                <div className="what-tags">Basic Java</div>
                <div className="what-tags">DSA (Data Structures)</div>
                <div className="what-tags">Computer Fundamentals</div>
                <div className="what-tags">DBMS</div>
                <div className="what-tags">Operating Systems</div>
                <div className="what-tags">Computer Networks</div>
                <div className="what-tags">Web Technologies</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el: HTMLDivElement | null) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>
            <div className="what-content-in">
              <h3>SUPPORT & TOOLS</h3>
              <h4>Office & Technical Support</h4>
              <p>
                High-efficiency technical chat and email support, advanced MS Office & Google Workspace management, data entry operations, and fast 45 WPM typing.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">MS Excel (Advance)</div>
                <div className="what-tags">MS Word (Advance)</div>
                <div className="what-tags">Google Sheets / Docs</div>
                <div className="what-tags">Chat / Email Support (Advance)</div>
                <div className="what-tags">Data Entry</div>
                <div className="what-tags">Typing (45 WPM, 95% Acc.)</div>
                <div className="what-tags">Communication & Public Speaking</div>
                <div className="what-tags">Creative Content Design</div>
                <div className="what-tags">Hindi (Fluent)</div>
                <div className="what-tags">English (Basic) / Hinglish</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
