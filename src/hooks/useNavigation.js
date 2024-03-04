import NavigationContext from "../context/navigationContext";
import { useContext } from "react";

function useNavigation(){
    return useContext(NavigationContext);
}
export default useNavigation;