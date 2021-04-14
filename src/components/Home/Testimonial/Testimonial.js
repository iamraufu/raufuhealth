import React from 'react';

const Testimonial = (props) => {
      const { quote, name, from, img } = props.testimonial;

      return (
            <div className="col-md-4">
                  <div className="card shadow-sm  p-5">
                        <div className="card-body">
                              <p className="card-text text-secondary">{quote}</p>
                        </div>
                        <div className="card-footer d-flex  align-items-center">
                              <img className="mx-3" style={{ borderRadius: '50%' }} src={img} alt="" width="60" />
                              <div>
                                    <h5 className='text-brand'>{name}</h5>
                                    <p className="m-0 text-secondary">{from}</p>
                              </div>
                        </div>
                  </div>
            </div>
      );
};

export default Testimonial;