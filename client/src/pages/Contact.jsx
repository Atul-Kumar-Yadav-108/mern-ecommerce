import React from 'react'
import Layout from '../components/layout/Layout'
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { RiCustomerService2Line } from "react-icons/ri";

const Contact = () => {
  return (
    <Layout title={"Contact Us - Ecommerce App"}>
      <div className="contact-container row">
        <div className="contact-img col-md-6">
          <img src="/images/2761902.jpg" alt="" />
        </div>
        <div className="contact-details col-md-6">
            <h1 className="contact-us-heading">
              Contact us
            </h1>
            
            <p className='contact-us-para'>any query and info about product feel free to call we are 24*7 available</p>
            <p className="contact-email-para contat-us-info">
              <MdOutlineAttachEmail/> : www.help@ecommerceapp.com
            </p>
            <p className="contact-phone-para contat-us-info">
              <FaPhoneAlt/> : +91 12345 67890
            </p>
            <p className="contact-customer-support-para contat-us-info">
              <RiCustomerService2Line/> : 1800-0000-0000 (toll free)
            </p>
        </div>
      </div>
    </Layout>
  )
}

export default Contact