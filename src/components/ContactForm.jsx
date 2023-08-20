import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import bars from '../assets/bars.png'
import phone from '../assets/Phone.png'
import envelope from '../assets/Envelope.png'
import pointer from '../assets/Pointer.png'
import fb from '../assets/fb.png'
import twitter from '../assets/twitter.png'
import insta from '../assets/instagram.png'
import youtube from '../assets/youtube.png'
import './contact-form.css'

const ContactForm = () => {
    return (

        <div className="container" style={{
            // backgroundColor: "gray",
            marginTop: "86px",
            marginBottom: "86px"
        }}>
            <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-12  d-flex flex-column  ">
                    <div className=" d-flex align-items-baseline flex-column ">
                        <h2 className=" text-info">
                            STAY IN TOUCH
                        </h2>
                        <h1 className="second-heading">
                            Contact us
                        </h1>
                        <img src={bars} alt="bars" className='form-bar' />
                    </div>
                    <div className="form-info-icon-div flex-column align-items-start flex-wrap ">
                        <p className=' fs-4'><span className='form-info-span'><img src={phone} alt="mobile-icon" className='form-info-icon' /></span>1-541-754-3010</p>
                        <p className=' fs-4'><span className='form-info-span'><img src={envelope} alt="mobile-icon" className='form-info-icon' /></span>support@jointreaty.com</p>
                        <p className=' fs-4'><span className='form-info-span'><img src={pointer} alt="mobile-icon" className='form-info-icon' /></span>3782 Shady Pines Drive USA</p>
                    </div>
                    <div className=" d-flex flex-nowrap justify-content-start align-items-start ">
                        <img src={fb} alt="social-icon" className='form-social-icon' />
                        <img src={twitter} alt="social-icon" className='form-social-icon' />
                        <img src={insta} alt="social-icon" className='form-social-icon' />
                        <img src={youtube} alt="social-icon" className='form-social-icon' />
                    </div>
                </div>
                {/* right portion */}
                <div className=" col-lg-7 col-md-7 col-sm-12   d-flex flex-lg-row flex-md-row flex-sm-row flex-column flex-row shadow p-5 my-md-4 mt-sm-5 mt-5 ">
                    <div className=" col p-1 col-lg-6 col-md-6 col-sm-6 col-12">
                        <Form.Control size="lg" type="text" placeholder="NAME**" className=' mb-4 form-left-input' />
                        <Form.Control size="lg" type="text" placeholder="EMAIL*" className=' mb-4 form-left-input' />
                        <Form.Control size="lg" type="text" placeholder="SUBJECT*" className=' mb-4 form-left-input ' />
                    </div>
                    <div className=" col d-flex flex-column p-1 col-lg-6 col-md-6 col-sm-6 col-12 align-items-end form-right-input-div">
                        <Form.Control size="lg" type="text" placeholder="SUBJECT*" as='textarea' rows={7} className='form-right-text-area' />
                        {/* <textarea placeholder='MESSAGE*' className='' rows='8' cols='40'></textarea> */}
                        <Button variant="info" className='form-right-btn'>SEND MESSAGE</Button>{' '}
                        {/* <button className=''>SEND MESSAGE</button> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ContactForm