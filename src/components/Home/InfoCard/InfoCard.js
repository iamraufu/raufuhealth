import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const InfoCard = ({ info }) => {

      return (
            <div className='col-md-4 text-white info-card'>
                  <div className={`d-flex justify-content-center info-container info-${info.background} rounded`}>
                        <div className="ms-3">
                              <FontAwesomeIcon className='info-icon' icon={info.icon} />
                        </div>
                        <div className="ms-3">
                              <h6>{info.title}</h6>
                              <small>{info.description}</small>
                        </div>
                  </div>
            </div>
      );
};

export default InfoCard;