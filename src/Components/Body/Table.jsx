import Modal from "./Modal";
import React from "react";
import { useState } from "react";
import "./Table.css";

function Table(props) {
    var [modal, setModal] = useState(false);

    const handleModal = () => {
        setModal((prevState) => (!prevState));
    }

    return (
        <div className="table-container">
            <div className="add-btn">
                <button type="button" className="btn btn-success btn-edit" onClick={handleModal}>
                    <i className="fa-solid fa-plus"></i>
                </button>
            </div>

            {modal && <Modal handleModal = {handleModal} getData={props.getData}/>}

            <div className="table-wrapper">
                {props.error === "" ? (
                    <table className="table table-dark table-striped">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">City</th>
                                <th scope="col">Company</th>
                            </tr>
                        </thead>
                        <tbody className="table-group-divider">
                            {props.data?.map((user) => (
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.address.city}</td>
                                    <td>{user.company.name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <div>props.error</div>
                )}
            </div>
        </div>
    );
}

export default Table;
