import React from "react";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

export default function MasterLayout() {
    return (
        <>
            <NavBar />
            <div className="container-fluid">
                <div className="row">
                    <div className="p-0 col-md-2">
                     
                    </div>
                    <div className="position-relative p-0 containerwidth col-md-10">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}