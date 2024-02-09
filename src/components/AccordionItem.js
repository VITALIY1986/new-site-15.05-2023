import React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  colorActive,
  item,
  index,
  onClick,
}) => (
  <div className="faq__questionn" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
        aria-controls={`faqq${index + 1}_descc`}
        data-qa="faqq__question-buttonn"
        className={`faqq__question-buttonn text-xl bg-white  ${fontWeightBold}`}
        onClick={onClick}
      >
        {item.question}
      </button>
    </dt>
    <dd>
      <p
        id={`faqq${index + 1}_descc`}
        data-qa="faqq__descc"
        className={`faqq__descc ${showDescription}`}
      >
        {item.answer}
      </p>
    </dd>
  </div>
);

export default AccordionItem;