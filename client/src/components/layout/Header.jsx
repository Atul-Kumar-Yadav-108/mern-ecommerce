import React from 'react'
import {NavLink, Link, useNavigate} from "react-router-dom"
import { FaShopify } from "react-icons/fa";
import { useAuth } from '../../context/Auth';
import { toast } from 'react-toastify';
const Header = () => {
  const [auth, setAuth] = useAuth();
  const navigate = useNavigate();

  function handleLogout(){
    try {
      setAuth({
        ...auth,
        user: null,
        token: ""
      });
      localStorage.removeItem("auth");
      navigate("/login");
      setTimeout(()=>{
        toast.success("Logout Successfully");
      },100)
    } catch (error) {
      toast.error("Error in logout");
    }
  }
  return (
    <>
<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <Link to="/" className="navbar-brand"><FaShopify/> E-Commerce</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink to="/" className="nav-link" aria-current="page">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/categories" className="nav-link" aria-current="page">Categories</NavLink>
        </li>
        {
          (!auth.user) ? (<>
                  <li className="nav-item">
          <NavLink to="/signup" className="nav-link">Sign up</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/login" className="nav-link">login</NavLink>
        </li>
          </>) : (<>

        <li className="nav-item">
          <NavLink to="/login" onClick={handleLogout} className="nav-link">logout</NavLink>
        </li></>)
        }
        <li className="nav-item">
          <NavLink to="/cart" className="nav-link">Cart (0)</NavLink>
        </li>
      </ul>
    </div>
  </div>
</nav>

    </>
  )
}

export default Header