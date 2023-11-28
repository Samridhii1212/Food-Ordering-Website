import {createContext} from "react";

const userContext=createContext
({
    username:"default user",
    useremail:"default@123"
})

export default userContext;