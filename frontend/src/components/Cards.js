
import React from 'react'
import CardItem from './CardItem';
import './Cards.css';

function Cards() {
    return (
        <div className='cards'>
            <h1>Checkout these EPIC Destinations</h1>
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        {/* 刚刚好像是这里错了 (是那个wrap的css出问题了，调整了一下突然又好了)
                        又或者是cardItem的问题 应该写成CardItem? */}
                        <CardItem
                            src="images/img-9.jpg" 
                            text="Explore the hidden waterfall deep inside the Amazon Jungle"
                            label='Adventure'
                            path='/services' 
                        />
                        <CardItem
                            src='images/img-2.jpg'
                            text='Travel through the Islands of Bali in a Private Cruise'
                            label='Luxury'
                            path='/services'
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

