import React from "react";

class User extends React.Component
{
    constructor(props)
    {
        super(props);
        console.log("constructor");
        //console.log(this.props.name+" child constructor")
        this.state=
        {
            userinfo:
            {
                login:"Dummy"
            }
        }
    }
    async componentDidMount()
    {
        console.log("mounted")
        //console.log(this.props.name+" child mounted to webpage")
        const data =await fetch('https://api.github.com/users/Samridhii1212');
        const json=await data.json();
       this.setState(
        {
        userinfo:json,
        }
       
        )
    }
    componentDidUpdate()
    {
        console.log("updated")
    }
    componentWillUnmount()
    {
        console.log("unmounted")
    }
    render()
    {
        console.log(" child render")
       // console.log(this.state.userinfo)
        
        return(
            <div className="">
            <h1>{this.state.userinfo.login}</h1>
            </div>
        )
    }
}

export default User;