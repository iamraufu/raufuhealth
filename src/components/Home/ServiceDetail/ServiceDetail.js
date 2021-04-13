import React from 'react';

const ServiceDetail = ({service}) => {
      return (
            <div className="col-md-4 text-center">
                  <img style={{height:'50px'}} src={service.image} alt=""/>
                  <h5 className='mt-3 mb-3'>{service.name}</h5>
                  <p className='text-secondary'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est, esse!</p>
            </div>
      );
};

export default ServiceDetail;