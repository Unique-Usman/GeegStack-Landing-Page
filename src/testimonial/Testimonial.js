import "./Testimonial.css";

export default function Testimonial() {
  const testimonials = [
    {
      testimonialImage: "../images/my_personal1.jpg",
      testimonialtext:
        "I came to Geegstack through a friend when I was already at tech school but I observed his performance is a lot better than mine then. I learned a lot and worked on a lot of challenging projects at Geegstack and I was also free during the learning period. I’ll absolutely recommend Geegstack to anyone",
      testimonialGiver: "Oluwasegun Paul",
      testimonialSkill: "Frontend Developer",
      testimonialWebsite: "",
    },
    {
      testimonialImage: "../images/my_personal1.jpg",
      testimonialtext:
        "Geegstack is among the best academy in Nigeria right now, because of the way the students are handled. The tutors teach what is necessary and what someone needs most to become a successful developer like giving real world tasks and solving problems. I know this because I’ve seen some academies and how they operate . It’s only in Geegstack you will a quality tutelage that will teach you what you need just for an affordable fee",
      testimonialGiver: "Olayiwola Abdulrahman",
      testimonialSkill: "Fullstack Developer",
      testimonialWebsite: "",
    },
    {
      testimonialImage: "../images/my_personal1.jpg",
      testimonialtext:
        "Geegstack classes give a detailed yet simple step by step method that equips even a newbie to become a professional within the shortest time possible. There is also dedicated and friendly tutor available",
      testimonialGiver: " Samuel Olawuyi",
      testimonialSkill: "Frontend Developer",
      testimonialWebsite: "",
    },
  ];

  return (
    <div className="testimonials">
      {testimonials.map((ele, ind) => (
        <div key={ind} className="testimonial">
          <div className="testimonial-img-wrapper">
            <img
              src={ele.testimonialImage}
              alt="testimonial"
              className="testimonial-img"
            />
          </div>
          <div className="testimonial-content">
            <p className="testimonial-text">{ele.testimonialtext}</p>
            <p className="testimonial-name">
              {ele.testimonialGiver}{" "}
              <span className="testimonial-skill">
                ({ele.testimonialSkill})
              </span>
            </p>
            <p className="">
              <a href=""></a>
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
