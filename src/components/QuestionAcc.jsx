import React, {useState} from "react";
import Button from "react-bootstrap/Button";
import { FaArrowAltCircleDown } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const QuestionAcc = ({title, text, handleRemove}) => {
    const [clicked, setClicked] = useState(0);

    // const [question, answer] = item

    const handleToggleActive = () => {
        let newActive = clicked.active === 1 ? 0 : 1;
        setClicked({...clicked, active : newActive});
    }
   


  return (
    <div className={`w-full p-5 bg-[#E5CFF7] border border-[#c9c6c655] rounded-md mb-5 
    duration-100 group ${clicked.active === 1 ? 'is-active bg-white' : ''}`}
    >
        <div className=" w-full flex items-center">
            <div className="w-full  duration-500 group-[.is-active]:font-bold">
            {title} 
            </div>
            <div className="bg-[#5B0888] text-white mx-3 p-1" onClick={handleRemove}>                
                 <FaTrashAlt />
            </div>                
              
            <div className="text-xl bg-[#5B0888] text-white p-0.5
            duration-100 group-[.is-active]:rotate-[180deg]"
             onClick={handleToggleActive}
            > 
             <FaArrowAltCircleDown />
           
                
            </div>
        </div>
        
        <div className="overflow-hidden  max-h-0  duration-100 group-[.is-active]:max-h-[100px]">
            {text}
            
        </div>
    </div>
  )
}

export default QuestionAcc