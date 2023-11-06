import React from 'react'
import img1 from "../assets/aboutus1.jpg"
import img2 from "../assets/aboutus2.jpg"
import {Link} from 'react-router-dom'

function Experience() {
  return (
    <>
      <section className="experience">
            <div className="container">
              <div className="row">
                <div className="col-lg-6 pb-4">
                    <img className=" w-100" src={img1} alt="" />
                    <p>Surrounded by scenic beauty and attractive tourist attractions we make it convenient for you to visit all the beautiful places with our inhouse guide. We can also help you arrange transport facilities for an easier commute to nearby places.</p>
                    <Link to={`/`}>Know More</Link>
                </div>
                <div className="col-lg-6 ">
                    <h1 className="pt-md-5 pt-lg-0">Experience the Life of Mykonos City</h1>
                    <p className="bold">We will help you experience Mykonos life in its true sense. From living among the residents to eating authentic delicacies you are sure to walk home with memories and wonderful moments.</p>
                    <img className=" w-100" src={img2} alt="" />
                </div>
              </div>
            </div>
        </section>
    </>
  )
}

export default Experience
