import React from 'react';
import root from '../../../images/root.png';
import whitening from '../../../images/whitening.png';
import scale from '../../../images/scale.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

      const serviceData = [
            {
                  name: 'Root Canal Treatment',
                  image: root
            },
            {
                  name: 'Teeth Whitening',
                  image: whitening
            },
            {
                  name: 'Scale and Polish',
                  image: scale
            }
      ]
      return (
            <section className='services-container mt-5'>
                  <div className="text-center">
                        <h5 style={{ color: '#22d1ee' }}>OUR SERVICES</h5>
                        <h2 style={{ color: '#0e153a' }}>Services We Provide</h2>
                  </div>
                  <div className='d-flex justify-content-center'>
                        <div className="w-75 row mt-5 pt-5">
                              {
                                    serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                              }
                        </div>
                  </div>
            </section>
      );
};

export default Services;