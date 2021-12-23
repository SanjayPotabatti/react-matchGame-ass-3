import './index.css'

const GameOver = props => {
  const {scoreValue, onClickPlayAgain} = props

  const onClickPlay = () => {
    onClickPlayAgain()
    console.log('worked')
  }

  return (
    <div className="gameOverBg d-flex flex-column justify-content-center align-items-center">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png"
          alt="tropy"
          className="tropyImg"
        />
        <h1 className="yourScoreText">YOUR SCORE</h1>
        <h1 className="scoreText">{scoreValue}</h1>
        <button type="button" className="playButton" onClick={onClickPlay}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png"
            alt="reset"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
