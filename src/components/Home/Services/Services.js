import React from 'react';
import root from '../../../images/root.png';
import whitening from '../../../images/whitening.png';
import scale from '../../../images/scale.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const Services = () => {

      const serviceData = [
            {
                  name: 'Root Canal Treatment',
                  description:'Root canal treatment (endodontics) is a dental procedure used to treat infection at the centre of a tooth. Root canal treatment is not painful and can save a tooth that might otherwise have to be removed completely.',
                  image: root
            },
            {
                  name: 'Teeth Whitening',
                  description:'Tooth whitening or tooth bleaching is the process of lightening the color of human teeth. Whitening is often desirable when teeth become yellowed over time for a number of reasons, and can be achieved by changing the intrinsic or extrinsic color of the tooth enamel.',
                  image: whitening
            },
            {
                  name: 'Scale and Polish',
                  description:'A scale and polish is a quick cleaning of the teeth carried out by a dentist. Usually using something called an Ultrasonic, the dentist will clean around the gum line on the back and front of teeth to remove any plaque and tartar.',
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