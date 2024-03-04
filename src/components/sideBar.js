import React from "react";
import Link from "./Link";

function sideBar(){

    const Links=[
        {label : "DropDown" ,   path:"/" },
        {label : "Accordion",   path:"/accordion" },
        {label : "Buttons"  ,   path:"/buttons" },
        {label:  "Modal"    ,   path:"/modal"},
        {label:  "Table"    ,   path:"/table"}
    ]
    const renderedLinks =Links.map((link)=>{
        return <Link
         className="mb-3"
          to={link.path} 
          key={link.label}
          activeClassName={"font-bold border-l-4 blue-500 pl-2"}
          >{link.label}</Link>
    })

        return <div className="sticky top-0 overflow-y-hide
         flex flex-col items-start">
            {renderedLinks}
        </div>
}
export default sideBar;