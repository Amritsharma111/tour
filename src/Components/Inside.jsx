import React from 'react'
import pic1 from '../assets/gallery-1.jpg'
import pic2 from '../assets/gallery-2.jpg'
import pic3 from '../assets/gallery-3.jpg'
import pic4 from '../assets/gallery-4.jpg'
import pic5 from '../assets/gallery-5.jpg'
import pic6 from '../assets/gallery-6jpg.jpg'

function Inside() {
  return (
    <>
      <section className="inside text-center bg-white pt-5">
        <h1>Our Inside Pictures</h1>
        <p className="py-3">Take a look at some pretty pictures captured in and around our premises.</p>
        <div className="container">
            <div className="row">
                <div className="col-lg-4">
                    <img className="w-100  pt-2" src={pic1} alt="" />
                    <img className='w-100 pt-4 ' src={pic2} alt="" />
                </div>
                <div className="col-lg-8">
                    <img className="w-100  pt-2" src={pic3} alt="" />
                </div>
                <div className="row">
                    <div className="col-lg-8">
                        <img className="w-100 pt-3 " src={pic4} alt="" />
                    </div>
                    <div className="col-lg-4">
                    <img className="w-100  pt-3" src={pic5} alt="" />
                    <img className='w-100 pt-4 ' src={pic6} alt="" />
                </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Inside
