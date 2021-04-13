import React from 'react';
import './Testimonials.css';
import raufu from '../../../images/raufu.png';
import prezens from '../../../images/prezens.png';
import eftykhar from '../../../images/eftykhar.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
      {
            name: 'Eftykhar Raufu',
            from: 'Chittagong',
            img: eftykhar
      },
      {
            name: 'Raufu Prezens',
            from: 'Dhaka',
            img: raufu
      },
      {
            name: 'Prezens Rahman',
            from: 'Chandpur',
            img: prezens
      }
]

const Testimonials = () => {

      return (
            <section className='testimonials my-5 py-5'>
                  <div className="container">
                        <div className="section-header">
                              <h5 style={{ color: '#22d1ee' }}>TESTIMONIAL</h5>
                              <h1>Patients Satisfaction</h1>
                        </div>
                        <div className="card-deck row mt-5">
                              {
                                    testimonialData.map(testimonial => <Testimonial testimonial={testimonial}></Testimonial>)
                              }
                        </div>
                  </div>
            </section>
      );
};

export default Testimonials;