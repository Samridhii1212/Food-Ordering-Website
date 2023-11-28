import React from "react";
import User from "./user";
import userContext from "../utils/usercontext";


class About extends React.Component
{
  constructor(props)
  {
    super(props);
    //console.log("parent constructor")
  }
  componentDidMount()
   {
   // console.log(" parent mounted to webpage")
  }
  render()
  {
    //console.log("parent render")
    return(
      <div>
        <div>
           <userContext.Consumer>
            {(data) => <h1 className="text-xl font-bold">{data.username}</h1>}
           </userContext.Consumer>
        </div>
        <User/>
        
        {/* <User name="untitle"/> */}
        {/* <User name="mrid" /> */}
      </div>
    )
  }
}

export default About;