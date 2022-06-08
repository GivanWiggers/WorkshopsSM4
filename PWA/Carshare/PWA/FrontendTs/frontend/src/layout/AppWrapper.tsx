import React from "react";
import Navbar from "./Navbar/Navbar";
import { Routes, useLocation } from "react-router-dom";

interface AppWrapper_Children {
    children: React.ReactNode;
}

export default function AppWrapper(props: AppWrapper_Children) {
    const { pathname } = useLocation();
    if (pathname === "/safetyscreen" || pathname === "/authscreen") {
        return (
            <React.Fragment>
                <div id="page-container">
                    <div id="content-wrapper">{props.children}</div>
                </div>
            </React.Fragment>
        );
    } else {
        return (
            <React.Fragment>
                <div id="page-container">
                    <div id="content-wrapper">{props.children}</div>

                    <Navbar />
                </div>
            </React.Fragment>
        );
    }
}
