import "./Form.css";

export default function Form() {
  return (
    <div className="register">
      <h3>Register to learn more about the program pricing and curriculum</h3>
      <form className="register_form">
        <div className="register_name input-wrapper">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Second Name"
              className="form-control"
            />
          </div>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
          />
        </div>
        <div className="input-wrapper">
          <input
            type="tel"
            placeholder="Phone Number"
            className="form-control"
          />
        </div>
        <div className="submit">
          <button>Get Program Package</button>
        </div>
      </form>
    </div>
  );
}
