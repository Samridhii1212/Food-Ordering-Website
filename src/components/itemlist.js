import { useDispatch, useSelector } from "react-redux";
import { additem } from "../utils/cartslice";



function Itemlist(props)
{
const {items}=(props)
let imgid = items.card;
const cartitems=useSelector(store=>store.cart.items)
const dispatch=useDispatch();
function handleclick(item)
{
 dispatch(additem(item))
}

return (
        <div>
            {items&&items.map((item) => (
                <div
                data-testid="foodItems"
                key={item.card.info.id}
                className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
                >
                <div className="w-9/12">
                        <div className="py-2">
                            <span>{item.card.info.name}</span>
                            <span>
                                - ₹
                                {item.card.info.price
                                ? item.card.info.price / 100
                                : item.card.info.defaultPrice / 100}
                            </span>
                        </div>
                        <p className="text-xs">{item.card.info.description}</p>
                    </div>

                     <div className="w-6/12 p-4 bg-slate-200">
                        <div className="absolute">
                        <button
                        className="p-2 mx-6 rounded-md bg-black text-white shadow-lg"
                        onClick={() => handleclick(item)}
                        >
                         Add +
                         </button>
                        </div>
                        <img
                        className=""
                        src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + item.card.info.imageId} />
                     </div>




                   
                </div>
            ))}
        </div>
    );










}
export default Itemlist;

// {
//     items.map((item) => (
//         <div
//             data-testid="foodItems"
//             key={item.card.info.id}
//             className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
//         >
//             <div className="w-9/12">
//                 <div className="py-2">
//                     <span>{item.card.info.name}</span>
//                     <span>
//                         - ₹
//                         {item.card.info.price ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}
//                     </span>
//                 </div>
//                 <p className="text-xs">{item.card.info.description}</p>
//             </div>
//         </div>
//     ))
// }


// </div >)