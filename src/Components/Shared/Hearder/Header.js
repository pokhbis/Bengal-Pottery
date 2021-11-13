import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';
import logo from '../../../Images/Logo/logo.png';
import Button from '@mui/material/Button';
import useAuth from '../../../Hooks/useAuth';
import { Box } from '@mui/system';

const Header = () => {
    const { user, logout } = useAuth();
    return (
        <div className="header-container container">
            <div className="header container">
                <div className="row">
                    <div className="col-md-2 d-flex  flex-row">
                        <div>
                            <img className="logo-img pt-2" src={logo} alt="" />
                        </div>
                        <div>
                            <h2 className="fs-4 fw-bold logo-color mt-3">Bengal Pottery</h2>
                        </div>

                    </div>

                    <div className="col-md-10">

                        <div className="header-items">
                            {/* header navbar  options*/}
                            <ul className="d-flex align-items-end justify-content-end pt-4 me-5">
                                <Link to="/home" style={{
                                    fontSize: '24px',
                                }}><Button className="item">Home</Button></Link>
                                {/* <Link to="/explore" className="item">Explore</Link> */}
                                <Link to="/blog" ><Button className="item">Blog</Button></Link>

                                <Link to="/explore" ><Button className="item">Explore</Button></Link>
                                <Link to="/review" ><Button className="item">Review</Button></Link>
                                {
                                    user?.email ?
                                        <Box>
                                            <Button onClick={logout} className="item">Logout</Button>
                                            <NavLink style={{ color: '' }} to="/dashboard" ><Button className="item">Dashboard</Button></NavLink>
                                        </Box>
                                        :
                                        <NavLink style={{ color: '' }} to="/login" ><Button className="item">Login</Button></NavLink>

                                }

                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Header;