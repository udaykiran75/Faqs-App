import './index.css'
import {Component} from 'react'

class FaqItem extends Component {
  state = {
    isActive: false,
  }

  renderAnswer = () => {
    const {isActive} = this.state
    const {faqDetails} = this.props
    const {answerText} = faqDetails

    if (isActive) {
      return (
        <div>
          <hr />
          <p className='answer'>{answerText}</p>
        </div>
      )
    }
  }

  onClickIcon = () => {
    this.setState(prevState => ({isActive: !prevState.isActive}))
  }

  renderActiveImage = () => {
    const {isActive} = this.state
    const image = isActive
      ? 'https://assets.ccbp.in/frontend/react-js/faqs-minus-icon-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/faqs-plus-icon-img.png'
    const altImage = isActive ? 'minus' : 'plus'

    return (
      <button className="button">
        <img
          src={image}
          alt={altImage}
          className="icon"
          onClick={this.onClickIcon}
        />
      </button>
    )
  }

  render() {
    const {faqDetails} = this.props
    const {id, questionText, answerText} = faqDetails

    return (
      <li className="listItem">
        <div className="question-continer">
          <h1 className="question">{questionText}</h1>
          {this.renderActiveImage()}
        </div>
        {this.renderAnswer()}
      </li>
    )
  }
}
export default FaqItem
