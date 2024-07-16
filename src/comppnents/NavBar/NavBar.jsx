import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
    return (
        <>
            <nav className="mb-3 position-fixed top-0 start-0 end-0 d-block d-lg-none navbar navbar-light">
                <div className="container-fluid">
                    <button className="btn " type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="staticBackdropLabel"></h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>

                                <div className="_sidebarImage_7gfnp_15"></div>
                                <h1 className="_sidebarUsername_7gfnp_27"><a href="#">Jackson Ford</a></h1>
                                <p className="_sidebarUserinfo_7gfnp_39"><a href="#">UI/UX/Designer</a> in Philippines</p>
                                <ul className="_sidebarList_7gfnp_54">
                                    <li className="_active_7gfnp_89 active "><Link data-nav-section="home " to="home">Home</Link></li>
                                    <li className=""><Link data-nav-section="about" to="about">About</Link></li>
                                    <li className=""><Link data-nav-section="skills" to="skills">Skills</Link></li>
                                    <li className=""><Link data-nav-section="experience" to="experience">Experience</Link></li>
                                    <li className=""><Link data-nav-section="work" to="work">Work</Link></li>
                                </ul>

                            </div>
                        </div>
                    </div>

                </div>
            </nav>
            <div className="_sidebar_7gfnp_4 px-5 py-5 d-none d-lg-block">
                <div className="_sidebarImage_7gfnp_15"></div>
                <h1 className="_sidebarUsername_7gfnp_27"><a href="#">Jackson Ford</a></h1>
                <p className="_sidebarUserinfo_7gfnp_39"><a href="#">UI/UX/Designer</a> in Philippines</p>
                <ul className="_sidebarList_7gfnp_54">
                    <li className="_active_7gfnp_89 active "><Link data-nav-section="home " to="home">Home</Link></li>
                    <li className=""><Link data-nav-section="about" to="about">About</Link></li>
                    <li className=""><Link data-nav-section="skills" to="skills">Skills</Link></li>
                    <li className=""><Link data-nav-section="experience" to="experience">Experience</Link></li>
                    <li className=""><Link data-nav-section="work" to="work">Work</Link></li>
                </ul>
            </div>
        </>
    )
}
