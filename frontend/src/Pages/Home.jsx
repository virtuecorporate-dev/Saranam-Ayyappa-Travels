import React, { Fragment } from 'react'

export default function Home() {
  return (
    <Fragment>
      <div className="container-fluid banner-img">
        <img src="images/Home.jpg" alt="image not found" className='img-fluid'/>
      </div>

      <section>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 search-call">
                <h3>Call Now</h3>
                <i class="fa-solid fa-phone"></i>Call for detail information
            </div>
            <div className="col-lg-8 search">

            </div>
          </div>
        </div>
      </section>
    </Fragment>
  )
}
