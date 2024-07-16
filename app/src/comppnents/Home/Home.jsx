import React from 'react'

export default function Home() {
    return (
        <>

            <div className="carousel slide carousel-fade">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active slider1 heroSection d-flex flex-column justify-content-center vh-100 ">
                        <div className="container text-center text-md-start">
                            <h1 className="text-lg-start text-center">Hi!  Im Jackson</h1>
                            <p className="text-lg-start text-center">100% html5 bootstrap templates Made  By <a href="#">Colorlib.com</a>
                            </p><button type="button" className="btn btn-transparent">DOWNLOAD
                                CV <i className="fa-solid fa-download"></i></button>
                        </div>
                    </div>
                    <div className="carousel-item slider2 heroSection d-flex flex-column justify-content-center vh-100 ">
                        <div className="container text-center text-md-start">
                            <h1 className="text-lg-start text-center">I am a Designer</h1>
                            <p className="text-lg-start text-center">100% html5 bootstrap templates Made  By <a href="#">Colorlib.com</a>
                            </p><button type="button" className="btn btn-transparent">VIEW
                                PORTFOLIO <i className="fa-solid fa-briefcase"></i></button>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

        </>
    )
}
