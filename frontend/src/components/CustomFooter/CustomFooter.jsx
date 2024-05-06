import React from 'react';
import { Layout, Row, Col, Typography, Input, Button } from 'antd';
import "./CustomFooter.css"

const { Footer } = Layout;
const { Title, Text, Link } = Typography;
const CustomFooter = () => {
    return (
        <Footer style={{ background: '#f0f2f5' }}>
            <Row justify="space-around" align="top">
                <Col span={6}>
                    <Title level={5}>General Links</Title>
                    <ul className="footer-links">
                        <li><Link href="#">Home</Link></li>
                        <li><Link href="#">About Us</Link></li>
                        <li><Link href="#">Tour Packages</Link></li>
                        <li><Link href="#">Career with Us</Link></li>
                        <li><Link href="#">Testimonials</Link></li>
                        <li><Link href="#">Contact Us</Link></li>
                        <li><Link href="#">Site Map</Link></li>
                        <li><Link href="#">RSS</Link></li>
                    </ul>
                </Col>
                <Col span={6}>
                    <Title level={5}>Our Services</Title>
                    <ul className="footer-links">
                        <li><Link href="#">Tour Operators</Link></li>
                        <li><Link href="#">Car & Coach Rental</Link></li>
                        <li><Link href="#">Flight Booking</Link></li>
                        <li><Link href="#">Railway Ticket Booking</Link></li>
                        <li><Link href="#">Passport & Visa Services</Link></li>
                        <li><Link href="#">Travel Insurance Services</Link></li>
                        <li><Link href="#">Hotel Booking</Link></li>
                    </ul>
                </Col>
                <Col span={10}>
                    <Title level={5}>News Letter</Title>
                    <div className="footer-newsletter">
                        <Input placeholder="Your email" className="newsletter-input" />
                        <Button type="primary" className="newsletter-button">Subscribe</Button>
                    </div>
                </Col>
            </Row>
        </Footer>
    );
};

export default CustomFooter;
