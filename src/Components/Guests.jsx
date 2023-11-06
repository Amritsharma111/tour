import React from 'react'
import GuestsData from '../Data/GuestsData'
import {BsStarFill} from 'react-icons/bs'
import {BsStarHalf} from 'react-icons/bs'
function Guests() {
  return (
    <>
      <section className="guest bg-white text-center pt-5">
            <h1 className='pt-2'>What Our Guests Say</h1>
            <p className="py-2">We take pride in serving our guests with the best experience. Read what they say.</p>
            <div className="container">
                <div className="row">
                    {GuestsData.map(a=>(
                        <div key={a.img} className="col-lg-6 text-start pt-3 gbox g-5 ">
                            <BsStarFill size={15}/> <BsStarFill size={15}/> <BsStarFill size={15}/> <BsStarFill size={15}/> <BsStarHalf size={15}/>
                            <p className="pt-2 fw-bold">{a.paragraph}</p>
                            <div className="row">
                                <div className="col-1">
                                    <img className='w-100' src={a.img} alt="" />
                                </div>
                                <div className="col-8">
                                    <p className='fw-bold nm pt-lg-1 pt-2'>{a.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
      </section>
    </>
  )
}

export default Guests
