import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import useMenu from '../utils/usemenu';
import Category from '../utils/rescategories';
import Shimmer from './shimmer';

function Menu() {
 
  const {resid}=useParams();
  const [category,setcategory]=useState([])
  const [showindex,setshowindex]=useState(null)
 

  useEffect(() => { fetchdata() }, [])
  const fetchdata = async () => 
    {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.922464&lng=81.794091&restaurantId=" +resid)
    const json = await data.json();
    const first=json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards;
    let  categories=first?.filter(c =>c?.card?.card?.["@type"] ==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    setcategory(categories)
    
  }
  

console.log(category)
  return (
    <div className="menu">
      {/* controlled components */}
      {/* lifting state up */}
      {category&&category.map((c,index)=>
      <Category 
      data={c}
      show={index===showindex?true:false}
      showtheindex={()=>setshowindex(index)}
    
      />
      
      )
      
      }
      
    </div>
  )
}

export default Menu







// {/* <ul className='ul'>
//         {
//           resdata.map((ele) => <li key={ele.card.info.id}>{ele.card.info.name}-RS.{ele.card.info.price/100}</li>)
//         }
    
//        </ul>  */}



// const Menu = () => {
//   const { resId } = useParams();

//   const dummy = "Dummy Data";

//   const resInfo = useMenu(resId);
//   console.log(resInfo)

//   const [showIndex, setShowIndex] = useState(null);

//   if (resInfo === null) return <Shimmer />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[0]?.card?.card?.info;

//   const {itemCards} =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   const categories =
//     resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   //console.log(categories);

//   return (
//     <div className="text-center">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold text-lg">
//         {cuisines.join(", ")} - {costForTwoMessage}
//       </p>
//       {/* categories accordions */}
//       {categories.map((category, index) => (
//         // controlled component
//         <Category
//           key={category?.card?.card.title}
//           data={category?.card?.card}
//           showItems={index === showIndex ? true : false}
//           setShowIndex={() => setShowIndex(index)}
//           dummy={dummy}
//         />
//       ))}
//     </div>
//   );
// };

// export default Menu;