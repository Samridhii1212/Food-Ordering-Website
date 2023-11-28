import React from "react"
import {useState,useEffect} from "react"


const useMenu=(resid)=>
{
    const [resdata,setresdata]= useState([])

    useEffect(() => { fetchdata() }, [])
    const fetchdata = async () => {

        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=16.922464&lng=81.794091&restaurantId=" + resid)
        const json = await data.json();
       
        setresdata(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card.itemCards)
       
        return resdata;
    }
}

//     const [resInfo, setResInfo] = useState(null);

//     useEffect(() => {
//         fetchData();
//     }, []);

//     const fetchData = async () => {
//         const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"+ resid);
//         const json = await data.json();

//         setResInfo(json.data);
//     };

//     return resInfo;

// }
 export default useMenu;