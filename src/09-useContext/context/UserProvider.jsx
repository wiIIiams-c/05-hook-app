import { useState } from "react"
import { UserContext } from "./UserContext"

const user = {
    id: 123,
    name: 'Cataldo Leviosa',
    email: 'cataldol@hola.cl'
}

export const UserProvider = ({children}) => {
    const [user, setUser] = useState()

    return (
        //<UserContext.Provider value={{hola: 'Mundo', user}}>
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}
