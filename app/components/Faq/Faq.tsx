import FaqItem from './FaqItem';
import { questionAnswerList } from './faq-content';

const Faq = function () {
  console.log(questionAnswerList);
  return (
    <div className='faq-container'>
      <h1>FAQ</h1>
      <h2>Frequently Asked Questions</h2>
      <h3>
        Frequently asked questions about the car rental booking process on our
        website: answers to common concerns and inquiries
      </h3>
      {questionAnswerList.map((item) => {
        return <FaqItem question={item.question} answer={item.answer} />;
      })}
    </div>
  );
};
export default Faq;
