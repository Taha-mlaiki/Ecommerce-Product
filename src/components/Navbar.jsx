import React, { useEffect, useRef, useState } from 'react'
import menu from "../assets/images/icon-menu.svg"
import cart from "../assets/images/icon-cart.svg"
import avatar from "../assets/images/image-avatar.png"
import "./navbar.css"
import Cart from "./Cart"
import { useSelector } from 'react-redux'


const Navbar = () => {
    const item = useSelector((state)=> state.cart);

    const [showCart,setShowCart] = useState(false);
    const cartRef = useRef();

   useEffect(()=>{
    const cartHundel = (e)=>{
      if(cartRef && cartRef.current && !cartRef.current.contains(e.target)) {
        setShowCart(false)
      }
      
    }
      document.addEventListener("mousedown",cartHundel)
      return ()=>{
        return document.removeEventListener("mousedown",cartHundel)
      }
   },[cartRef, setShowCart])
 

  return (
    <nav className='navbar'>
        <div className="container d-flex align-items-center border-bottom position-relative">
        <img data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample" className='d-inline d-md-none' src={menu} alt="" />
            <h2 className='logo me-4 mb-2'>sneakers</h2>
            <ul className=' nav-links d-flex  align-items-center me-auto'>
                <li><a href="#">Collections</a></li>
                <li><a href="#">Men</a></li>
                <li><a href="#">Women</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
                <div className='position-relative'>
                <img onClick={()=>setShowCart((prev)=> !prev)} className='cart-logo' src={cart} alt="" />
                    <span className='notifi'>{item && item.length > 0 ? item[0].quantity:0}</span>
                </div>
                <img className='avatar ms-4' src={avatar} alt="" />

                {showCart && <Cart cartRef={cartRef} />}
        </div>
        <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div className="offcanvas-header">
            <button type="button me-atuo" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
        <div className="offcanvas-body">
    <ul>
    <li><a href="#">Collections</a></li>
    <li><a href="#">Men</a></li>
    <li><a href="#">Women</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Contact</a></li>
    </ul>
        </div>
        </div>
        </nav>
  )
}

export default Navbar
