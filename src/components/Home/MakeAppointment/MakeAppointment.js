import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
                                    <p>Who else wants to get teeth treatment in this summer? For 24 hours, our Doctors provides 15% off all Dental care treatment. Your lovely teeth awaits you</p>
                                    <button style={{backgroundColor:'#22d1ee'}} className="btn btn-info text-white">Learn More <FontAwesomeIcon icon={faArrowRight} /></button>
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