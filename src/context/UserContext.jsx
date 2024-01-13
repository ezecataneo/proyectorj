import { createContext, useState } from "react";

export const UserContext = createContext()

export const userProvider = ({children}) => {
    const [ user, setUser ] = useState ({
        email: "eze@gmail.com",
        token: "bfjvbqncvowevnm"
    })

    return (
        <UserContext.Provider value={{user}}>
            {children}
        </UserContext.Provider>
    )
}

