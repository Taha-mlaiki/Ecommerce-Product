import React,{useState} from 'react'
import LightBox from "./components/LightBox"
import plus from "./assets/images/icon-plus.svg"
import minus from "./assets/images/icon-minus.svg"
import cart from "./assets/images/icon-cart.svg"
import { useSelector,useDispatch } from 'react-redux'
import { plusQuantity } from './cartSlice'
import { minusQuantity } from './cartSlice'
import image from "./assets/images/image-product-1-thumbnail.jpg"
import { addItem } from './cartSlice'


const MainSection = () => {
   const dispatch = useDispatch()
    const itemCart = useSelector(state=> state.cart);
    const [quantity,setQuantity] = useState(1)
  return (
    <div className='container'>
        <div className="row">
            <div className=" col-12 col-md-6 p-0  justify-content-center align-items-center justify-content-center">
                <LightBox />
            </div>
            <div className=" col-12  col-md-6 mt-4">
                <span className="company">SNEAKER COMPANY</span>
                <h1 className='fs-sm-1 fs-1 w-75'>Fall Limited Edition Sneakers</h1>
                <p>These low-profile sneakes are your prefect casual wear companion. Featuring a durable
                    rubber outer sole, they'll withstand everything the weather can offer
                </p>
                <div className='d-flex flex-sm-column'>
                <div className='d-flex align-items-center price mb-2'>
                    <h3>$125.00</h3>
                    <span>50%</span>
                </div>
                <span className='mt-1 ms-auto ms-sm-2'>$250.00</span>
                </div>
                <div className='d-flex flex-column flex-md-row mt-4'>
                    <div className='counter'>
                        <img onClick={()=> setQuantity((prev)=> prev -1)} src={minus} alt="" />
                        <span>{itemCart && itemCart.length > 0 ? itemCart[0].quantity: quantity}</span>
                        <img  onClick={()=>setQuantity((prev)=> prev + 1)} src={plus} alt="" />
                    </div>
                    <button onClick={()=> dispatch(addItem({id:1,img:image,text:"Fall Limited Edition Sneakers",price:125,quantity:quantity}))} className='add-cart'><i className="fa-solid fa-cart-shopping me-2 p-2"></i> Add To cart</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MainSection
