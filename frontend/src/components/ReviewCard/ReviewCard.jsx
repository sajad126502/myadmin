import React from 'react';
import { Card, Rate, Avatar } from 'antd';
import { UserOutlined, StarOutlined } from '@ant-design/icons';

const ReviewCard = ({review}) => {
    return (
        <Card style={{ width: 300, margin: '20px auto' }}>
            <h5><Avatar icon={<UserOutlined />} /> {review.customerName}</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.</p>
            <Rate disabled defaultValue={4} character={<StarOutlined />} />
        </Card>
    );
};

export default ReviewCard;
