import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./Modal.css";

function Modal(props) {
    var [data, setData] = useState({
        id: "",
        name: "",
        email: "",
        address: {
            city: "",
        },
        company: {
            name: "",
        },
    });

    var nameRegex = "^[A-Za-z][A-Za-z0-9_]{7,29}$";
   
    const onChangeHandler = (e) => {
        if (e.target.name === "city") {
            setData({
                ...data,    
                ["address"]: {
                    [e.target.name]: e.target.value,
                },
            });
        } else if (e.target.name === "company") {
            setData({
                ...data,
                ["company"]: {
                    ["name"]: e.target.value,
                },
            });
        } else {
            setData({ ...data, [e.target.name]: e.target.value });
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();

        axios
            .post("http://localhost:3002/employee", data)
            .then(props.getData())
            .catch((error) => console.log(error)); 
        
            props.handleModal();
    };

    return (
        <div className="modal-container">
            <div className="modal-backdrop" onClick={props.handleModal}></div>
            <div className="modal-box">
                <div className="form-container">
                    <form onSubmit={submitHandler}>
                        <div class="mb-3 w-25">
                            <label class="form-label">ID</label>
                            <input
                                type="number"
                                min="0"
                                class="form-control"
                                name="id"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Name</label>
                            <input
                                class="form-control"
                                name="name"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-3">
                            <label for="exampleInputEmail1" class="form-label">
                                Email address
                            </label>
                            <input
                                type="email"
                                name="email"
                                onChange={onChangeHandler}
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                            />
                            <div id="emailHelp" class="form-text">
                                We'll never share your email with anyone else.
                            </div>
                        </div>
                        <div class="mb-3">
                            <label class="form-label">City</label>
                            <input
                                class="form-control"
                                name="city"
                                onChange={onChangeHandler}
                            />
                        </div>
                        <div class="mb-3">
                            <label class="form-label">Company</label>
                            <input
                                class="form-control"
                                name="company"
                                onChange={onChangeHandler}
                            />
                        </div>
                            <button
                                onClick={submitHandler}
                                class="btn btn-primary"
                            >
                                Submit
                            </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Modal;
