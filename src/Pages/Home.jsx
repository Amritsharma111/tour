import React from 'react'
import {Link} from 'react-router-dom'
import Experience from '../Components/Experience'
import Facilities from '../Components/Facilities'
import Inside from '../Components/Inside'
import Guests from '../Components/Guests'
import Book from '../Components/Book'
function Home() {
  return (
    <>
      <section className="home ">
        <div className="rang">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1 className='text-light'>The Perfect Hotel in Mykonos</h1>
                <p>If you are looking for a perfect holiday experience with memories to cherish you are at the right place. Let’s plan a reasonable stay for you.</p>
                <Link to={`/`}>BOOK YOUR STAY NOW</Link>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      <Experience/>
      <Facilities/>
      <Inside/>
      <Guests/>
      <Book/>
    </>
  )
}

export default Home
