import React from 'react'
import './Home.css';
import Home from '../Home'
import Home3 from '../Home'
import Browse from '../Browse/Browse'
import Brand1 from '../Assets/bariere logos/Group-1.png'
import Brand2 from '../Assets/bariere logos/Group.png'
import Brand3 from '../Assets/bariere logos//gucci-logo-1 1.png'
import Brand4 from '../Assets/bariere logos/zara-logo-1 1.png'
import footer from '../Assets/image.png'
import Footer from '../Footer/Footer';
const Home2 = () => {
   
  return (
    <div className='home'>
      
        <div className="home-left">
            <h2>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
            <div>
                <div className="hand-hand-icon">
                    <p1>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p1>
              
                </div>

                <div className="home-btn">
                    <button className="btn">Shop Now</button>

                </div>
            </div>


            <div className="number-section">
                <div className="section1">
                    <h1>200+</h1>
                    <p>International Brands</p>
                </div>
                <div className="section2">
                    <h1>2,000+</h1>
                    <p>High-Quality Products</p>
                </div>
                <div className="section3">
                    <h1>30,000+</h1>
                    <p>Happy Customers</p>
                </div>



            </div>

            <section className='barriere'>
              
              <img src={Brand1} alt='group1' className='gap' />
              <img src={Brand2} alt='group1' className='gap'/>
              <img src={Brand3} alt='group1'className='gap' />
              <img src={Brand4} alt='group1' className='gap' />
              
            </section>

        </div>

        <div className='newArriv'>
          <h1>NEW ARRIVALS</h1>
        </div>
        
        <Home />

        <div className='topSell'>
          <h1>TOP SELLING</h1>
        </div>

        <Home3 />

        <Browse />

       <Footer />
 </div>
 
  )
}

export default Home2
