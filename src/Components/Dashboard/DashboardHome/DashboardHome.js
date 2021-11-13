import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import Button from '@restart/ui/esm/Button';
import './DashboardHome.css';


const DashboardHome = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);
    const [control, setControl] = useState(false);

    useEffect(() => {
        const url = `https://hidden-mountain-59218.herokuapp.com/orderedProducts?email=${user.email}`
        fetch(url)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`https://hidden-mountain-59218.herokuapp.com/deleteProduct/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    setControl(!control);
                }
                console.log(data)
            })
    };



    return (
        <div>
            <h3 className="dashboard-header">Total Order: {orders.length}</h3>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell className="dashboard-title"> User/Client Email</TableCell>
                            {/* <TableCell className="dashboard-title" align="right">Product Name</TableCell> */}
                            {/* <TableCell className="dashboard-title" align="right">Item Name</TableCell> */}
                            <TableCell className="dashboard-title" align="right">Product Price</TableCell>
                            <TableCell className="dashboard-title" align="right">Action</TableCell>
                            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders.map((row) => (
                            <TableRow
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {/* <TableCell className="dashboard-content" component="th" scope="row">
                                    {row.name}
                                </TableCell> */}
                                <TableCell className="dashboard-content" component="th" scope="row">
                                    {row.email}
                                </TableCell>
                                {/* <TableCell className="dashboard-content" align="right"> {row.name}</TableCell> */}
                                <TableCell className="dashboard-content" align="right">$ {row.price}</TableCell>
                                <TableCell className="dashboard-content" align="right"><button onClick={() => handleDelete(row?._id)} className="blog-btn" sx={{}} variant="contained" type="submit">Delete</button><button className="blog-btn-update" sx={{}} variant="contained" type="submit">Update</button></TableCell>

                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default DashboardHome;