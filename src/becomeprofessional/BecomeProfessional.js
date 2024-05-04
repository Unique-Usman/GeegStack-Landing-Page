import "./BecomeProfessional.css";

export default function BecomeProfessional({ track, content, displayForm }) {
  return (
    <div className="BecomeProfessional">
      <h1>Become a professional {track} developer</h1>
      <div className="becomeprofessional">
        <div className="becomeprofcontent">
          <p>{content}</p>
          <button className="becomeprofessionbtn"
          onClick={displayForm}>
          Get Program Package</button>
        </div>
        <div className="becomeprofimg">
          {/* <img src="../images/geegstack-professional.jpg" alt="hero" /> */}
        </div>
      </div>
    </div>
  );
}
