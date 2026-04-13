import { useState, useEffect, createContext, useContext } from "react";
const UserContext= createContext();
function Component1(){
    const [fname, setfname]= useState("Gala")
    

    return(
        <UserContext.Provider value={fname}>
        <Component2/>
        </UserContext.Provider>
    )
}

function Component2(){
    return(
        <>
        <Component3/>
        </>
    )
}

function Component3(){
    const name= useContext(UserContext);
    return(
    <>
    <h1> Your name is {name}</h1>
    </>)

}

export default Component1;