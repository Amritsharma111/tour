import React from 'react'
import {BsFillTelephoneFill} from 'react-icons/bs'
import {Link} from 'react-router-dom'

function Book() {
  return (
    <>
      <section className="book text-center text-white">
        <div className="rang">
            <h1 className="pt-3">Plan an Unforgettable Experience in Mykonos Today!</h1>
            <p className="pt-4">We can help you fit your stay and experience within your allotted budget.</p>
            <p className="fw-bold pt-3">BOOK YOUR STAY NOW</p>
            <Link className="text-white" to='callto:+1-123 456 7890'><h1><BsFillTelephoneFill/>+1-123 456 7890</h1></Link>
        </div>
       </section>
    </>
  )
}

export default Book
