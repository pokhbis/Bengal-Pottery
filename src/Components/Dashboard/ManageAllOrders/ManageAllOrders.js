import React from "react";
import { useState, useEffect } from "react";
import { Table } from "react-bootstrap";


const ManageAllOrders = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch("https://hidden-mountain-59218.herokuapp.com/orderedProducts")
            .then((res) => res.json())
            .then((data) => setOrders(data));
    }, []);

    console.log(orders);
    return (
        <div>
            <div className="container">
                <h1>Manage All Orders </h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Client's Name</th>
                            <th>Description</th>
                            <th>Image Link</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    {orders?.map((pd, index) => (
                        <tbody>
                            <tr>
                                <td>{index}</td>
                                <td>{pd.name}</td>
                                <td>{pd.description}</td>
                                <td>{pd.image}</td>
                                <td>{pd.status}</td>
                                <button className="btn blog-btn p-2">Delete</button>
                            </tr>
                        </tbody>
                    ))}
                </Table>
            </div>
        </div>
    );
};

export default ManageAllOrders;