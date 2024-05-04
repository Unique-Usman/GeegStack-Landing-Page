import "./LearnEnvironment.css";

export default function LearningEnvironment({displayForm}) {
  return (
    <div className="learn-env">
      <h1>A Learning Environment That Inspires</h1>
      <div className="learn-env-content">
        <div className="learn-env-img">
          {/* <img src="../images/geegstack-timeline.png" /> */}
        </div>
        <div className="learn-env-text">
          <p className="learning-env-feature">
            Focused and Conducive Learning Environment
          </p>
          <p>
            Our Learning environment gives you the comfortability to study
            effectively and the inspiration to stay focused.
          </p>
          <br />
          <p>
            You have access to adequate power supply and all round internet
            access.
          </p>
          <br />
          <div className="cta">
            <p className="learning-env-feature">
              Learn At a world class facility{" "}
            </p>
            <p className="link">
              <a href="#" onClick={displayForm}>Register for the program</a> to learn at the top
              learning facility in Ibadan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
