import "./CourseInfo.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { faClock } from "@fortawesome/free-solid-svg-icons";

export default function CourseInfo({
  courseName,
  courseDescription,
  duration,
  startDate,
}) {
  return (
    <div className="course_info">
      <div className="coursename">
        <h1 className="course-name">{courseName}</h1>
        <p className="course-description">{courseDescription}</p>
      </div>
      <div className="enrollement-details">
        <div className="enrollement-details-content">
          <h3>Enrollment Details</h3>
          <div>
            <div className="enrollement-detail">
              <p>
                <FontAwesomeIcon icon={faLocationDot} /> Location
              </p>
              <p>Opposite University of Ibadan Second gate</p>
            </div>
            <div className="enrollement-detail">
              <p>
                <FontAwesomeIcon icon={faCalendarDays} /> Start Date
              </p>
              <p>{startDate}</p>
            </div>
            <div className="enrollement-detail">
              <p>
                <FontAwesomeIcon icon={faClock} /> Duration
              </p>
              <p>{duration}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
