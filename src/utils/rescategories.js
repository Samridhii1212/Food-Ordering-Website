import Itemlist from "../components/itemlist";
import { useState } from "react";

function Category(props)
{
    
    const {data}=props;
    const [count,setcount]=useState(1)

    const {show,showtheindex}=props;

    function sendtoparent()
    {
     console.log(count)
     setcount(count+1);
     if(count%2==0)showtheindex();
    }

    

    return (
        <div>
          <div 
            className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4"
            onClick={sendtoparent}
           >
          <div
          className="flex justify-between cursor-pointer"
          >
                <span className="font-bold text-lg">
                {data.card.card.title} ({data.card.card.itemCards.length})
                </span>
                <span>⬇️</span>
                </div>

                {show&&<Itemlist items={data.card.card.itemCards} />}
            </div>
        </div>
    );
};

export default Category;