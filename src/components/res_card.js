import React from 'react'
import { ReactDOM } from 'react';

function Card(props) 
{
  
  const {data}=props
  return (
    <div className='m-6 p-3 font-light w-[250px] height-[300px]  bg-gray-100 shadow-lg hover:bg-[rgb(225,225,225)]'>
      <img 
      className='rounded-sm h-[180px] w-[230px]'
      src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+
      data.cloudinaryImageId}
      />
     <h1 className='font-bold'>{data.name}</h1>
     <h6 className=''>{data.avgRating}</h6>
     <div>
     <span className='font-[10px]'>{data.cuisines.join(',')}</span>
      </div>
     <h4>{data.costForTwo}</h4> 
    </div>
  )
}

export default Card;