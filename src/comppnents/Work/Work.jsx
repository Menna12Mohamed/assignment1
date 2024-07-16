import React from "react";

export default function Work() {
    return (
        <>
                <div className="container-fluid w-75">
                        <div id="work" className="container py-5 mt-lg-0 mt-3">
                            <p className="workTitle">MY WORK</p>
                            <h2 className="workHeading">RECENT WORK</h2>
                            <ul className="mb-3 nav nav-tabs" id="controlled-tab-example" role="tablist">
                                <li className="nav-item" role="presentaion">
                                    <button type="button" id="controlled-tab-example-tab-graphic" role="tab" data-rr-ui-event-key="graphic"
                                        aria-controls="controlled-tab-example-tabpane-graphic" aria-selected="true" className="nav-link active">Graphic
                                        Design</button>
                                </li>
                                <li className="nav-item" role="presentaion">
                                    <button type="button" id="controlled-tab-example-tab-graphic" role="tab" data-rr-ui-event-key="graphic"
                                        aria-controls="controlled-tab-example-tabpane-graphic" aria-selected="true" className="nav-link active">
                                        Apps
                                    </button>
                                </li>
                                <li className="nav-item" role="presentaion">
                                    <button type="button" id="controlled-tab-example-tab-graphic" role="tab" data-rr-ui-event-key="graphic"
                                        aria-controls="controlled-tab-example-tabpane-graphic" aria-selected="true" className="nav-link active">
                                        Software
                                    </button>
                                </li>
                            </ul>
                            <div className="container">
                            <div className="tab-content">
                                <div role="tabpanel" id="controlled-tab-example-tabpane-graphic" aria-labelledby="controlled-tab-example-tab-graphic"
                                    className="fade tab-pane active show">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <div  className="project">
                                                <div className="desc pt-4">
                                                    <div className="con">
                                                        <h3><a href="work.html">Work 02</a></h3><span>Animation</span>
                                                        <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i
                                                            className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i>
                                                                49</a></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div  className="project2" >
                                                <div className="desc pt-4">
                                                    <div className="con">
                                                        <h3><a href="work.html">Work 02</a></h3><span>Animation</span>
                                                        <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i
                                                            className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i>
                                                                49</a></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project3" >
                                                <div className="desc pt-4">
                                                    <div className="con">
                                                        <h3><a href="work.html">Work 02</a></h3><span>Animation</span>
                                                        <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i
                                                            className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i>
                                                                49</a></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6">
                                            <div className="project4" >
                                                <div className="desc pt-4">
                                                    <div className="con">
                                                        <h3><a href="work.html">Work 02</a></h3><span>Animation</span>
                                                        <p className="icon"><span><a href="#"><i className="fa-solid fa-share-nodes"></i></a></span><span><a href="#"><i
                                                            className="fa-regular fa-eye"></i> 100</a></span><span><a href="#"><i className="fa-regular fa-heart"></i>
                                                                49</a></span></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button type="button" className="showMoreButton btn btn-primary">Show More</button>
                            </div>
                        </div>
                    
                </div>
        </>
    )
} 
