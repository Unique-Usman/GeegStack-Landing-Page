import Logo from "../images/geegstack-academy-logo.png"
import "./NavBar.css"

export default function NavBar () {

  const navList = ["Download Package", "Login", "Register"];

  return (
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
    </nav>
  )
}
