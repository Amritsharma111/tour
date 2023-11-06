import React from 'react'
import Book from '../Components/Book'
import Rooms from '../Components/Rooms'


function Room() {
  return (
    <div>
      <section className="rheader">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <h1>Rooms & Accommodation</h1>
              <p className="pt-2">If you are looking for a home away from home, just walk in here. You can get both, an incredible and relaxing experience while you are on a holiday. Take a closer look into the rooms we offer and pick the one for you.</p>
            </div>
          </div>
        </div>
      </section>
      <Rooms/>
      <Book/> 
      
    </div>
  )
}

export default Room
