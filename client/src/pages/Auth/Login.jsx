import React, { useState } from 'react'
import Layout from '../../components/layout/Layout'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify'
import { useAuth } from '../../context/Auth'

const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    const [auth, setAuth]=useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    async function handleLogin(e) {
        e.preventDefault();
        try {
            const res = await axios.post(`${import.meta.env.VITE_API}/api/v1/auth/login`,{email, password});
            if(res && res.data.success){
                        toast.success(res.data.message);
                        setAuth({
                            ...auth, user : res.data.user,
                            token : res.data.token
                        })
                        localStorage.setItem("auth" ,JSON.stringify(res.data));
                        navigate(location.state || "/"); //navigate to home page
                        setEmail("");
                        setPassword("");
                    }else{
                        toast.error(res.data.message);
                    }  
        } catch (error) {
            toast.error('Something error while login')
        }
    }

  return (
    <>
    <Layout title={"Login - Ecommerce App"}>
         <div className="row g-0 page-transition-login">
                  <div className="register-container col-md-4 offset-md-1">
                        <div className="register">
                                   <h1 className='text-center'>Login</h1>
                        <form onSubmit={handleLogin}>
                            <div className="mb-3">
                                <input type="email" className="form-control" id="email" name='email' placeholder="Enter email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" id="password" name='password' placeholder="Enter password" value={password} onChange={(e)=> setPassword(e.target.value)} />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <div className='text-center'>
                            <Link to={"/signup"} className="smooth-link">Don't have a account ? singup</Link>
                        </div>
                        </div>

                    </div>
                    <div className="registeration-image col-md-6">
                        <img src="/images/2761902.jpg" alt="" className='half-img' />
                    </div>
              
                </div>
    </Layout>
    </>
  )
}

export default Login