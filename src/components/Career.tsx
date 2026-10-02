import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="education">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Background
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>RIT Roorkee, Uttarakhand</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              2025 – Present (Pursuing). Studying core subjects including Programming in C/C++, Data Structures (DSA), DBMS, Operating Systems, Computer Networks, and Web Technologies while gaining exposure to industry workflows.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class 12 (Science Stream)</h4>
                <h5>BSEB Board (Physics, Chemistry, Maths)</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              2023 – 2025. Completed higher secondary education focusing on Mathematics and Science. Developed strong analytical, logical reasoning, and quantitative problem-solving abilities essential for software programming.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Secondary Schooling (Class 10)</h4>
                <h5>BSEB Board</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Completed secondary education with a focus on core science and mathematics, building a solid foundation in technology, computers, and software fundamentals.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
