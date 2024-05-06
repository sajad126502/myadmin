import { Image } from 'antd'
import React from 'react'
import image5 from "../../assets/image5.jpg"
import "./About.css"
export default function About() {
    return (
        <div className="about-section">
            <div className="image-container">
                <Image
                className='about-img'
                    src={image5}
                    alt="Travel Image"
                    preview={false}
                />
            </div>
            <div className="content">
                <h2>About Explore Era Tour Travel</h2>
                <p>
                    Explore Era Tour Travel is a tour & travel company based in Tangmarg (Jammu & Kashmir). We are dedicated to providing tourists with an extraordinary experience in Jammu & Kashmir and Ladakh.
                </p>
                <p>
                    We are specialists in crafting itineraries that match the travelers’ specific interests and tastes. With our in-depth local knowledge and attention to detail, you can be sure that your holiday in Jammu & Kashmir or Ladakh will be perfectly arranged, enabling you to create lasting memories.
                </p>
                <p>
                    We have tour managers who are experienced and trained to assist you in every way possible. All our budget-friendly holiday/tour packages are designed expertly to ensure our guests enjoy their vacation in Jammu & Kashmir or Ladakh.
                </p>
                <a href="#read-more">Read more</a>
            </div>
        </div>
    )
}
