import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Feedback = ({ addGoodVote, addNeutralVote, addBadVote }) => (
  <div>
    <Button handleClick={addGoodVote} text="good" />
    <Button handleClick={addNeutralVote} text="neutral" />
    <Button handleClick={addBadVote} text="bad" />
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all;
  const positive = good / all * 100;

  if (all == 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  return (
    <div>
      good {good}
      <br />
      neutral {neutral}
      <br />
      bad {bad}
      <br />
      all {all}
      <br />
      average {average}
      <br />
      positive {positive} %
    </div>
  )
}

const App = () => {
  // Each button has his own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const addGoodVote = () => setGood(good + 1);
  const addNeutralVote = () => setNeutral(neutral + 1);
  const addBadVote = () => setBad(bad + 1);

  return (
    <>
      <h1>give feedback</h1>
      <Feedback addGoodVote={addGoodVote} addNeutralVote={addNeutralVote} addBadVote={addBadVote} />
      <h2>statistics</h2>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'));
