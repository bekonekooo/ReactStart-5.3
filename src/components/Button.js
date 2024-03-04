import classnames from "classnames"

 
function Button ({
    children,
    primary,
    secondary,
    success,
    warning,
    danger,
    outline,
    rounded,
    ...rest
}){
   
    const classes=classnames(rest.className,"flex items-center px-3 py-1.5 border",{
        "border-blue-600 bg-blue-500 text-white":primary,
        "border-gray-600 bg-gray-500 text-white":secondary,
        "border-red-500 bg-red-500 text-white":danger,
        "border-green-600 bg-green-500 text-white-500":success,
        "border-yellow-400 bg-yellow-400 text-white":warning,
        "rounded-full":rounded,
        "bg-white text-black ":outline,
        "text-blue-500": outline && primary,
        "text-gray-900": outline && secondary,
        "text-green-500": outline && success,
        "text-red-500": outline && danger,
        "text-yellow-500": outline && warning,
    })


    return<button {...rest}  className={classes}>{children}</button>  
} 
Button.propTypes={
        checkVariationValue :({ primary,secondary,success,warning,danger}
            )=>{
                const count=Number(!!primary)
                +Number(!!secondary)
                +Number(!!warning)
                +Number(!!success)
                +Number(!!danger)
                if(count>1){
                    return new Error("ONLY one color can be styled")
                }

        }
    }
export default Button;