import { useEffect, useState } from "react";
import Country from "./Country";

const Countries = ({totalVisited, setTotalVisited}) => {
    const [countries, setCountries] = useState([]);
    useEffect(() => {
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data));
    }, []);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {
                countries.map((country, idx) => <Country key={idx} country={country} totalVisited={totalVisited} setTotalVisited={setTotalVisited}></Country>)
            }
        </div>
    );
};

export default Countries;