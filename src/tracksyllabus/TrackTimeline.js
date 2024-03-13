import "./TrackTimeline.css";

export default function TrackTimeline({ tracks }) {
  return (
    <div className="track-timeline">
      <div className="track-timeline-img">
        {/* <img src="../images/geegstack-timeline.png" /> */}
      </div>
      <ul class="track-timelines-items">
        {tracks.map((val, ind) => {
          return (
            <li key={ind} class="track-timelines-item">
              <p className="track-timeline-header">{val.header}</p>
              <p className="track-timeline-content">{val.content}</p>
            </li>
          );
        })}
      </ul>
      <button className="track-timeline-btn">Get Program Package</button>
    </div>
  );
}
