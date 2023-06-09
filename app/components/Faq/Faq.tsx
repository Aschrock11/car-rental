import FaqItem from './FaqItem';
import { questionAnswerList } from './faq-content.js';

const Faq = function () {
  console.log(questionAnswerList);
  return (
    <div className='faq-container'>
      <h1>FAQ</h1>
      <h2>Frequently Asked Questions</h2>
      <h3 className='faq-h3'>
        Frequently asked questions about the car rental booking process on our
        website: answers to common concerns and inquiries
      </h3>
      <div className='question-answer-container'>
        {questionAnswerList.map((item) => {
          return (
            <FaqItem
              key={item.question}
              question={item.question}
              answer={item.answer}
            />
          );
        })}
      </div>
      <img className='red-car' src='./redcar.png' alt='' />
    </div>
  );
};
export default Faq;
