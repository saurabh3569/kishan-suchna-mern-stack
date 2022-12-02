import React, { useState } from 'react'
import './contactus.css'
import axios from 'axios';

const ContactUs = () => {

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setData({
            ...data,
            [name]: value
        })
    }

    const handleClick = async (e) => {
        e.preventDefault();


        axios.post("http://localhost:5000/api/v1/contactus", data)
            .then(res => setData(res.data))
            setData({
            name:"",
            email:"",
            subject:"",
            message:""
        })
        // alert('successfullysend')
    }

    return (
        <div className='container w-75'>
            <section className="mb-4">

                <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>

                <p className="text-center w-responsive mx-auto mb-5">Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
                    a matter of hours to help you.</p>

                <div className="row">

                    <div className="col-md-9 mb-md-0 mb-5">

                        <form>
                            <div className="row">

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="name" value={data.name} onChange={handleChange} name="name" className="form-control inp" />
                                        <label htmlFor="name" className="">Your name</label>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="md-form mb-0">
                                        <input type="text" id="email" value={data.email} onChange={handleChange} name="email" className="form-control inp" />
                                        <label htmlFor="email" className="">Your email</label>
                                    </div>
                                </div>

                            </div>


                            <div className="row">
                                <div className="col-md-12">
                                    <div className="md-form">
                                        <textarea type="text" id="message" name="message" rows="2" value={data.message} onChange={handleChange} className="form-control md-textarea inp"></textarea>
                                        <label htmlFor="message" >Your message</label>
                                    </div>
                                </div>
                            </div>

                            <div className="text-center text-md-left">
                                <button type='button' className="btn btn-primary" onClick={handleClick}>Send</button>
                            </div>
                        </form>

                    </div>

                    <div className="col-md-3 text-center">
                        <ul className="list-unstyled mb-0">
                            <li><i className="fas fa-map-marker-alt fa-2x"></i>
                                <p>India</p>
                            </li>

                            <li><i className="fas fa-phone mt-4 fa-2x"></i>
                                <p>+0123456789</p>
                            </li>

                            <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                                <p>contact@gmail.com</p>
                            </li>
                        </ul>
                    </div>

                </div>

            </section>
        </div>
    )
}

export default ContactUs
