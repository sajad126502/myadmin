import React from 'react'
import "./CardListWrapper.css"
export default function CardListWrapper({ children }) {
    return (
        <div className='cards__container'>
            <div className='cards__wrapper'>
                <ul className='cards__items d-flex flex-wrap gap-md-3 gap-2'>

                {children}
                </ul>
            </div>
        </div>
    )
}
