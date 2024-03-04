import Button from "../components/Button";
import {GoBell} from "react-icons/go"

function ButtonPage (){
   const handleClick=()=>{
      console.log("button clicked")
   }

    return <div>
     <div>this is app</div> 
     <div>
        <Button className="mb-5"  success outline onClick={handleClick} ><GoBell /> Click me </Button>
     </div>
     <div>
        <Button warning    ><GoBell />
       Buy Now</Button>
     </div>
     <div>
        <Button danger>
        
         See Deal</Button>
     </div>
     <div>
        <Button secondary>Hide Add</Button>
     </div>
     <div>
        <Button primary rounded>Whatever </Button>
     </div>
       </div>
}
export default ButtonPage;