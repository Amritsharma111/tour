import React from 'react'
import RoomsData from '../Data/RoomsData'
import {Link} from 'react-router-dom'
function Rooms() {
  return (
    <>
            <section className="fac stay">
                <div className="container">
                    <h1>Amenities & Facilities</h1>
                    <div className="d-lg-flex justify-content-between align-items-center">
                        <p>If you are looking for a relaxing, refreshing and rejuvenating experience altogether, we offer all of that under one roof.</p>
                        <Link to={`/room/`}>View All</Link>
                    </div>
                    <div className="row">
                        {RoomsData.map(a=>(
                            <div key={a} className='col-lg-6 gap-5 fbox'>
                                <img className='w-sm-100' src={a.img} alt="" />
                                <h3>{a.heading}</h3>
                                <p>{a.para}</p>
                                <span><Link to={`/room/`}>Read More</Link></span>
                            </div>
                        ))}
                    </div>
                </div>
      </section>
    </>
  )
}

export default Rooms
