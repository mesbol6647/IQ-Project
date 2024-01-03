import { GoChevronDown } from "react-icons/go";
import { Button } from "react-bootstrap";
import { useState } from "react";

const AddQuestionForm = ({ formData, handleChange, handleSubmit, text }) => {

    const [isQuestionAdded, setIsQuestionAdded] = useState(false);
    const handleClick = () => {
        // Sorunuzun eklenmesiyle ilgili gerekli işlemleri burada yapabilirsiniz.
        // Örneğin bir API isteği gönderip başarı durumunda setIsQuestionAdded(true) gibi.
    
        // Şu anki örnekte sadece durum değişkenini tersine çeviriyoruz.
        setIsQuestionAdded(!isQuestionAdded);
      };

  return (
    <article id="add-product" className="mb-4 mt-4">
      <div className="row justify-content-center">
        <div className="w-full col-md-6"></div>
        <h1 className="text-center text-2xl font-bold mb-4">
          {text} Questions
        </h1>
        <form
          className=" bg-formColor w-full  mx-auto p-4 border rounded-md shadow-md"
          onSubmit={handleSubmit}
        >
          <div className="w-full mb-4 ">
            <label
              for="add-name"
              className="block text-lg font-medium text-black-600"
            >
              Question
            </label>
            <textarea
              id="question"
              className="form-input w-full mt-1 block"
              value={formData.question}
              onChange={handleChange}
              rows={10}
              style={{ resize: "none" }}
              required
            />
          </div>
          <div class="mb-4">
            <label
              for="add-price"
              className="block text-lg font-medium text-black-600"
            >
              Answer
            </label>
            <textarea
              id="answer"
              className="form-input w-full mt-1 block"
              value={formData.answer}
              onChange={handleChange}
              rows={10}
              style={{ resize: "none" }}
              required
            />
          </div>
          <div className="text-center">
            <button class={`rounded-[12px] bg-[#5B0888] text-white p-2 ${isQuestionAdded ? 'hidden' : ''}`}
            onClick={handleClick}
            >Add {text} Question</button>
            {isQuestionAdded && (
            <p className="text-white-500 font-bold">Your question has been added!</p>
            )}
          </div>
        </form>
      </div>
    </article>
  );
};

export default AddQuestionForm;

//? inputları doıldurup boşaltabilmek için value attributeunu kullandık ve değer olarakda formDatadan gelen verileri koyduk
//? tek bir handlechange fonksiyonuyla birden fazla inputtan veri almış olduk
