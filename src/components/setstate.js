import React from "react";

class User extends React.Component
{
    
   constructor(props)
   {
    super(props);
    this.state=
    {
        count:1,
    }

   
   }
    render()
    {
        const {count}=this.state;
        console.log(count)

        return(
            <div>
                <button onClick=
                {() => 
                {
                this.setState
                (
                {count:count + 1}
                )
                }
                }
                >add</button>
                <h1>this is {this.props.name} component</h1>
                <h4>the count is :{count}</h4>
            </div>
           
        )
    }

}
export default  User;