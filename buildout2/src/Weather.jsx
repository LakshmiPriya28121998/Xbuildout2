import { useState, useEffect } from "react"
import axios from "axios"

export default function Weather(){

const [cityname,setCityname] = useState("");
const [cityweather, setCityweather] = useState("");
const [isloading, setIsloading] = useState(false);
const [dataflag, setDataflag] = useState(false)

const handleinput = (event) => {
    setCityname(event.target.value);
}

const handlesearch = (event) => {
    setDataflag(false);
    setIsloading(true);
    event.preventDefault();
    axios.get(`https://api.weatherapi.com/v1/current.json?Key=f328643833b74becac5170716232812&q=${cityname}`)
    .then((response) => {
        setCityweather(response.data);
        setIsloading(false);
        setDataflag(true);
    })
    .catch((error) => {
        // console.error("Error while fetching weather", error)
        alert("Failed to fetch weather data");
        setIsloading(false);
    })
}

{dataflag && console.log(cityweather.current.temp_c)}

// useEffect(() => {
//     handlesearch();
// },[cityname])

 

    return(
       <div>
        <form>
            <input type="text" placeholder="Enter city name" value={cityname} onChange={handleinput}/>
            <button onClick={handlesearch}>Search</button>
        </form>
        {isloading && <p>Loading data...</p>}

           
     {dataflag && <div className='weather-cards' style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}>
        

        <div className="weather-card" style={{
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        margin : "10px",
        padding: "10px",
        border : "1px solid black",
        borderRadius : "8px",
        flexDirection: "column",
        width: "200px"
      }}>
      
      <h2>Temperature</h2>
      <div>{cityweather.current.temp_c}°C</div>
    
      </div>


      
      <div className="weather-card" style={{
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        margin : "10px",
        padding: "10px",
        border : "1px solid black",
        borderRadius : "8px",
        flexDirection: "column",
        width: "200px"
      }}>
      
      <h2>Humidity</h2>
      <div>{cityweather.current.humidity}%</div>
    
      </div>


      <div className="weather-card" style={{
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        margin : "10px",
        padding: "10px",
        border : "1px solid black",
        borderRadius : "8px",
        flexDirection: "column",
        width: "200px"
      }}>
      
      <h2>Condition</h2>
      <div>{cityweather.current.condition.text}</div>
    
      </div>


      <div className="weather-card" style={{
        display: "flex",
        justifyContent : "center",
        alignItems : "center",
        margin : "10px",
        padding: "10px",
        border : "1px solid black",
        borderRadius : "8px",
        flexDirection: "column",
        width: "200px"
      }}>
      
      <h2>Wind Speed</h2>
      <div>{cityweather.current.wind_kph}kph</div>
    
      </div>
              
    </div> }

       </div>
    )
}