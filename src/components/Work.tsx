import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const certifications = [
  {
    title: "Inlingua Training",
    category: "International School of Languages",
    tools: "Communication, Public Speaking, Body Language, Behavioral Skills",
    desc: "Completed structured training focused on communication skills, interpersonal behavior, confidence building, public speaking, and corporate behavioral skills.",
  },
  {
    title: "Java Training Certificate",
    category: "IIT Bombay",
    tools: "Java, OOPs, Data Structures, Problem Solving",
    desc: "Completed structured Java programming training certified by IIT Bombay, mastering object-oriented programming principles and logical development.",
  },
  {
    title: "Google Developer HackSprint",
    category: "Google Developer Event",
    tools: "Hackathon, Software Design, Problem Solving, Workflows",
    desc: "Participated in Google Developer HackSprint, building practical problem-solving skills and gaining exposure to modern technology workflows.",
  },
  {
    title: "Adya Launch Lab",
    category: "Technology Launchpad",
    tools: "Practical Learning, Project Execution, Technical Aptitude",
    desc: "Completed hands-on launchpad program at Adya Launch Lab, gaining practical experience in software execution and technical skill building.",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`, // Use actual scroll width
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Certifications <span>& Training</span>
        </h2>
        <div className="work-flex">
          {certifications.map((item, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>0{index + 1}</h3>

                  <div>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
                <h4>Skills & Focus</h4>
                <p>{item.tools}</p>
                <p style={{ marginTop: "12px", fontSize: "14px", opacity: 0.85 }}>
                  {item.desc}
                </p>
              </div>
              <WorkImage image="/images/placeholder.webp" alt={item.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
