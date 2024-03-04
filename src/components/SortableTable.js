import Table from "./Table";
//sorting part comes
import { useState } from "react";

import { GoTriangleUp ,GoTriangleDown} from "react-icons/go";

function SortableTable(props){
    //sorting uses 2 states 
    const [sortOrder,setSortOrder]=useState(null);
    const [sortBy,setSortBy]=useState(null);
const {config,data}=props;

const handleClick =(label)=>{
if(sortBy && label!==sortBy){
    setSortOrder("asc");
    setSortBy(label)
    return;
}

    if(sortOrder===null){
        setSortOrder("asc");
        setSortBy(label);
    }else if(sortOrder==="asc"){
        setSortOrder("desc");
        setSortBy(label);
    }else if(sortOrder==="desc"){
        setSortOrder(null);
        setSortBy(null);
    }
}

const updatedConfig = config.map((column)=>{
    if(!column.sortValue){
        return column;
    }
    return {
        ...column,
        header:()=> <th className="cursor-pointer hover:bg-gray-300" onClick={()=>handleClick(column.label)}>
            <div className="flex items-center">
            {getIcons(column.label,sortBy,sortOrder)}
            {column.label}</div> </th>
    }
})
//only sort data if sortorder && sortBy are not null
//make a copy of the "data" prop
let sortedData=data;
if(sortOrder&&sortBy){
  const {sortValue} =  config.find(column=>column.label===sortBy);
    sortedData=[...data].sort((a,b)=>{
        const valueA=sortValue(a);
        const valueB=sortValue(b);

        const reversedOrder=sortOrder==="asc"? 1:-1
        if(typeof valueA==="string"){
            return valueA.localeCompare(valueB)*reversedOrder;
        }else{
            return(valueA -valueB)*reversedOrder;
        }  
    })
}

//over writing the first config 
    return <Table {...props} config={updatedConfig} data={sortedData}></Table>
}
function getIcons(label,sortBy,sortOrder){
    if(label!==sortBy){
       return <div>
        <GoTriangleUp></GoTriangleUp>
        <GoTriangleDown></GoTriangleDown>
       </div>
    }
    if(sortOrder===null){
        return <div>
        <GoTriangleUp></GoTriangleUp>
        <GoTriangleDown></GoTriangleDown>
       </div>
    }else if(sortOrder==="asc")
    return <div>
    <GoTriangleUp></GoTriangleUp>
  
   </div>
    else if(sortOrder==="desc")
    return <div>
   
    <GoTriangleDown></GoTriangleDown>
   </div>
}

export default SortableTable;