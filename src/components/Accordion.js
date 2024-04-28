import React, { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accordion = (props) => {
  const { dess, description,featuredproducts,productCategories } = props || {};
  const [activeIndex, setActiveIndex] = useState(1);
  const questionsAnswers = [
    
    {
      question: "Опис",
      answer:
      <div
      className="singl_product_description mb-5 mt-10 "
                      dangerouslySetInnerHTML={ {
                        __html: description,
                      } }
                    
                    />,
    },
    {
      question: "Додаткова інформація",
      answer:dess
     
    },
   
   
  ];

  const renderedQuestionsAnswers = questionsAnswers.map((item, index) => {
    const showDescription = index === activeIndex ? "show-descriptionn" : "";
    const fontWeightBold = index === activeIndex ? " font-weight-bold " : "";
    
    const ariaExpanded = index === activeIndex ? "true" : "false";
    return (
      <AccordionItem
        showDescription={showDescription}
        fontWeightBold={fontWeightBold}
        ariaExpanded={ariaExpanded}
       
        item={item}
        index={index}
     
        onClick={() => {
          setActiveIndex(index);
        }}
      />
    );
  });

  return (
    <> 
    <div className="faq flex justify-center px-6 flex-col ">
  
      <dl className="faq__list ">{renderedQuestionsAnswers}</dl>
    </div>
    </>
  );
};

export default Accordion;