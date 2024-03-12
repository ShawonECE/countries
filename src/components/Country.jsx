import { useState } from "react";

const Country = ({country, totalVisited, setTotalVisited}) => {
    const {name, flags, capital, population, region, timezones, languages, currencies} = country;
    const [visited, setVisited] = useState(false);
    const lang = [];
    const curr = [];
    for (const language in languages) {
        lang.push(languages[language]);
    }
    for (const key in currencies) {
        curr.push(currencies[key].name);
    }

    const markVisited = () => {
        setVisited(!visited);
        setTotalVisited(totalVisited + 1);
    };
    return (
        <div className="card bg-base-100 shadow-xl">
            <figure><img src={flags.png} alt="flag" /></figure>
            <div className="card-body">
                <h2 className="card-title">
                    {name.official} ({name.common})
                    <div className={`badge badge-success text-white ${!visited && 'hidden'}`}>Visited</div>
                </h2>
                <h3>Capital: {capital && capital[0]}</h3>
                <h3>Population: {population}</h3>
                <h3>Languages: {lang.toString()}</h3>
                <h3>Currencies: {curr.toString()}</h3>
                <h3>Region: {region}</h3>
                <h3>Timezone: {timezones && timezones[0]}</h3>
                <div className="card-actions justify-end">
                    <div className="badge badge-outline cursor-pointer" onClick={markVisited}>Mark as visited</div>
                </div>
            </div>
        </div>
    );
};

export default Country;