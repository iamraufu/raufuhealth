import React from 'react';
import doctor from '../../../images/doctor.png';
import './MakeAppointment.css'

const MakeAppointment = () => {
      return (
            <section className='make-appointment'>
                  <div className="container">
                        <div className="row">
                              <div style={{position:'absolute' }} className="col-md-7 text-white py-5">
                                    <h5 style={{ color: '#22d1ee'}}>APPOINTMENT</h5>
                                    <h1 className='my-4'>Enjoy 15% Discount Book Now</h1>
                                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi, ab sequi facilis nulla repellat dolore? Atque, amet aut. Dignissimos, illo.</p>
                                    <button style={{backgroundColor:'#22d1ee'}} className="btn btn-primary">Learn More</button>
                              </div>
                              <div className="col-md-5 d-none d-md-block">
                                    <img src={doctor} alt=""/>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default MakeAppointment;