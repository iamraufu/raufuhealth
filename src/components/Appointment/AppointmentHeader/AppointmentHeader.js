import React from 'react';
import girl from '../../../images/girl.png';
import logo from '../../../images/logo.png';
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';
const AppointmentHeader = ({handleDateChange}) => {
      

      return (
            <main style={{ height: '600px' }} className='row d-flex align-items-center'>
                  <div className="col-md-4 offset-md-1">
                        <img src={logo} alt="" />
                        <h1 className='text-info text-brand'>Appointment</h1>
                        <Calendar
                              style={{border:'none'}}
                              onChange={handleDateChange}
                              value={new Date()}
                        />
                  </div>
                  <div className="col-md-6">
                        <img src={girl} alt="" className="img-fluid" />
                  </div>
            </main>
      );
};

export default AppointmentHeader;