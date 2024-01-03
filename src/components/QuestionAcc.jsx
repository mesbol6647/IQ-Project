import React, {useState} from "react";
import Button from 'react-bootstrap/Button';

const QuestionAcc = ({title, text, handleRemove}) => {
    const [clicked, setClicked] = useState(0);

    // const [question, answer] = item

    const handleToggleActive = () => {
        let newActive = clicked.active === 1 ? 0 : 1;
        setClicked({...clicked, active : newActive});
    }
   


  return (
    <div className={`w-full p-5 bg-[#e9e9e9] border border-[#c9c6c655] rounded-md mb-5 
    duration-500 group ${clicked.active === 1 ? 'is-active bg-white' : ''}`}
    >
        <div className=" w-full  flex items-center">
            <div className="w-full  duration-500 group-[.is-active]:font-bold">
            {title} 
            </div>
            <div className="text-xl rotate-90 
            duration-500 group-[.is-active]:rotate-[270deg]"
             onClick={handleToggleActive}
            > *
            <button 
                className="btn btn-danger btn-sm remove-product"
                onClick={handleRemove}>
                <i className="fa-solid fa-trash-can me-2"></i>
              </button>
                
            </div>
        </div>
        <div className="overflow-hidden  max-h-0  duration-500 group-[.is-active]:max-h-[100px]">
            {text}
            
        </div>
    </div>
  )
}

export default QuestionAcc