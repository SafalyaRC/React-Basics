import React from "react";
import UserContext from "./UserContext";
import { useState } from "react";

const UserContextProvider = ({ children }) => {
    const [user,setUSer]=useState(null)
    return (
        <UserContext.Provider value={{user,setUSer}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;