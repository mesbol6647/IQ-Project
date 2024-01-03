import { GoChevronDown } from "react-icons/go";
import { Button } from "react-bootstrap";




const AddQuestionForm = ({ formData,handleChange,handleSubmit,text }) => {
  
  
    return (
      <article id="add-product" className="mb-4 mt-4">
        <div className="row justify-content-center">
      <div className="w-full col-md-6"></div>
        <h1 className="text-center text-2xl font-bold mb-4">{text} Questions</h1>
        <form className=" bg-formColor w-full  mx-auto p-4 border rounded-md shadow-md" onSubmit={handleSubmit}>
          <div className="w-full mb-4 " >
            <label for="add-name" className="block text-sm font-medium text-gray-600">
             Question
            </label>
            <input
              rows={6} 
              type="text-area"
              className="form-input w-full mt-1 block"
               style={{ minHeight: '200px' }}
              id="question"
              value={formData.question}
              onChange={handleChange}
              required
            />
          </div>
          <div class="mb-4">
            <label for="add-price" className="block text-sm font-medium text-gray-600">
              Answer
            </label>
            <input
              type="text"
              className="form-input w-full mt-1 block"style={{ minHeight: '300px' }}
              id="answer"
              value={formData.answer}
              onChange={handleChange}
              required
            />
          </div>
  
          <div className="text-center"><GoChevronDown />
          <Button type="submit" className="add-to-cart btn btn-success btn-sm">
              <i className="fa-solid fa-cart-plus me-2"></i>Save To {text} Question
              
            </Button>
          </div>
        </form>
        </div>
    
      </article>
    );
  };
  
  export default AddQuestionForm;
  
  //? inputları doıldurup boşaltabilmek için value attributeunu kullandık ve değer olarakda formDatadan gelen verileri koyduk 
  //? tek bir handlechange fonksiyonuyla birden fazla inputtan veri almış olduk
  
  
  