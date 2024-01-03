import React, { useState } from 'react'
import AddQuestionsForm from "../components/AddQuestionsForm";
import axios from 'axios';


const initalState = {
  question: "",
  answer: "",
  
};
const AddQuestions = () => {
  const url =process.env.REACT_APP_API_URL;
  const [formData,setFormData] = useState(initalState)

  const handleChange = (e)=>{
    setFormData({...formData, [e.target.id]:e.target.value })//change eventının gerçekleştiği inputtaki id attribute u ile formDatamdaki key değerlerim aynı olduğu için dinamik bir şekilde formData mı güncelleybiliyorum
    console.log({ [e.target.id]: e.target.value });
  }
  // function handleKeyDown(e) {
  //   if (e.key === 'Enter') {
  //     e.preventDefault(); // Enter tuşunun varsayılan davranışını engelle
  //     const kale = `${e.target.value}\n`; // Alt satıra geç
  //     setFormData({ ...formData, question: kale });
  //   }
  // }

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try {
      await axios.post(url, formData);
      setFormData(initalState)//post işleminden sonra formu boşaltmak için initialState değerini verdik

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div className="container">
      <AddQuestionsForm
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        formData={formData}
        text="New"
      />
    </div>
  );
}

export default AddQuestions


 