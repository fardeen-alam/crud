import axios from "axios";
import React, { useState } from "react";
import "./Admin.css";

function Admin(props) {
    var [modal, showModal] = useState(false);
    var [id, setID] = useState();
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
            .put(`http://localhost:3002/employee/${id}`, data)
            .then(props.getData())
            .catch((error) => console.log(error));

        showModal((prevState) => !prevState);
    };

    const editHandler = (id) => {
        showModal((prevState) => !prevState);
        if (!modal) {
            const newData = props.data.filter((user) => {
                return user.id == id;
            });
            setData({
                id: newData[0].id,
                name: newData[0].name,
                email: newData[0].email,
                address: {
                    city: newData[0].address.city,
                },
                company: {
                    name: newData[0].company.name,
                },
            });
            setID(id);
        }
    };

    const deleteHandler = async (id) => {
        await axios
            .delete(`http://localhost:3004/employee/${id}`)
            .then(props.getData())
            .catch((e) => console.log(e));
    };

    return (
        <div className="admin-container mouse-cursor-gradient-tracking">
            <div className="table-wrapper">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Name</th>
                            <th scope="col" className="w-25">
                                DataManip
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.data?.map((user) => (
                            <tr key={user.id}>
                                <td>{user.id}</td>
                                <td>{user.name}</td>
                                <td>
                                    <div className="btn-container">
                                        <button
                                            className="btn btn-success"
                                            onClick={() => {
                                                editHandler(user.id);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn btn-danger"
                                            onClick={() => {
                                                deleteHandler(user.id);
                                            }}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {modal && (
                <div className="modal-container">
                    <div className="modal-backdrop" onClick={editHandler}></div>
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
                                        value={data.id}
                                        // onChange={onChangeHandler}
                                        disabled
                                    />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Name</label>
                                    <input
                                        class="form-control"
                                        name="name"
                                        value={data.name}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label
                                        for="exampleInputEmail1"
                                        class="form-label"
                                    >
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        onChange={onChangeHandler}
                                        class="form-control"
                                        id="exampleInputEmail1"
                                        value={data.email}
                                        aria-describedby="emailHelp"
                                    />
                                    <div id="emailHelp" class="form-text">
                                        We'll never share your email with anyone
                                        else.
                                    </div>
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">City</label>
                                    <input
                                        class="form-control"
                                        name="city"
                                        value={data.address.city}
                                        onChange={onChangeHandler}
                                    />
                                </div>
                                <div class="mb-3">
                                    <label class="form-label">Company</label>
                                    <input
                                        class="form-control"
                                        name="company"
                                        value={data.company.name}
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
            )}
        </div>
    );
}

export default Admin;
