'use client';
import { useState } from 'react';
import { BiChevronUp, BiChevronDown } from 'react-icons/bi';
import './Faq.scss';

const FaqItem = function ({
  question,
  answer,
}: {
  question: any;
  answer: any;
}) {
  const [isFaqOpen, setIsFaqOpen] = useState(false);

  const dropdownHandler = () => {
    setIsFaqOpen(!isFaqOpen);
  };

  return (
    <div className='faqItem-main-container' onClick={dropdownHandler}>
      <div className={`faq-question`}>
        {isFaqOpen ? <h3>{question}</h3> : <h3>{question}</h3>}
        {isFaqOpen ? (
          <BiChevronUp style={{ color: 'white' }} size={30} />
        ) : (
          <BiChevronDown style={{ color: 'white' }} size={30} />
        )}
      </div>
      <div
        className={`${isFaqOpen ? 'faq-answer-div-active' : 'faq-answer-div'}`}
      >
        <p>{answer}</p>
      </div>
    </div>
  );
};
export default FaqItem;
