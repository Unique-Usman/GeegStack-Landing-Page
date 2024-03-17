import "./Pricing.css";

export default function Pricing({ pricing }) {
  return (
    <div className="pricing-ctn">
      <div className="pricing">
        <h1 className="pricing-header">Pricing</h1>
        <p className="pricing-text">
          We offer different pricing options to suit your schedule/
        </p>
        <div className="pricing-cards">
          {pricing.map((val, ind) => {
            return (
              <div key={ind} className="pricing-card">
                <p className="pricing-card-header">{val.header}</p>
                <p className="pricing-card-price">{val.price}</p>
                <p className="pricing-card-duration">{val.duration}</p>
                <p className="pricing-card-classdays">{val.classDays}</p>
                <p className="pricing-card-time">{val.time}</p>
                <p>
                  <ul ClassName="pricing-card-amenities">
                    <p className="amenities-head">Amenities</p>
                    {val.Amenities.map((val, ind) => {
                      return (
                        <li key={ind} className="amenity">
                          {val}
                        </li>
                      );
                    })}
                  </ul>
                </p>
                <button className="pricing-card-btn">
                  Get Program Package
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
