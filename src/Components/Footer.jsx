import React from 'react'
import {Link} from 'react-router-dom'
import {FaInstagram} from 'react-icons/fa'
import {FaTripadvisor} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
function Footer() {
  return (
    <footer className="bg-white">
      <div className="container pt-5">
        <div className="row">
          <div className="col-lg-3">
            <h4 className="pb-3">Travel & Tourism</h4>
            <p>Gravida maecenas mi iaculis non, posuere mattis urna, ac risus sit porta nunc nibh dictum proin leo dolor sed bibendum mi.</p>
          </div>
          <div className="col-lg-3">
            <h4 className="pb-3">Hotel</h4>
            <ul class="list-unstyled">
              <li><Link to={`/`}>About Us</Link></li>
              <li><Link to={`/`}>Reviews</Link></li>
              <li><Link to={`/`}>Get Directions</Link></li>
              <li><Link to={`/`}>Nearby Visits</Link></li>
              <li><Link to={`/`}>Contact Us</Link></li>
              </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="pb-3">Customer Help</h4>
            <ul class="list-unstyled text-dark">
              <li><Link to={`/`}>Guest Support</Link></li>
              <li><Link to={`/`}>Guest Feedback</Link></li>
              <li><Link to={`/`}>FAQs</Link></li>
              <li><Link to={`/`}>Offers</Link></li>
              <li><Link to={`/`}>Location</Link></li>
              </ul>
          </div>
          <div className="col-lg-3">
            <h4 className="pb-3">Contact</h4>
            <p>Travel & Tourism, <br />2855 Nelsonville Rd, Boston, Massachusetts (MA), 40107</p>
            <ul class="list-inline ">
                <li class="list-inline-item "><Link to={'/'}><FaInstagram size={17}/></Link></li>
                <li class="list-inline-item px-2"><Link to={'/'}><FaTripadvisor size={17}/></Link></li>
                <li class="list-inline-item pr-2"><Link to={'/'}><FaFacebook size={17}/></Link></li>
                <li class="list-inline-item"><Link to={'/'}><FaTwitter size={17}/></Link></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
