import './index.css'
import FaqItem from '../FaqItem'

const Faqs = props => {
  const {faqsList} = props
  return (
    <div className="bg-container">
      <div className="card-bg-container">
        <h1 className="heading">FAQs</h1>
        <ul className="question-div">
          {faqsList.map(eachItem => (
            <FaqItem faqDetails={eachItem} key={eachItem.id} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Faqs
