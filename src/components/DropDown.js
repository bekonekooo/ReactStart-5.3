import { useState ,useEffect,useRef} from "react";
import { GoChevronDown } from "react-icons/go";
import Panel from "./Panel"


function DropDown({options ,value,onChange}){

    const  [isOpen,setIsOpen]=useState(false);
    const elDiv = useRef();

    const handleClick=()=>{
        setIsOpen(!isOpen);
    }

    useEffect(()=>{
        const handler =(event)=>{
if(!elDiv.current){
    return;
}

          if(!elDiv.current.contains(event.target)){
            setIsOpen(false);
          }
        };
        //true in order to capture elements on capture phase
        document.addEventListener('click',handler,true)
        return ()=>{
            document.removeEventListener('click',handler)
        }
    },[])
 //[] this is for use effect to work only once
    const handleOptionClick=(option)=>{
        //close dropdown
        setIsOpen(false);
        //what happens next
        onChange(option)
    }


const renderedOptions = options.map((option)=>{
        return <div className="hover:bg-sky-100 cursor-pointer p-1" onClick={()=>handleOptionClick(option)} key={option.value}>
            {option.label}
            </div>
    })


   

return <div ref={elDiv} className="w-48 relative">

    <Panel className="flex justify-betwwen items-center cursor-pointer"
     onClick={handleClick}>
        {value?.label || "...Select"}
        <GoChevronDown className="ml-[70px] text-[24px] "></GoChevronDown>
        </Panel>
    {isOpen && <Panel className="absolute top-full ">{renderedOptions}</Panel>}
</div>
}
export default DropDown;