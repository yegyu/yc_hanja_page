import { useEffect, useState } from "react"
import { useHistory } from "react-router"
import App  from "./App";

export const Root = () =>{
    const history = useHistory();
    const [linkState,setLinkState] = useState("")
    useEffect(() => {
        return history.listen((location) => {
            console.log('root link',location.pathname);
            setLinkState(location.pathname)
            
        })
    }, [history])

    return <App link={linkState} />

}