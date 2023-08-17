import { useNavigate } from "react-router-dom";
import  icons from "./icons.png"
import ParentData from "./ParentData";


const ParentTab = ({ movie }) => {
    const navigate=useNavigate();


    function handleClick(e){
        global.values=e.target.value;
      
     console.log(global.values);
      
    
        navigate('/tab');
    }
   
   
    return (
        <ParentData/>
            
            
    )
}
export default ParentTab;