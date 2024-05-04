import "./Form.css";
import { useRef, useState, useEffect } from "react";

export default function Form({customcss=false}) {
 
  const firstNameRef = useRef();
  
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
     e.preventDefault();
     console.log("Hello World");
     console.log(firstName);
     console.log(lastName);
     console.log(email);
     console.log(phoneNumber);
  };


  
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  
  return (
    <div className={`register ${customcss ? "custom" : ""}`}>
      <h3>Register to learn more about the program pricing and curriculum</h3>
      <form className="register_form" onSubmit={handleSubmit}>
        <div className="register_name input-wrapper">
          <div>
            <input
              type="text"
              placeholder="First Name"
              className="form-control"
              id="firstname"
              ref={firstNameRef}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Second Name"
              className="form-control"
              id="lastname"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              required
            />
          </div>
        </div>
        <div className="input-wrapper">
          <input
            type="email"
            placeholder="Email Address"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
        <div className="input-wrapper">
          <input
            type="tel"
            placeholder="Phone Number"
            className="form-control"
            id="phonenumber"
            onChange={(e) => setPhoneNumber(e.target.value)}
            value={phoneNumber}
            required
          />
        </div>
        <div className="submit">
          <button>Get Program Package</button>
        </div>
      </form>
    </div>
  );
}
