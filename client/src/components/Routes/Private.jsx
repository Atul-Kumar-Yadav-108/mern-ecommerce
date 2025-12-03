import { useEffect, useState } from "react";
import {useAuth} from "../../context/Auth";  //custom hook
import {Outlet} from "react-router-dom"
import axios from "axios"
import Spinner from "../Spinner";

export default function PrivateRoute(){
    const [ok, setOk]  = useState(false);
    const [auth, setAuth] = useAuth();
// console.log(auth);
console.log("private");

useEffect(()=>{
        // console.log("private1");
        // console.log(auth?.token);
        const authCheck = async()=>{
            // console.log("private2");
            const res = await axios.get(`${import.meta.env.VITE_API}/api/v1/auth/user-auth`);
            // console.log("res.daata.ok",res);
            
            if(res.data.ok){
                setOk(true);
            }else{
                setOk(false);
            }
            
        }
        if(auth?.token){
            // console.log("private3");
            authCheck()
        }
        // console.log("ok",ok);
        
    },[auth?.token]);

    return ok ? <Outlet/> :  <Spinner/> ;
}