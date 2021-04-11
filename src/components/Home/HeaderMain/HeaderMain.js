import React from 'react';
import girl from '../../../images/girl.png';

const HeaderMain = () => {
      return (
            <main className='row'>
                  <div className="col-md-4 offset-md-1">
                        <h1>Your Health <br/> Our Responsibility</h1>
                        <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo aliquam cum iste rem nobis est beatae molestias quis non odio!</p>
                        <button className='btn btn-primary'>Book an Appointment Now</button>
                  </div>
                  <div className="col-md-6">
                        <img src={girl} alt="" className="img-fluid"/>
                  </div>
            </main>
      );
};

export default HeaderMain;