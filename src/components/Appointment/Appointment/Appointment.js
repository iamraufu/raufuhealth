import React, { useState } from 'react';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import AppointmentHeader from '../AppointmentHeader/AppointmentHeader';
import BookAppointment from '../BookAppointment/BookAppointment';

const Appointment = () => {
      const [selectedDate, setSelectedDate] = useState(new Date());

      const handleDateChange = date => {
            setSelectedDate(date);
      }

      return (
            <div>
                  <div className="header-container">
                        <Navbar />
                        <AppointmentHeader handleDateChange={handleDateChange}></AppointmentHeader>
                  </div>
                  <BookAppointment date={selectedDate}></BookAppointment>
                  <Footer />
            </div>
      );
};

export default Appointment;