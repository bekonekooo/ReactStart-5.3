import { useState } from "react";
import { GoChevronDown } from "react-icons/go";
import { GoChevronLeft } from "react-icons/go";

function Accordion({items}){
    const [expandedIndex,setExpandedIndex] =useState(-1);

    const  handleClick=(nextIndex)=>{
        if(expandedIndex===nextIndex){
                setExpandedIndex(-1)
        }else
        setExpandedIndex(nextIndex);
    }

const renderedItems= items.map((item,index)=>{
    const isExpanded=index===expandedIndex;
   
    const icon =<span className="text-4xl">
        {isExpanded ? <GoChevronDown/>: <GoChevronLeft/>}
    </span>

    
    return <div key={item.id}>
        <div className="justify-between  flex p-3 bg-gray-500 border-b items-center cursor-pointer"
         onClick={()=>{handleClick(index)}}>
            {item.label}
             {icon}</div>
        {isExpanded && <div className="border-b p-5"> {item.content} </div>  } 
    </div>
})


    return <div className="border-x border-t rounded"> {renderedItems}</div>
}
export default Accordion;