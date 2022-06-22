import { useState, useEffect } from 'react';
import axios from 'axios';

const FoundCountryForm = ({ handleChange }) => {
	return (
		<div>
			<form>
				<label>find countries</label>
				<input onChange={handleChange} />
			</form>
		</div>
	)
}

const FoundCountry = ({ countries, countryName, handleShow, idCountry }) => {

	const foundCountries = countries.filter(country => country.name.common.toLowerCase().includes(countryName.toLowerCase()));

	if (foundCountries.length === 1 && idCountry === '') {
		return <CountryCard foundCountry={foundCountries} />
	}

	if (foundCountries.length <= 10 && idCountry === '') {
		return <ListCountries foundCountry={foundCountries} handleShow={handleShow} />
	}

	const country = foundCountries.find(country => country.cca2 === idCountry);

	if (country && idCountry !== '') {
		return <CountryCard foundCountry={[country]} />
	}

	return (
		<div>
			<p>Too many matches, specify another life</p>
		</div>
	)
}

const ListCountries = ({ foundCountry, handleShow }) => foundCountry.map(country => {
	return (
		<div key={country.cca2} id={country.cca2}>
			<span >{country.name.common}</span>
			<button onClick={handleShow}>show more</button>
		</div>
	)
});

const CountryCard = ({ foundCountry }) =>
	foundCountry.map(country => {
		return (
			<div key={country.cca2}>
				<h1>{country.name.common}</h1>
				<p>country: {country.capital}</p>
				<p>population: {country.population}</p>
				<h2>Spoken language</h2>
				<ul>
					{Object.values(country.languages).map(language => <li key={language}>{language}</li>)}
				</ul>
				<img src={`${country.flags.svg}`} alt='flagCountry' style={{ width: 350 }} />

				<Weather countryName={country.name.common} />
			</div>
		)
	})

const Weather = ({ countryName }) => {

	const [weather, setWeather] = useState([]);

	useEffect(() => {
		axios.get(`http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_API_KEY}&query=${countryName}`)
			.then(reponse => setWeather(reponse.data.current))
	}, [countryName])

	return (
		<div>
			<h3>Weather in {countryName}</h3>
			<p><strong>temperature:</strong> {weather.temperature} celcius</p>
			<img src={`${weather.weather_icons}`} alt='weatherIcons' />
			<p><strong>wind</strong> {weather.wind_speed} mph direction {weather.wind_dir}</p>
		</div>
	)
}


const App = () => {

	const [countries, setCountries] = useState([]);
	const [countryName, setCountryName] = useState('');
	const [idCountry, setIdCountry] = useState('')

	useEffect(() => {
		axios.get('https://restcountries.com/v3.1/all').then(response =>
			setCountries(response.data)
		);
	}, []);

	const handleChange = (event) => {
		setCountryName(event.target.value);
		setIdCountry('');
	}

	const handleShow = (event) => {
		setIdCountry(event.target.parentNode.id);
	}

	return (
		<div>
			<FoundCountryForm handleChange={handleChange} />
			<FoundCountry countries={countries} countryName={countryName} handleShow={handleShow} idCountry={idCountry} />
		</div>
	)
}

export default App;
