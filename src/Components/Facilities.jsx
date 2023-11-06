import React from 'react'
import {Link} from 'react-router-dom'
import FacilitiesData from '../Data/FacilitiesData'
function Facilities() {
  return (
    <>
      <section className="fac">
        <div className="container">
            <h1>Amenities & Facilities</h1>
            <div className="d-lg-flex justify-content-between align-items-center">
                <p>If you are looking for a relaxing, refreshing and rejuvenating experience altogether, we offer all of that under one roof.</p>
                <Link to={`/room/`}>View All</Link>
            </div>
            <div className="row">
                {FacilitiesData.map(a=>(
                    <div key={a.img} className='col-lg-4 gap-5 fbox'>
                        <img className='w-100' src={a.img} alt="" />
                        <h3>{a.heading}</h3>
                        <p>{a.paragraph}</p>
                        <span><Link to={`/room/`}>Read More</Link></span>
                    </div>
                ))}
            </div>
        </div>
      </section>
    </>
  )
}

export default Facilities
