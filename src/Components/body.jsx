import React, { useState } from 'react';
import { FaSearchLocation } from 'react-icons/fa';
import axios from 'axios';
import './body.css';

const Body = () => {

    const [city, setCity] = useState("");
	const [data, setData] = useState({});

	const handleChange = (e) =>{
		const temp = e.target.value;
		setCity(temp);
	}
		const baseURL = `https://api.openweathermap.org/data/2.5/weather?q=${city.trimEnd()}&appid=e705fbfcf48b118ee65753a961895863`;

	const handleClick = ()=>{
			axios.get(baseURL).then((response)=>{
				setData(response.data)
			});
			setCity('');
	    }

  return (
    <>
        <div className="body">
            <div className="body-header">
                <h1 className="heading1">Welcome to the Weather Application</h1>
                <h2 className="heading2">Get the Weather by Searching for your city.</h2>
                <div className="search-container">
                    <input onChange={handleChange} value={city} className="search-text" type="text" placeholder="Search for city" />
                    <button onClick={handleClick} className="search-button">
                        <FaSearchLocation />
                    </button> 
                </div>
            </div>
            {data.main? <h1 className="city-name">The Weather of {data.name}</h1>:null}
            <div className="data-container">
                {data.main ? <h1 className="data-1">{Math.floor((data.main["temp"])-273)}&deg;C</h1>:null}
                {data.main ? <h1 className="data-2">{(data.weather[0]["description"]).toUpperCase()}</h1>:null}
            </div>
            {data.main ? 
            <div className="data-items">
                <h1 className="data-3"><span className="span1">Pressure</span> {data.main['pressure']+' mbar'}</h1>
                <h1 className="data-3"><span className="span1">Wind Speed</span> {data.wind.speed + "K/H"}</h1>
                <h1 className="data-3"><span className="span1">Humidity</span> {data.main['humidity']}%</h1>
            </div>:null}

        </div>
    </>
  )
}

export default Body;