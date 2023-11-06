import React from 'react'
import Home from '../Pages/Home'
import {Routes, Route,Link,NavLink} from 'react-router-dom'
import Room from '../Pages/Room'
function Header() {
     
  return (
    <header>
      <div className="head">
      <nav className=" container navbar navbar-expand-lg  pt-4 pb-2">
        <div className="container-fluid">
          <Link className="navbar-brand" to={`/`}><h4 className="text-light pe-lg-5 ">Travel & Tourism</h4></Link>
          <button className="navbar-toggler" type="button"data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" >
            <span className="navbar-toggler-icon" />
          </button>
          <div className= "collapse navbar-collapse" id="navbarSupportedContent" >
            <ul className="navbar-nav me-auto mb-2 mb-lg-2 text-light gap-5 " >
              <li className="nav-item">
                <NavLink className="b text-light"  to={`/`}>HOME</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="b text-light"  to={`/room/`}>ROOMS</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" b text-light"  to={`/amenities`}>AMENITIES</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className=" b text-light"  to={`/contact`}>CONTACT</NavLink>
              </li>
              </ul>
            <Link to={`/reservation`} className="btn btn-outline-light py-2 px-3" type="submit">RESERVATION</Link>
          </div>
        </div>
      </nav>
      </div>
      <Routes>
        <Route path='/' element= {<Home/>} />
        <Route path='/room/' element= {<Room/>} />
      </Routes>

    </header>
    
  )
}

export default Header
