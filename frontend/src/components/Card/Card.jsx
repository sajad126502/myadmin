import React from 'react';
import { Link } from 'react-router-dom';
import "./Card.css"
// props will be coming from Cards.js
function Card(props) {
  return (
    <>
      <li className='cards__item'>
        <Link to={props.path} className='cards__item__link'>
          <figure data-category={"Rs "+props.price} className='cards__item__pic-wrap'>
            <img src={`${props.src}`} alt="Travel destination" className='cards__item__img'></img>
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__title'>{props.title}</h5>
            <h5 className='cards__item__des'>{props.description}</h5>

          </div>
        </Link>
      </li>
    </>
  )
}

export default Card;
