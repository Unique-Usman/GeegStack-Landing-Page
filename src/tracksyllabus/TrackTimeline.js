import "./TrackTimeline.css";

export default function TrackTimeline({ tracks, displayForm }) {
  return (
    <div className="track-timeline">
      <div className="track-timeline-img">
        {/* <img src="../images/geegstack-timeline.png" /> */}
      </div>
      <ul className="track-timelines-items">
        {tracks.map((val, ind) => {
          return (
            <li key={ind} className="track-timelines-item">
              <p className="track-timeline-header">{val.header}</p>
              <p className="track-timeline-content">{val.content}</p>
            </li>
          );
        })}
      </ul>
      <button className="track-timeline-btn" onClick={displayForm}>Get Program Package</button>
    </div>
  );
}
