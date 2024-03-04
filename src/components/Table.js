import { Fragment } from "react";


function Table({data,config,keyFn}){

const renderedColumns=config.map((column)=>{
if(column.header){
    return   <Fragment key={column.label}>{column.header()}</Fragment>  
}else
return <th key={column.label}> {column.label}</th>
})

const renderedFruits=data.map((fruit)=>{
    const renderedCells = config.map((column)=>{
    
        return <th className="p-2" key={column.label}>
            {column.render(fruit)}
            </th>
    })
    return( <tr className="border-b" key={keyFn(fruit)}>
            {renderedCells}
        </tr>)
       
})

    return <table className="table-auto border-spacing-2">
        <thead>
            <tr className="border-b-2">
                {renderedColumns} 
            </tr>
        </thead>
        <tbody>
            {renderedFruits}
        </tbody>
    </table>

}
export default Table;