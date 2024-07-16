import React from "react";

export default function Skills() {
    return(
        <>
        <div className="container-fluid">
                <div id="skills" className="container py-5 mt-lg-0 mt-3 d-lg-flex d-block flex-column justify-content-center">
                <p className="skillsTitle">MY SPECIALTY</p>
                <h2 className="skillsHeading">MY SKILLS</h2>
                <p className="skillsText">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way.</p>
                    <div className="row">
                        <div className="col-md-6">
                        <h3 className="mb-2 progressTitle">Photoshop</h3>
                        <div id="range1" className="proColor1 progress">
                        <div role="progressbar" className="progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        <h3 className="mb-2 progressTitle">HTML5</h3>
                        <div id="range2" className="proColor2 progress">
                        <div  role="progressbar" className="progress-bar bg-warning" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        <h3 className="mb-2 progressTitle">WordPress</h3>
                        <div id="range3" className="proColor3 progress">
                        <div role="progressbar" className="progress-bar bg-success" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        </div>
                        <div className="col-md-6">
                        <h3 className="mb-2 progressTitle">jQuery</h3>
                        <div id="range4" className="proColor4 progress">
                        <div role="progressbar" className="progress-bar bg-danger" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        <h3 className="mb-2 progressTitle">CSS3</h3>
                        <div id="range5" className="proColor5 progress">
                        <div role="progressbar" className="progress-bar bg-black" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        <h3 className="mb-2 progressTitle">SEO</h3>
                        <div id="range6" className="proColor6 progress">
                        <div role="progressbar" className="progress-bar bg-info" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                        </div>
                        </div>
                        
                    
                    </div>
                </div>
            </div>
    </>
    )
}