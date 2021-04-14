import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {
        console.log(data)
        //   data.service = appointmentOn;
        //   data.date = date;
        //   data.created = new Date();

        //   fetch('http://localhost:5000/addAppointment', {
        //       method: 'POST',
        //       headers: { 'content-type': 'application/json' },
        //       body: JSON.stringify(data)
        //   })
        //   .then(res => res.json())
        //   .then(success => {
        //       if(success){
        //           closeModal();
        //           // alert('Appointment created successfully.');
        //       }
        //   })    
    }

    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >

                <h2 className="text-center text-brand">{appointmentOn}</h2>

                <p className="text-secondary text-center"><small>On {date.toDateString()}</small></p>

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>

                    <div className="form-group p-3">
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span className="text-danger">*This field is required</span>}
                    </div>

                    <div className="form-group p-3">
                        <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control" />
                        {errors.phone && <span className="text-danger">*This field is required</span>}
                    </div>

                    <div className="form-group p-3">
                        <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control" />
                        {errors.email && <span className="text-danger">*This field is required</span>}
                    </div>

                    <div className="form-group row p-3">
                        <div className="col-4">

                            <select className="form-control" name="gender" {...register("gender", { required: true })}>
                                <option disabled={true} value="Not set">Select Gender</option>
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Not set">Other</option>
                            </select>
                            {errors.gender && <span className="text-danger">*This field is required</span>}

                        </div>

                        <div className="form-group col-4">
                            <input type="number" {...register("age", { required: true })} name="age" placeholder="Age" className="form-control" />
                            {errors.age && <span className="text-danger">*required</span>}
                        </div>

                        <div className="form-group col-4">
                            <input type="number" {...register("weight", { required: true })} name="weight" placeholder="Weight" className="form-control" />
                            {errors.weight && <span className="text-danger">*required</span>}
                        </div>

                    </div>

                    <div className="form-group text-right p-3">
                        <button type="submit" className="btn btn-brand text-white">Send</button>
                    </div>

                </form>
            </Modal>
        </div>
    );
};

export default AppointmentForm;