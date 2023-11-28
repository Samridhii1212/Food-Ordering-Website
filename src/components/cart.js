import React from 'react'
import Itemlist from './itemlist'
import { useDispatch,useSelector } from 'react-redux';
import { clearitem } from '../utils/cartslice';

function Cart() {
const cartitems = useSelector(store => store.cart.items)
const dispatch = useDispatch();
function deletecart()
{
dispatch(clearitem());
}


return (
    <div>
    <button onClick={deletecart}>
    clear
    </button>
    <Itemlist items={cartitems}/>
    </div>
  )
}

export default Cart