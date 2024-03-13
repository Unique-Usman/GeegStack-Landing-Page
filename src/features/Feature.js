import "./Feature.css";

export default function Feature() {
  const features = [
    {
      featureImage: "../images/geegstack-timeline_icon.png",
      featureTitle: "24 Weeks",
      featureText:
        "Within 24 weeks, you’ll be equipped with the skill sets you need to become a professional full stack developer and build and manage professional, scalable and user friendly software applications.",
    },
    {
      featureImage: "../images/geegstack-beginer-friendly.png",
      featureTitle: "Beginner friendly",
      featureText:
        "The curriculum is simplified for every student. It takes anyone irrespective of their background up to becoming a confident programmer. We are aware you enrolled into the academy to get going easier and we are always keeping to that.",
    },
    {
      featureImage: "../images/geegstack-comprehensive.png",
      featureTitle: "Comprehensive",
      featureText:
        "Although simplified, the learning curriculum contains every essential knowledge needed to build and manage professional software and web applications. ",
    },
    {
      featureImage: "../images/geegstack-mentorship.png",
      featureTitle: "Superior Mentorship",
      featureText:
        "Every Geegstack student enjoys direct access to experienced tutors to answer their questions on lectures, projects, challenges or general inquiries related to their career as a software developer",
    },
  ];

  return (
    <div className="features">
      {features.map((ele, ind) => (
        <div key={ind} className="feature">
          <div className="feature-img-wrapper">
            <img src={ele.featureImage} alt="feature" className="feature-img" />
          </div>
          <div className="feature-content">
            <h4 className="feature-title">{ele.featureTitle}</h4>
            <p className="feature-text">{ele.featureText}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
