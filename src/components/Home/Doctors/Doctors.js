import React from 'react';
import doctor1 from '../../../images/d1.png'
import doctor2 from '../../../images/d2.png'
import doctor from '../../../images/doctor.png'
import Doctor from '../Doctor/Doctor';

const doctorData = [
      {
            img: doctor1,
            name:'Dr. Zohra Begum Kazi',
            phone:'+8801611819814'
      },
      {
            img: doctor2,
            name:'Dr. Humayun Kabir',
            phone:'+8801611404405'
      },
      {
            img: doctor,
            name:'Dr. Nilofer Sultan Sheikh',
            phone:'+8801611819814'
      }
]

const Doctors = () => {
      return (
            <section className='doctors'>
                  <div className="container">
                        <h5 style={{color:'#22d1ee'}} className='text-center mb-5'>OUR DOCTORS</h5>
                        <div className="row">
                              {
                                    doctorData.map(doctor=><Doctor doctor={doctor}></Doctor>)
                              }
                        </div>
                  </div>

            </section>
      );
};

export default Doctors;