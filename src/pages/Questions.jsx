import React, {useEffect, useState} from 'react'
import SearchInput from "../components/SearchInput"
import QuestionAcc from '../components/QuestionAcc';
import axios from 'axios';


const Questions = () => {
  // const [list, setList] = useState([
  //   {
  //     question: "What's your name ?",
  //     answer: "My name is Lun Dev",
  //     active: 1
  //   },
  //   {
  //     question: "What do you do ?",
  //     answer: "I'm FullStack Deveoper",
  //   }
  // ]);

  const url =process.env.REACT_APP_API_URL;
  const [data, setData]=useState([]);
  // const [loading, setLoading]=useState(false);
  const [search, setSearch]=useState("");
  console.log(search);
  const getQuestions = async ()=>{
    // setLoading(true)
    try {
      const {data}= await axios(url)
      console.log(data); 
      setData(data) 
    } catch (error) {
      console.log(error);
    } finally{
      // setLoading(false)
    }
  }
   useEffect(()=>{
    getQuestions();
   },[search])

   const handleRemove = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
    } catch (error) {
      console.log(error);
    }
    getQuestions();
  };



  return (
    <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <SearchInput search={search} setSearch={setSearch}/>
     <h2 className='text-2xl font-bold mt-8 trackking-tight text-gray-900'>All Questions</h2>
        {/* {loading ? (<loading/>)} */}
        {/* <div className='bg-[#f2f2f2] h-screen flex justify-center items-center mt-6'> */}
    <div className='list mt-6'>
    {
        data.map((item, index) => (
          <QuestionAcc 
          key={index}
          title={item.question}
          text={item.answer}
          handleRemove={() => handleRemove(item.id)}
           />
        ))
      }
      {/* </div> */}
    </div>
   </div>
  )
}

export default Questions