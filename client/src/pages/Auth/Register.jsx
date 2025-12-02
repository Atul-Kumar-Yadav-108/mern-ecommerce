import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link } from 'react-router-dom'
import {toast} from "react-toastify"
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Register = () => {
    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress]=useState("");
    const navigate = useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        console.log(name,email,password,phone,address);
       try {
         const res = await axios.post(`${import.meta.env.VITE_API}/api/v1/auth/register`,
        { name, email, password, phone, address });
        if(res && res.data.success){
            toast.success(res.data.message);
            navigate("/login");
            setName("");
            setEmail("");
            setPassword("");
            setPhone("");
            setAddress("");
        }else{
            toast.error(res.data.message);
        }
       } catch (error) {
            toast.error("Something error while registeration.")
       }
    }
  return (
    <>
        <Layout title={"Register - Ecommerce App"}>
                <div className="row g-0 page-transition-singup">
                    <div className="registeration-image col-md-6">
                        <img src="/images/2761902.jpg" alt="" className='half-img' />
                    </div>
                    <div className="register-container col-md-4 offset-md-1">
                        <div className="register">
                                   <h1 className='text-center'>Register</h1>
                        <form onSubmit={handleSubmit}>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="name" placeholder="Enter name" value={name} onChange={(e)=> setName(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="phone" placeholder="Enter phone" value={phone} onChange={(e)=> setPhone(e.target.value)} required />
                            </div>
                            <div className="mb-3">
                                <input type="text" className="form-control" id="address" placeholder="Enter address" value={address} onChange={(e)=> setAddress(e.target.value)} required />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <Link to={"/login"} className="smooth-link">Already have a account ? login</Link>
                        </div>
                        </div>

                    </div>
                </div>
        </Layout>
    </>
  )
}

export default Register