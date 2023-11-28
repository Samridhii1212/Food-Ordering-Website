import React from "react";

class Unmount extends React.Component
{
    constructor(props)
    {
        super(props)
        console.log("constructor")
        this.state=
        {
            count:1
        }
    }
    componentDidMount()
    {
        console.log("mounted")
    }
     
    componentDidUpdate()
    {
        console.log("updates")
    }
    render()
    {
        console.log("render")
        const {count}=this.state.count
        return(
            <div>
                <h1>{count}</h1>
                <button onClick={()=>
                this.setState({count:count+1})
                }>
                ADD
                </button>
            </div>
        )
    }



}
export default Unmount;
