import React from 'react'
import './Browse.css'
import Casual from '../Assets/Casual.png';
import Formal from '../Assets/Formal.png';
import Party from '../Assets/Party.png';
import Gym from '../Assets/Gym.png';

const Browse = () => {
  return (
    <div className="Browse">
        <div className="Browse-left">
            <h1>BROWSE BY DRESS STYLE</h1>
            <img className="Causal" src={Casual} alt="Casual"/>
            <img className="Formal" src={Formal} alt="Formal"/>
            <img className="Party" src={Party} alt="Party"/>
            <img className="Gym" src={Gym} alt="Gym"/>

        </div>

    </div>
  )
}

export default Browse