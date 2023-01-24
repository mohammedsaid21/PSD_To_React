import React from 'react'
import { FaComments } from "react-icons/fa"
import { BsFillSuitHeartFill } from "react-icons/bs"
import { FaLemon } from "react-icons/fa"
import { FaLaptop } from "react-icons/fa"
const Homework = () => {
  return (
    <section className="howworks">
      <div className="container">
        <h2>Meet our team <br />
          <span>We make this APP!</span>
        </h2>
        <div className="row">

          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="howworks-item">
              <span>
                <FaComments />
              </span>
              <h4>Lorem ipsum</h4>
              <p>Cras vel eleifend nisl, ac efficitur purus. Vestibulum vestibulum aliquam lectusmattis ac.</p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="howworks-item">
              <span>
                <BsFillSuitHeartFill />
              </span>
              <h4>Aenean eget</h4>
              <p>Donec sagittis accumsan diam, eu efficitur nunc lobortis eget. Pellentesque posuere.</p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="howworks-item">
              <span>
                <FaLemon />
              </span>
              <h4>Nulla felis quam</h4>
              <p>Nulla felis quam, malesuada quis tincidunt vitae, iaculis id massa. Mauris pellentesque.</p>
            </div>
          </div>

          <div className="col-lg-3 offset-lg-0 col-md-6 offset-md-0 col-sm-8 offset-sm-2">
            <div className="howworks-item">
              <span>
                  <FaLaptop />
              </span>
              <h4>Mauris</h4>
              <p>Pellentesque posuere nisl a posuere mattis. Quisque nuet congue at, variuse.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Homework