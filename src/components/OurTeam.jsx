import React from 'react'

import Person1 from "../imgs/1.jpg"
import Person2 from "../imgs/2.jpg"
import Person3 from "../imgs/3.jpg"
import Person4 from "../imgs/4.jpg"

const OurTeam = () => {
  return (
    <section className="team">
      <div className="container">
        <h2>Meet our team <br />
          <span>We make this APP!</span></h2>
        <div className="row">
          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="team-item">
              <img src={Person1} alt="" />
              <h4>Lorem ipsum</h4>
              <p>Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</p>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="team-item">
              <img src={Person2} alt="" />
              <h4>Aenean eget</h4>
              <p>Donec sagittis accumsan diam, eu efficitur nunc lobortis eget. Pellentesque posuere.</p>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="team-item">
              <img src={Person3} alt="" />
              <h4>Nulla felis quam</h4>
              <p>Nulla felis quam, malesuada quis tincidunt vitae, iaculis id massa. Mauris pellentesque.</p>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="team-item">
              <img src={Person4} alt="" />
              <h4>Mauris</h4>
              <p>Pellentesque posuere nisl a posuere mattis. Quisque nuet congue at, variuse.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurTeam