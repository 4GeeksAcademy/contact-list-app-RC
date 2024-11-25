import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { Link } from "react-router-dom";

export const Home = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container mt-5">
            <div className="d-flex justify-content-between mb-4">
                <h1>Contact List</h1>
                <Link to="/nuevo-contacto" className="btn btn-primary">
                    Add New Contact
                </Link>
            </div>
            <ul className="list-group">
                {store.contacts.map((contact) => (
                    <li key={contact.id} className="list-group-item d-flex justify-content-between align-items-center">
                        <div>
                            <h5>{contact.full_name}</h5>
                            <p className="mb-1"><i className="fas fa-envelope"></i> {contact.email}</p>
                            <p className="mb-0"><i className="fas fa-phone"></i> {contact.phone}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};
