import { useContext } from "react"
import { AuthContext } from "../context/AuthContext"

export const useApiConfig = ()=>{
    const {user} = useContext(AuthContext);

    return {
        headers: {
            Authorization: "Bearer "+user.token
        }
    }
}