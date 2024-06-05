import { useState, useEffect } from "react"
import axios from "axios"

export default function States(){

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [selectedcountry, setSelectedcountry] = useState("");
    const [selectedstate, setSelectedstate] = useState("");
    const [selectedcity, setselectedcity] = useState("");

    useEffect(() => {
        axios.get("https://crio-location-selector.onrender.com/countries")
        .then((response) => {
            setCountries(response.data);
            
        })
        .catch((error) => {
            console.error("Error while fetching countries", error)
        })
    },[])

    useEffect(() => {
        axios.get(`https://crio-location-selector.onrender.com/country=${selectedcountry}/states`)
        .then((response) => {
            setStates(response.data);
            
        })
        .catch((error) => {
            console.error("Error while fetching states", error)
        })
    },[selectedcountry])

    useEffect(() => {
        axios.get(`https://crio-location-selector.onrender.com/country=${selectedcountry}/state=${selectedstate}/cities`)
        .then((response) => {
            setCities(response.data);
            
        })
        .catch((error) => {
            console.error("Error while fetching cities", error)
        })
    },[selectedstate])

    

console.log(countries)
console.log(states)
    return(
        <div>
            <form>
                
               <h1>Select Location</h1>
           
                <select value={selectedcountry} onChange={(e) => setSelectedcountry(e.target.value)}>
                    <option value="" disabled>Select Country</option>
                    {countries.map((country) => (
                        <option key={country} value={country}>{country}</option>
                    ))}
                </select>
               
                <select value={selectedstate} onChange={(e) => setSelectedstate(e.target.value)}>
                    <option value="" disabled>Select State</option>
                    {states.map((state) => (
                        <option key={state} value={state}>{state}</option>
                    ))}
                </select>

                <select value={selectedcity} onChange={(e) => setselectedcity(e.target.value)}>
                    <option value="" disabled>Select City</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>{city}</option>
                    ))}
                </select>
               
               {selectedcity && <div>You selected {selectedcity}, {selectedstate}, {selectedcountry}</div>}
               
            </form>
        </div>
    )
}