import Education from "./Education";
import Experience from "./Experience";
import Header from "./Header";
import Interests from "./Interests";
import "./Resume.css";
import Skills from "./Skills";

const Resume = () => {
  return (
    <div className="page">
      <Header />
      <Interests />
      <Skills />
      <Experience />
      <Education />
    </div>
  );
};

export default Resume;
