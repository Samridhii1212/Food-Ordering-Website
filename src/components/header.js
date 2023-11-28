import React from "react";
import { ReactDOM } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useonlinestatus";
import userContext from "../utils/usercontext";
import { useContext } from 'react';
import { useSelector } from 'react-redux';

function Header()
{
    const [login,setlogin]=useState("login")
    const online=useOnlineStatus();
    const {username,useremail}=useContext(userContext);

    //subscribe to store or select the slice of store
    const cartitems = useSelector((store) => store.cart.items)
   

   

    function setbutton()
    {
        setlogin(!login)
    }
    return(
        <div className="flex  text-lg text-black  justify-between  bg-gray-200 shadow-lg w-full h-[80px]">
        
        <img src="https://www.shutterstock.com/image-vector/food-logo-like-icon-fork-260nw-741436366.jpg"
         height="80px" width="150px" />
       

        <div className="flex px-3 ">
            <ul className="flex m-4 p-4">
                <li className="px-4 ">Online:{online ? "✅" : "🔴"}</li>
                <li className="px-4"><Link to="/">Home</Link></li>
                <li className="px-4"><Link to="/about">About</Link></li>
                <li className="px-4"><Link to="/contact">Contact</Link></li>
                {/* <li className="px-3"><Link to="/unmount">unmount</Link></li> */}

                <Link to="/cart">
                <li className="px-4">
                Cart
                </li>
               </Link>

                <li>
                <button className="login" onClick={setbutton}>
                {login?"Login":"Logout"}
                </button>
                </li>

                
                
            </ul>
        

        </div >
        </div>
    )

}
export default Header;