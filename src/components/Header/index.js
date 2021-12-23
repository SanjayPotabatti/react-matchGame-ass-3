import './index.css'

const Header = props => {
  const {scoreValue, timeValue} = props

  return (
    <nav className="headerBgContainer navbar p-3 d-flex flex-row align-items-center">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
        alt="website logo"
        className="webLogoImg"
      />
      <div className="d-flex flex-row align-items-start">
        <p className="scoreText">
          Score: <span className="heiglightedText pt-1">{scoreValue}</span>
        </p>
        <div className="d-flex flex-row align-items-start ml-2 ">
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png"
            alt="timer"
            className="timerImg pt-1 pr-1"
          />
          <p className="heiglightedText1 ">{timeValue} sec</p>
        </div>
      </div>
    </nav>
  )
}

export default Header
