import React from 'react'
import MacBook from "../imgs/MacBook.png"
const DownloadSection = () => {
  return (
    <section className="offer">
      <div className="offer-description">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <h4>This is awesome APP</h4>
              <p>Nam accumsan nunc sit amet elementum sollicitudin. Integer vel lacus eget tortor lobortis tincidunt sed eu dolor. Phasellus cursus augue ac pulvinar cursus.</p>
            </div>
            <div className="col-lg-7 col-md-0"></div>
          </div>
        </div>
      </div>

      <div className="offer-download">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-12">
              <h4>This is awesome APP</h4>
              <p>Nam accumsan nunc sit amet elementum sollicitudin. Integer vel lacus eget tortor lobortis tincidunt sed eu dolor. Phasellus cursus augue ac pulvinar cursus.</p>
              <p>Quisque ut erat ornare, feugiat turpis a, fringilla felis. Nulla molestie lorem et orci sagittis, et accumsan ex porta.</p>
              <button>Download</button>
            </div>
            <div className="col-lg-7 col-md-0"></div>
          </div>
        </div>
      </div>
      <img className="img-lap" src={MacBook} alt="" />
    </section>
  )
}

export default DownloadSection