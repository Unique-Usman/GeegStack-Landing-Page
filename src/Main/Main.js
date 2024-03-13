import Form from "../form/Form.js";
import CourseInfo from "../information/CourseInfo.js";
import Testimonial from "../testimonial/Testimonial.js";
import Feature from "../features/Feature.js";
import BecomeProfessional from "../becomeprofessional/BecomeProfessional.js";
import TrackTimeline from "../tracksyllabus/TrackTimeline.js";
import "./Main.css";

export default function Main() {
  let track = "Full Stack";
  let content =
    "Whether you have experience writing programming before or you are just starting out with no coding experience, we will hold your hands through and give you all the necessary skill set you need to become a job ready developer. Within the 24 weeks, you will learn about the foundation- how the internet works, how programs work and start to write your own programs. You will learn to build the interface of software applications and web pages then learn to build robustic web servers using the most in demand technologies like JavaScript, React, NodeJS, ExpressJS, MongoDB. You will also learn the strategies to get your first paid job or project as a graduate student developer and get necessary support";
  let tracks = [
    {
      header: "Fundamentals",
      content:
        "Fundamentals: The first few weeks of the program helps you get started in programming –how the internet works, how programs work, the essential tools needed to become a successful developer and then learning the basic web languages- html and css. After which you’ll be able to develop the interface of websites and software that displays well on any device - desktop, tab or mobile phon",
    },
    {
      header: "Frontend programming",
      content:
        "After the basics, we will dive deep into the web's most popular programming language- JavaScript. We’ll start with the basics up to building standard responsive applications with it",
    },
    {
      header: "Version Control System",
      content:
        "You will learn to track different code versions as we work on projects and how we can collaborate with others to successfully work on a project and contribute to others projects. We’ll be using Git and GitHub for this.",
    },
    {
      header: "Frontend Library",
      content:
        "You will learn to build standard single page applications and create reusable components using the most popular JavaScript library- React.",
    },
    {
      header: "Serverside",
      content:
        " You’ll learn to build dynamic web pages that render contents based on the user's previous interactions with it. The same logic used to build Facebook, Twitter, Blogs and other web projects. You will be able to do this with NodeJS and its framework, ExpressJS.",
    },
    {
      header: "Database",
      content:
        " You will learn the fundamentals of database, key metrics to determine which database to use for a project and then learn to keep data used in your applications in database. In the program you’ll learn about MongoDB, the most used NoSQL database.",
    },
    {
      header: "Web hosting",
      content:
        " Having completed the development learning process, you will learn to host your projects live to be accessible to anyone on the internet.",
    },
  ];
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
      <Feature />
      <BecomeProfessional track={track} content={content} />
      <div className="student-experience">
        <h3>Student's Experience</h3>
        <p>
          Whether you want to pursue a career as a Web Developer, a Freelancer
          or an Entreprener, this program prepares you adequately for that. This
          is an immersive, collaborative and intensive porgam, prepared in a way
          to help you apply what you learn in real-time through project-based
          work.
        </p>
      </div>
      <TrackTimeline tracks={tracks} />
    </div>
  );
}
