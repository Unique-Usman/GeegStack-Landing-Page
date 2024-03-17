import Form from "../form/Form.js";
import CourseInfo from "../information/CourseInfo.js";
import Testimonial from "../testimonial/Testimonial.js";
import Feature from "../features/Feature.js";
import BecomeProfessional from "../becomeprofessional/BecomeProfessional.js";
import TrackTimeline from "../tracksyllabus/TrackTimeline.js";
import "./Main.css";
import LearningEnvironment from "../learningenv/LearnEnvironment.js";
import WhyChooseGeegStack from "../whychoosegeegstack/WhyChooseGeegStack.js";
import CareerSupport from "../careersupport/CareerSupport.js";
import Faq from "../faq/Faq.js";
import Pricing from "../pricing/Pricing.js";

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
  let faqs = [
    {
      header: "What will I accomplish at the end of the program?",
      content: [
        "At the end of the program, you would acquire the practical skills needed to build standard web based software applications and websites and be ready to be hired as a software developer.",
      ],
    },
    {
      header: "Will I work on projects during the course?",
      content: [
        "Yes, you will certainly work on practical real world projects during the course. Geegstack students work on average 15 projects during the program.",
      ],
    },

    {
      header: "Will Geegstack provide me with a job after the course?",
      content: [
        "We do not guarantee you a job immediately after the course, however, we will give you all the needed insights to secure your first paid job or gig after learning the course and refer you to opportunities when available - and we will support you until you get it!",
      ],
    },
    {
      header: "Can I pay in installment?",
      content: [
        "We recommend one time payment for an uninterrupted learning. For installment payment, 60% of the payment has to be made to start the course while the balance is paid before the mid of the course.",
      ],
    },
    {
      header:
        "I don’t have any coding experience before, can I join the program?",
      content: [
        "Yes, the program is beginner friendly. We are starting from the basics.",
      ],
    },
    {
      header: "What are the tools I need to join the class?",
      content: [
        "You need a PC with at least: 4G RAM, 128 HDD/SSD and 2 hours battery lifespan. All the needed software will be installed for you when the program starts.",
      ],
    },
    {
      header: "I don’t live in Ibadan, how can I join the class?",
      content: [
        "We have a conducive boarding facility with limited space for distance students who are interested. You can also consider the self-paced online classes.",
      ],
    },
  ];

  let pricing = [
    {
      header: "Boarding and Internship",
      price: "N400,000",
      duration: "8 months (5 months learning, 3 months Internship)",
      classDays: "Monday - Saturday",
      time: "10am - 3pm",
      Amenities: ["Adequate power supply", "Internet Access"],
    },
    {
      header: "Boarding Only",
      price: "N300,000",
      duration: "18weeks",
      classDays: "Monday - Saturday",
      time: "10am - 3pm",
      Amenities: ["Adequate power supply", "Internet Access"],
    },

    {
      header: "Week day Classes",
      price: "N205,000",
      duration: " 24 weeks",
      classDays: "Monday - Thursday",
      time: "10am - 3pm",
      Amenities: ["Adequate power supply", "Internet Access"],
    },
    {
      header: "Online Classes",
      price: "N175,000",
      duration: "Self Paced",
      classDays: "",
      time: "",
      Amenities: [],
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
      <LearningEnvironment />
      <WhyChooseGeegStack />
      <CareerSupport />
      <div className="get-pack">
        <p>
          Interested in what you'll learn during the course of this program ?
        </p>
        <button>Get Program Package</button>
      </div>
      <Faq faqs={faqs} />
      <Pricing pricing={pricing} />
    </div>
  );
}
