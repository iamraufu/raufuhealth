import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
       <section className="contact my-5 py-5">
           <div className="container">
               <div className="section-header text-center text-white mb-5">
                    <h5 className='text-brand'>CONTACT</h5>
                    <h1>Get In Touch With Us</h1>
               </div>
               <div className="col-md-9 mx-auto">
                   <form action="">
                       <div className="form-group m-5">
                           <input type="text" className="form-control" placeholder="Email Address *"/>
                       </div>
                       <div className="form-group m-5">
                           <input type="text" className="form-control" placeholder="Subject *"/>
                       </div>
                       <div className="form-group m-5">
                           <textarea name="" className="form-control" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                       </div>
                       <div className="form-group text-center">
                           <button style={{width:'200px'}} type="button" className="btn btn-info text-white btn-brand">SUBMIT</button>
                       </div>
                   </form>
               </div>
           </div>
       </section>
    );
};

export default Contact;