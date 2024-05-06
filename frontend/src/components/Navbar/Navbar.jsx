import { Button } from 'antd';
import { MessageOutlined, MailOutlined, EnvironmentOutlined, PhoneOutlined } from '@ant-design/icons';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../context/context';

const Navbar = () => {
    const { setting, user, loading } = useContext(Context)

    return (
        <>
            <div className="d-flex justify-content-between align-items-center p-2" >
               {loading?<span>Loading...</span>: <div className='d-flex gap-4'>
                    <strong><EnvironmentOutlined /> {setting.location}</strong>
                    <strong><PhoneOutlined /> {setting.phone}</strong>
                </div>}
                <div>
                    <Button type='link' icon={<MessageOutlined />}>SEND SMS</Button>
                    <Button type='link' icon={<MailOutlined />}>SEND EMAIL</Button>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-light" style={{position:"sticky",top:0,zIndex:100}}>
                <div className="container-fluid">
                    {/* Top section */}
                    {/* Navbar brand and toggler */}
                    <h1 className="navbar-brand m-0 p-0" style={{ fontFamily: 'Arial', fontWeight: 'bold', fontSize: '24px', color: '#4287f5' }}>Travel Bliss</h1>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    {/* Navbar links */}
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto"> {/* ms-auto to move items to the right */}
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={"/"}>HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>ABOUT US</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={"/"}>PRICING</Link>
                            </li>
                            <li className="nav-item">
                               {user?<>< strong style={{color:"blue"}} className="nav-link">{user.name}</strong></>:<Link className="nav-link" to={"/login"}>Login</Link>} 
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
