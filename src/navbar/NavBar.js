import Logo from "../images/geegstack-academy-logo.png"
import "./NavBar.css"
import { useState } from "react";

export default function NavBar () {

  const navList = ["Download Package", "Login", "Register"];
  const [toggleHambuger, setToggleHambuger] = useState(false); 

  return (
    <>
      <nav className="nav">
        <div className="logo">
          <img src={Logo}
            className="logo-img"
            style={{width: "150px"}}>
          </img>
        </div>
        <ul className="nav-items">
          {navList.map((ele, ind) => <li key={ind}
          className="nav-item"><a href="#">{ele}</a></li>)}
        </ul>
        { /* Hambugger */ }
        <div className={`hamburger ${toggleHambuger && "active"}`} 
          onClick={() => setToggleHambuger(toggleHambuger => !toggleHambuger)}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
      <ul className={`nav-items-mobile ${toggleHambuger && "active"}`}>
          {navList.map((ele, ind) => <li key={ind}
          className="nav-item-mobile"><a href="#">{ele}</a></li>)}
      </ul>
    </>
  )
}

