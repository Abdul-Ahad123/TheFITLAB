import React from 'react';
import './Cards.css';
import CardItem from './CardItem';
import img1 from '../../images/class/strength-train.webp';
import img2 from '../../images/class/self-defenc.jpg';
import img3 from '../../images/class/advance-gym.jpg';
import img4 from '../../images/class/cardio-train.jpg';
import img5 from '../../images/class/strength-training.jpg';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

function Cards() {
  return (
    <div>
      <Navbar/>
    <div className='card'>
      <h1>Our Classes</h1>
      <div className='container'>
        <div className='wrapper'>
          <div className='cardsitems'>
            <CardItem
              src={img1}
              label='PSYCHO TRAINING'
              path='/register'
            />
            <CardItem
              src={img2}
              label='SELF DEFENSE'
              path='/register'
            />
            <CardItem
              src={img3}
              label='ADVANCE GYM'
              path='/register'
            />
            <CardItem
              src={img4}
              label='CARDIO TRAINING'
              path='/register'
            />
            <CardItem
              src={img5}
              label='STRENGTH TRAINING'
              path='/register'
            />
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </div>
  );
}

export default Cards;
