import React from 'react'
import { Link } from 'react-router-dom';

import './navbar.css'

function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
 
            <Link className="navbar-brand" to="/"><span className="span-one">Eth</span><span className="span-two">io N</span><span className="span-three">ews</span></Link>
            <div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                {/* <a className="nav-link active" aria-current="page" href="#">New Posts</a> */}
                <Link className="nav-link" to='/'>News</Link> 
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/sport'>Sport News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to='/university'>University News</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-button" href="#">Support Us</a>
              </li>
              <li className="nav-item">
                <a className="nav-link nav-button" href="#">Join Us</a>
              </li>
                <a className="nav-link nav-button" href="#">Notifications <span className="badge bg-secondary">4</span></a>
            </ul>
            
          </div>
          
         
        </div>
    </nav>
  </>
  )
}

export default NavBar;