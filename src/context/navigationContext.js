import { createContext,useState ,useEffect} from 'react';

const NavigationContext = createContext();

function NavigationProvider({children}){
const [currentPath,setCurrentPath]=useState(window.location.pathname)

useEffect(()=>{
const handler =()=>{
    // You can perform actions here when the popstate event occurs
    setCurrentPath(window.location.pathname);
}
// Add event listener when the component mounts
window.addEventListener("popstate",handler);
// Cleanup function to remove event listener when the component unmounts
return ()=>{
    window.removeEventListener("popstate",handler);
}
},[])  // Empty dependency array ensures the effect runs only once

const navigate =(to)=>{
    window.history.pushState({},"",to);
    setCurrentPath(to);
}

    return(
        <NavigationContext.Provider value={{currentPath,navigate}}>
        
          
          
            {children}
        </NavigationContext.Provider>
    )
}
export {NavigationProvider}
export default NavigationContext;
