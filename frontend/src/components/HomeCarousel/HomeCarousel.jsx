import React, { useContext } from 'react';
import { Carousel } from 'antd';
import image1 from "../../assets/image1.jpg"
import image2 from "../../assets/image2.jpg"
import image3 from "../../assets/image3.jpg"
import Context from '../../context/context';

const HomeCarousel = () => {
  const { setting, user, loading } = useContext(Context)

  const images = [
    image1,image2,image3
  ];

  return (
    <Carousel autoplay>
      {setting?.slides?.map((image, index) => (
        <div key={index}>
          <img src={image.url} alt={`Image ${index + 1}`} style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
        </div>
      ))}
    </Carousel>
  );
};

export default HomeCarousel;
