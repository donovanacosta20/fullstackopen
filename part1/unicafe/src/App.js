import { useState } from 'react';

const Statistics = ({ good, neutral, bad }) => {

	const total = good + neutral + bad;
	const positive = (good / total) * 100;
	const average = (good - bad) / total;

	if (good === 0 && neutral === 0 && bad === 0) {
		return (
			<p>No feedback given</p>
		)
	}

	return (
		<table>
			<tbody>
				<Statistic value={good} text='good' />
				<Statistic value={neutral} text='neutral' />
				<Statistic value={bad} text='bad' />
				<Statistic value={total} text='all' />
				<Statistic value={average} text='average' />
				<Statistic value={positive} text='positive' />
			</tbody>
		</table>
	)
}

const Statistic = ({ value, text }) => {

	if (text === 'positive') {
		return (
			<tr>
				<td>{text} {value}%</td>
			</tr>
		)
	}

	return (
		<tr>
			<td>{text} {value}</td>
		</tr>
	)
}


const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>
		{text}
	</button>
)

const App = () => {

	const [good, setGood] = useState(0);
	const [neutral, setNeutral] = useState(0);
	const [bad, setBad] = useState(0);

	const handleGoodClick = () => {
		setGood(good + 1);
	}

	const handleNeutralClick = () => {
		setNeutral(neutral + 1);
	}

	const handleBadClick = () => {
		setBad(bad + 1);
	}

	return (
		<div>
			<h1>give feedback</h1>
			<Button handleClick={handleGoodClick} text={'good'} />
			<Button handleClick={handleNeutralClick} text={'neutral'} />
			<Button handleClick={handleBadClick} text={'bad'} />

			<h2>statistics</h2>

			<Statistics good={good} neutral={neutral} bad={bad} />



		</div>
	)
}

export default App;