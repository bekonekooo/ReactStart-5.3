import useNavigaiton from "../hooks/useNavigation"
import classNames from "classnames";


function Link({to,children,className,activeClassName}){
 const {navigate,currentPath}=useNavigaiton();

 const classes =classNames(
   "text-blue-500",
    className,
    currentPath===to && activeClassName
    );

 const handleClick=(event)=>{
   if(event.metaKey || event.ctrlKey){
      return;
   }
    event.preventDefault();
    navigate(to)
 }
 return <a className={classes} href={to}  onClick={handleClick}> {children}</a>
}
export default Link;