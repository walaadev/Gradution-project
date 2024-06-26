import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navs from "../../component/Home.js/Navs/Navs";
import contact from '../../assets/contact.jpg'

// npm i @emailjs/browser

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_o2lktry",
                "template_9mlcd7j",
                form.current,
                "J-g1w0FufKHoRKAbT"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    alert("message sent");
                },
                (error) => {
                    console.log(error.text);
                }
            );
    };

    return (
        <>
        {/* <NavBar></NavBar> */}
        <div class="contact" id="Contact">
            <div class="container">
                <div className="col-6 headerContact " >
                    <h2 className="main-title mb-3 headerCon">Contact US</h2>
                    <p className="contact-titlep text-center"> if you'd like to contact us, please feel free to send your message </p>
                </div>
                <div class="contentContact" >

                    <div class="infoContact">
                        <img src={contact} alt="img" style={{width:"500px" , height:"540px" , marginLeft:"-40px" , marginRight:"20px" }}></img>
                    </div>
<form ref={form} onSubmit={sendEmail} >
                        <label htmlFor="name">Full Name</label>
                        <input
                             className='inputdash'
                            id="name"
                            placeholder="Name....."
                            type="text"
                            name="user_name" />

                        <label htmlFor="email">Email Address</label>
                        <input
                            className='inputdash'
                            id="email"
                            placeholder="Email....."
                            type="email"
                            name="user_email" />
                        <label>Message</label>
                        <textarea className="main-input"
                            name="message" placeholder="Subject....." />
                        <input type="submit" value="Send" className="btn-contact register-navBar"/>
                    </form>
                   

                </div>
            </div>
        </div>
        {/* <Footer ></Footer> */}
        </>

    );
};

export default Contact;