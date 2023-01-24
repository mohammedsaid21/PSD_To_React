import React from 'react'
import Symu from "../imgs/symu.png"
import { FaPrint } from "react-icons/fa"
import { FaTv } from "react-icons/fa"
import { AiFillMobile } from "react-icons/ai"
import { FaPencilAlt } from "react-icons/fa"

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="features-item">
              <h3 className="features-title-1"><span>
                <FaPrint />
              </span>Print services</h3>
              <p>Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla.</p>
            </div>
            <div className="features-item">
              <h3 className="features-title-2"><span>
                <FaTv />
              </span>
                IT services
              </h3>
              <p>Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla.</p>
            </div>
          </div>
          <div className="col-lg-4 dn">
            <div className="features-phone">
              <img src={Symu} alt="phone" />
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="features-item">
              <h3 className="features-title-3"><span>
                <AiFillMobile />
              </span>Mobile devices</h3>
              <p>Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla.</p>
            </div>
            <div className="features-item">
              <h3 className="features-title-4"><span>
                <FaPencilAlt />
              </span>Print services</h3>
              <p>Fusce eu tortor tristique, varius sem sollicitudin, viverra ante. Curabitur id metus velit. Suspendisse in justo nulla.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features