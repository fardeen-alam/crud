import React from "react";
import "./Body.css";
import Table from "./Table";
import Accordian from "./Accordian";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";

function Body(props) {
    let btn = document.querySelector(".body-container");
    btn?.addEventListener("mousemove", (e) => {
        let rect = e.target.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        btn.style.setProperty("--x", x + "px");
        btn.style.setProperty("--y", y + "px");
    });

    return (
        <div className="body-container">
            <Accordian
                accordian={props.accordian}
                accordianClick={props.accordianClick}
            />
            <Routes>
                <Route
                    path="/home"
                    element={
                        <Home
                            data={props.data}
                            error={props.error}
                            getData={props.getData}
                        >
                            {" "}
                        </Home>
                    }
                />
                <Route
                    path="/admin"
                    element={
                        <Admin
                            data={props.data}
                            error={props.error}
                            getData={props.getData}
                        ></Admin>
                    }
                />
            </Routes>
        </div>
    );
}

export default Body;
