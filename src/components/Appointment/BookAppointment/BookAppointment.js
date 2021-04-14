import React from 'react';
import BookingCard from '../BookingCard/BookingCard';

const bookingData = [
    {
        id: 1,
        subject: 'Scaling and polishing',
        visitingHour: '7:00 AM - 7:50 AM',
        totalSpace: 10
    },
    {
        id: 2,
        subject: 'Tooth color restoration',
        visitingHour: '8:00 AM - 8:50 AM',
        totalSpace: 10
    },
    {
        id: 3,
        subject: 'Dental implants',
        visitingHour: '9:00 PM - 9:50 PM',
        totalSpace: 10
    },
    {
        id: 4,
        subject: 'Implant over denture',
        visitingHour: '10:00 AM - 10:50 AM',
        totalSpace: 10
    },
    {
        id: 5,
        subject: 'Complete denture',
        visitingHour: '11:00 AM - 11:50 AM',
        totalSpace: 10
    },
    {
        id: 6,
        subject: 'Full mouth rehabilitation',
        visitingHour: '3:00 PM - 3:50 PM',
        totalSpace: 10
    },
    {
        id: 7,
        subject: 'Cosmetic filling',
        visitingHour: '4:00 PM - 4:50 PM',
        totalSpace: 12
    },
    {
        id: 8,
        subject: 'Dental crown and bridge',
        visitingHour: '5:00 PM - 5:50 PM',
        totalSpace: 8
    },
    {
        id: 9,
        subject: 'Teeth whitening',
        visitingHour: '6:00 PM - 6:50 PM',
        totalSpace: 10
    },
    {
        id: 10,
        subject: 'Root canal',
        visitingHour: '3:00 PM - 3:50 PM',
        totalSpace: 10
    },
    {
        id: 11,
        subject: 'Smile makeover',
        visitingHour: '4:00 PM - 4:50 PM',
        totalSpace: 10
    },
    {
        id: 12,
        subject: 'Dental CT Scan',
        visitingHour: '7:00 AM - 9:50 AM',
        totalSpace: 30
    },
    {
        id: 13,
        subject: 'Dental clearance for cancer patients',
        visitingHour: '8:00 AM - 9:50 AM',
        totalSpace: 20
    },
    {
        id: 14,
        subject: 'Cosmetic Dentistry',
        visitingHour: '7:00 PM - 9:50 PM',
        totalSpace: 20
    },{
        id: 15,
        subject: 'Teeth Orthodontics',
        visitingHour: '7:00 AM - 8:50 AM',
        totalSpace: 20
    }
]

const BookAppointment = ({ date }) => {


    return (
        <section>
            <h1 className='text-center text-brand m-5'>Available Appointment on {date.toDateString()}</h1>
            <div className="row w-100 px-5">
                {
                    bookingData.map(booking => <BookingCard key={booking.id} booking={booking} date={date}></BookingCard>)
                }
            </div>
        </section>
    );
};

export default BookAppointment;