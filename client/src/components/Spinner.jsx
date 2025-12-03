import React,{useState, useEffect} from 'react'
import { useNavigate,useLocation } from 'react-router-dom'

const Spinner = () => {
    const [count, setCount] = useState(5);
    const nagivate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
       const interval = setInterval(()=>{
            setCount((prevCount) => --prevCount);
       },1000)
       count === 0 && nagivate("/login",{
        "state" : location.pathname
       });
       return () => clearInterval(interval)
    },[count, nagivate,location]);

  return (
    <>
        <div className="d-flex flex-column justify-content-center align-items-center vh-100">
            <h3 className='mb-4'>Redirecting to you in {count} second</h3>
            <div className="spinner-border text-primary" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>

    </>
  )
}

export default Spinner