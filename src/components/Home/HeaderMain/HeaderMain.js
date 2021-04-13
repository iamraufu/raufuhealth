import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import girl from '../../../images/girl.png';
import logo from '../../../images/logo.png';

const HeaderMain = () => {
      return (
            <main style={{height:'600px'}} className='row d-flex align-items-center'>
                  <div className="col-md-4 offset-md-1">
                        <img src={logo} alt=""/>
                        <h1 style={{color:'#dee1ec'}} className='text-info'>Your Good Health<br/> Our Responsibility</h1>
                        <p className='text-white pt-3'>Long term good health comes from taking care of yourself long before a crisis develops. Waiting to do something only after the crisis has arrived is commonly called the "band-aid" approach to feeling good.
                        <br/>
                        <br/>
                        The best way to take back responsibility for your health is to throw away the "band-aid" approach and introduce some prevention. By not relying upon short term fixes for long-term problems, you feel better and are able to enjoy life more. It's your body; it's your health, demand the very best for yourself.
                        </p>
                        <button style={{backgroundColor:'#22d1ee'}} className='btn btn-info '>Book an Appointment Now <FontAwesomeIcon icon={faArrowRight} /></button>
                  </div>
                  <div className="col-md-6">
                        <img src={girl} alt="" className="img-fluid"/>
                  </div>
            </main>
      );
};

export default HeaderMain;