import Form from "../form/Form.js";
import CourseInfo from "../information/CourseInfo.js";
import Testimonial from "../testimonial/Testimonial.js";
import "./Main.css";

export default function Main() {
  return (
    <div className="main">
      <div className="course-info-regis-ctn">
        <div className="overlay"></div>
        <div className="course-info-regis-content">
          <CourseInfo
            courseName="Full Stack Development Immersive Course"
            courseDescription="Get all the skill sets you need to go from zero programming experience to become a job ready full stack developer."
            duration={"24 weeks"}
            startDate={"Anytime, Anyday"}
          />
          <Form />
        </div>
      </div>
      <Testimonial />
    </div>
  );
}
