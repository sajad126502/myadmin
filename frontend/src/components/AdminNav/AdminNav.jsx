
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Modal, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';


const AdminNav = () => {
    const [open, setOpen] = useState(false);
    const [action, setAction] = useState("")
    const [confirmLoading, setConfirmLoading] = useState(false);
    const [modalText, setModalText] = useState('Content of the modal');
    const showModal = () => {
        setOpen(true);
    };

    const handleOk = () => {
        setModalText('The modal will be closed after two seconds');
        setConfirmLoading(true);
        setTimeout(() => {
            setOpen(false);
            setConfirmLoading(false);
        }, 2000);
    };

    const handleCancel = () => {
        console.log('Clicked cancel button');
        setAction("")
    };
    useEffect(() => {
        if(action){

            setOpen(true)
        }
        else{
            setOpen(false)
        }
    }, [action])

    return (
        <>
            <Modal
                title="Title"
                open={open}
                onOk={handleOk}
                confirmLoading={confirmLoading}
                onCancel={handleCancel}
            >
                <h1>model</h1>
                
            </Modal>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Admin Panel</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="/dashboard">Dashboard</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/users">Users</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/trips">Trips</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/orders">Orders</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Dropdown menu={{
                                    items: [
                                        {
                                            label: (
                                                <Button onClick={() =>setAction("images")} type='link'>Change Slide Images</Button>
                                            ),
                                            key: '0',
                                        },
                                        {
                                            label: (

                                                <Button type='link' onClick={() =>setAction("details")}>Change Top Details</Button>

                                            ),
                                            key: '1',
                                        }


                                    ]
                                }}>
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            Settings
                                            <DownOutlined />
                                        </Space>
                                    </a>
                                </Dropdown>

                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default AdminNav;
