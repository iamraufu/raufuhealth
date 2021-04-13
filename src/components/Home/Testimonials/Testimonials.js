import React from 'react';
import './Testimonials.css';
import raufu from '../../../images/raufu.png';
import prezens from '../../../images/prezens.png';
import eftykhar from '../../../images/eftykhar.png';
import Testimonial from '../Testimonial/Testimonial';

const testimonialData = [
      {
            quote:'This is a great place to go take care of your teeth. The team was very professional examining and providing with solutions by priority. I had to do periodontal root cleaning and Raufu Health did a great job, I felt that I was in good hands. All the people here were very gentle and kind to me. They explained very well what was going on. Thanks to Raufu Health!',
            name: 'Eftykhar Raufu',
            from: 'Chittagong',
            img: eftykhar
      },
      {
            quote:'The best dental care I have ever experienced! Professional, courteous, and friendly staff made me feel like family… would highly recommend to anyone!!!',
            name: 'Raufu Prezens',
            from: 'Dhaka',
            img: raufu
      },
      {
            quote:'The professionalism and friendliness of the whole team is outstanding. I’ve been going with them for a complicated process and then for keeping up and cleaning. Every visit is like visiting friends. I couldn’t be happier with the results.',
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