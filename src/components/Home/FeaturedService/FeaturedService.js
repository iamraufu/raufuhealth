import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import boy from '../../../images/boy.jpg';

const FeaturedService = () => {
      return (
            <section className="featured-service-container mt-5">
                  <div className="container mb-5">
                        <div className="row mb-5">
                              <div className="col-md-5 mb-4 m-md-0">
                                    <img className="img-fluid" src={boy} alt="" />
                              </div>
                              <div className="col-md-7 align-self-center">
                                    <h1>Premium Service for <br/> Premium People Like You</h1>
                                    <p className='text-secondary my-5'> Our specialist doctors will advise and assist you every step of the way including to home service due to pandemic including the complete dental treatment, checking of all teeth. 
                                    <br/>
                                    <br/>
                                    Our Doctors will also accompany you to your Premium Service appointment on the allocated day and advise you throughout the process.
                                    <br/>
                                    <br/>
                                    It is important to note that the Home treatment will only consider straight forward appointment on the same day. Occasionally, there may be hidden defects with an appointment which will not be possible to identify from the information you provide. 
                                    <br/>
                                    <br/>
                                    If for any reason the Home Doctor refuse your appointment, they may choose not to refund your fees.
                                    <br/>
                                    <br/>
                                    Approximately 95% of all appointment done at the on the same day. We will advise you as to whether your application is straight forward at our initial consultation.
                                    <br/>
                                    <br/>
                                    If you require any further information or if you are happy to proceed with these terms and conditions then please contact us on +8801611404405 or email us at raufu.dev@gmail.com</p>
                                    <button className='btn btn-info'>What's More <FontAwesomeIcon icon={faArrowRight} /></button>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default FeaturedService;