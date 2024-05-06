import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/Navbar/Navbar'
import HomeCarousel from '../../../components/HomeCarousel/HomeCarousel'
import Card from '../../../components/Card/Card'
import image1 from "../../../assets/image1.jpg"
import image2 from "../../../assets/image2.jpg"
import image3 from "../../../assets/image3.jpg"
import image5 from "../../../assets/image5.jpg"

import CardListWrapper from '../../../layout/CardListWrapper/CardListWrapper'
import CustomFooter from '../../../components/CustomFooter/CustomFooter'
import ReviewCard from '../../../components/ReviewCard/ReviewCard'
import { Image } from 'antd'
import About from '../../../components/About/About'
import { getTrips } from '../../../utils/data'
export default function Home() {
    const [trips, setTrips] = useState([])
    const fetchTrips = async () => {
        const { trips } = await getTrips()
        setTrips(trips)
    }
    useEffect(() => {
        fetchTrips()
    }, [])
    return (
        <div>
            <Navbar />
            <HomeCarousel />
            <div className='cards'>
                <h1 style={{ textAlign: 'center', fontSize: '2rem', margin: '2rem 0' }}>
                    Plan Your <span style={{ color: '#1890ff', animation: 'colorChange 2s infinite' }}>Trip!</span>
                </h1>
                <CardListWrapper>
                    {
                        trips?.map((trip) => {
                            return <Card
                                src={trip?.photos[0] || image1}
                                title={trip.title}
                                description={trip.description}
                                price={trip.price}
                                path="/services/activity"
                            ></Card>
                        })
                    }


                </CardListWrapper>
            </div>
            <About />
            <div className='pt-3' style={{ background: '#689dff' }}>

                <h1 style={{ textAlign: 'center', color: "#ffc453", fontSize: '2rem', margin: '1rem 0' }}>
                    Client Reviews!
                </h1>

                <CardListWrapper>

                    <ReviewCard review={{ customerName: "Khan Saqib " }} />
                    <ReviewCard review={{ customerName: "Amir Majeed" }} />
                    <ReviewCard review={{ customerName: "Furkan Sidiq" }} />
                    <ReviewCard review={{ customerName: "Danish Naikoo" }} />
                </CardListWrapper>
            </div>
            <CustomFooter />
        </div>
    )
}
