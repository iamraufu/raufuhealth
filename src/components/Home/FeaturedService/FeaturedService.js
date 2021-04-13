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
                                    <p className='text-secondary my-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi quod numquam amet consequuntur voluptas? Minima sequi explicabo alias maiores itaque asperiores labore rem officia nulla? Sint laboriosam rem saepe, aut maxime odio doloribus similique vero et eaque impedit, repellendus nam.</p>
                                    <button style={{backgroundColor:'#22d1ee'}} className='btn btn-primary'>What's More</button>
                              </div>
                        </div>
                  </div>
            </section>
      );
};

export default FeaturedService;