import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Doctor = (props) => {
      const {img,name,phone} = props.doctor;
      return (
            <div className="col-md-4 text-center">
                  <img className="img-fluid mb-3" src={img} alt=""/>
                  <div style={{margin:'auto'}} className="">

                  <h4>{name}</h4>
                  <p><FontAwesomeIcon className='text-brand' icon={faPhoneAlt} /> {phone}</p>
                  </div>
            </div>
      );
};

export default Doctor;