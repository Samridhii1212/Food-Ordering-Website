import Card from './res_card'
import {useState,useEffect} from 'react'
import Shimmer from './shimmer';
import Menu from './menu';
import {Link} from 'react-router-dom';
import React from 'react';
import useOnlineStatus from '../utils/useonlinestatus';


function Body() {


const [listofrestaurant,setlist] = useState(null);
const [text,settext]=useState("");
const [searchedlist,setsearchedlist]=useState(null);


const online=useOnlineStatus()

useEffect(() => {fetchData();
},[]);

  const fetchData = async () => {
  const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();
    
    setlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setsearchedlist(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
   
    
    }

if(online===false)return(<h1>u r offline</h1>)


return listofrestaurant==null?(<Shimmer/>):
    (
    <div className='body'>
     <div className='flex'> 
     <div className='m-4 p-4'> 
     <input 
      type="text" 
      value={text} 
      className='border border-solid border-black'
      onChange={(e)=>settext(e.target.value)}
      />
      <button 
      onClick={()=>
      {
      //   console.log(listofrestaurant)
      //   console.log(text)
      //   const filterlist = listofrestaurant.filter((ele) =>
      //   {
      //     ele.info.name.toLowerCase().includes(text.toLowerCase())
      //   })
      //  console.log(filterlist)
      //   //setsearchedlist(filterlist)

              console.log(text);

              const filteredRestaurant = listofrestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(text.toLowerCase())
              );

              setsearchedlist(filteredRestaurant);
      }}
      className='px-4 py-2 text-black`  bg-gray-200 shadow-lg m-4 rounded-lg'>
      Search
      </button> 

    </div>
    <div className='m-4 p-4 flex items-center rounded-lg'>
    <button onClick=
    {
      ()=>{
      let filteredlist=listofrestaurant.filter((element)=>element.info.avgRating>4)
      setsearchedlist(filteredlist)
      }}
      className='m-3 p-3 flex rounded-lg text-black px-4  bg-gray-200 shadow-lg'
      >
      top rated restaurant
      </button>

    </div>
    </div>

   
     <div className='flex flex-wrap '>
      {
      searchedlist&&searchedlist.map(card => 
      <Link key={card?.info.id} to={"./restaurant/"+card?.info.id}><Card data={card?.info}/></Link>)
      }
   
    </div>
    </div>
  )
  
  
}

export default Body


{/* <div className='flex'> */ }
{/* <div className='search m-4 p-4'> */ }
{/* <input 
      type="text" 
      value={text} 
      className='border border-solid border-black'
      onChange={(e)=>settext(e.target.value)}
      />
      <button onClick={()=>
      {
        const filterlist = listofrestaurant.filter((ele) =>
        {
          ele.info.name.toLowerCase().includes(text.toLowerCase())
        })
       //console.log(filterlist)
        //setsearchedlist(filterlist)
      }}
      className='px-4 py-2 bg-pink-400 m-4 rounded-lg'
      
      >search</button> 

    </div>
    <div className='m-4 p-4 flex items-center rounded-lg'>
    <button onClick=
    {
      ()=>{
      let filteredlist=listofrestaurant.filter((element)=>element.info.avgRating>4)
      setsearchedlist(filteredlist)
      }}
      className='flex px-4 bg-pink-300'
      >
      top rated restaurant
      </button>

      </div>
    </div> */}


// const Body = () => {
//   // Local State Variable - Super powerful variable
//   const [listOfRestaurants, setListOfRestraunt] = useState([]);
//   const [filteredRestaurant, setFilteredRestaurant] = useState([]);

//   const [searchText, setSearchText] = useState("");

//   //const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);

//   // Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(
//       "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
//     );

//     const json = await data.json();

//     // Optional Chaining
//     setListOfRestraunt(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setFilteredRestaurant(
//       json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//   };

//   //const onlineStatus = useOnlineStatus();

//   // if (onlineStatus === false)
//   //   return (
//   //     <h1>
//   //       Looks like you're offline!! Please check your internet connection;
//   //     </h1>
//   //   );

//   //const { loggedInUser, setUserName } = useContext(UserContext);

//   return listOfRestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       <div className="filter flex">
//         <div className="search m-4 p-4">
//           <input
//             type="text"
//             data-testid="searchInput"
//             className="border border-solid border-black"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <button
//             className="px-4 py-2 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               // Filter the restraunt cards and update the UI
//               // searchText
//               console.log(searchText);

//               const filteredRestaurant = listOfRestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );

//               setFilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>
//         <div className="search m-4 p-4 flex items-center">
//           <button
//             className="px-4 py-2 bg-gray-100 rounded-lg"
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setFilteredRestaurant(filteredList);
//             }}
//           >
//             Top Rated Restaurants
//           </button>
//         </div>
//       </div>
//       <div className="flex flex-wrap">
//         {filteredRestaurant.map((restaurant) => (
//           <Link
//             key={restaurant?.info.id}
//             to={"./restaurant/" + restaurant?.info.id}
//           >
//            <Card data={restaurant?.info} />
            
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Body;

