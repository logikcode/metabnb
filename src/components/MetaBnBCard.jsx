import React from 'react'
import { MetaCard, ImageContainer } from './MetaBnBCardStyled';
import star from ".././assets/icons/StarIcon.svg"

function MetaBnBCard(props) {
  return (
    
        <MetaCard>
            <ImageContainer>
                <img src={props.image} className="bnb-image" alt="" />
            </ImageContainer>
           
            <div className='bnb-details'>
                <div className="bnb-name">
                    <span className="info">Desert king</span>
                    <span className='span2'>1MBT night</span>
                </div>
                <div className="bnb-availablity">
                    <span className="info">2345km away</span>
                    <span className="info">availabilty for 2weeks stay</span>
                </div>
               
            </div>
            <div className='card-stars'>
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
            </div>
        </MetaCard>
   
   
  )
}

export default MetaBnBCard