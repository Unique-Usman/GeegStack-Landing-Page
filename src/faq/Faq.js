import "./Faq.css";

export default function Faq({ faqs, displayForm}) {
  return (
    <div className="geegstack-faq">
      <h1>Frequently Asked Questions</h1>
      <p className="geegstack-faqp">
        We love to hear questions from our prospective studnts almost as much as
        we love providing answers to them. Here are a few questions along with
        our responses:
      </p>
      <ul className="faq">
        {faqs.map((faq, index) => {
          return (
            <li key={index} className="faq-li">
              <p className="faq-q">{faq.header}</p>
              <ol className="answers" type="a">
                {faq.content.map((ans, ind) => {
                  return <li className="ans" key={ind}>{ans}</li>;
                })}
              </ol>
            </li>
          );
        })}
      </ul>
      <button className="faq-btn" onClick={displayForm}>Get Program Package</button>
    </div>
  );
}
