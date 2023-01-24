import React from 'react'
import Nav from './Nav'

const Header = () => {
    return (
        <div>
            <div className="top-line"></div>

            <main className="main">
                <div className="container">

                    <Nav />

                    <div className="main-content">
                        <h1>
                            Discover the wold of awesome <br />
                            <span>free PSD templates</span>
                        </h1>
                        <form action="#">
                            <div className="row">
                                <div className="col-lg-3 offset-lg-2 col-md-4 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                                    <input type="text" required placeholder="Email" />
                                </div>
                                <div className="col-lg-3 offset-lg-0 col-md-4 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                                    <input type="text" required placeholder="Password" />
                                </div>
                                <div className="col-lg-2 offset-lg-0 col-md-4 offset-md-0 col-sm-8 offset-sm-2 col-10 offset-1">
                                    <input type="submit" value="Register" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Header