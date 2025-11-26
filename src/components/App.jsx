import { useState } from "react";
import "../styles/App.scss";
import CountryList from "./CountryList.jsx";


function App() {
  const [countriesNames, _setCountriesNames] = useState([
    { name: "Spain", flag: "🇪🇸", capital: "Madrid", continent: "Europe" },
    { name: "Thailand", flag: "🇹🇭", capital: "Bangkok", continent: "Asia" },
    { name: "France", flag: "🇫🇷", capital: "Paris", continent: "Europe" },
    { name: "United States of America", flag: "🇺🇸", capital: "Washington D.C.", continent: "North America" },
    { name: "Republic of Singapore", flag: "🇸🇬", capital: "Singapore", continent: "Asia" },
    { name: "French Polynesia", flag: "🇫🇷", capital: "Papeeté", continent: "Oceania"  },
    { name: "Taiwan", flag: "🇹🇼", capital: "Taipei", continent: "Asia" },
    { name: "Brazil", flag: "🇧🇷", capital: "Brazilia", continent: "South America" },
    { name: "Republic of Guinea", flag: "🇬🇳", capital: "Conakry", continent: "Africa"  },
  ]);
 

  const [filterText, setFilterText] = useState("");

  const filteredCountries = countriesNames.filter((country) =>
    country.name.toLowerCase().includes(filterText.toLowerCase())
  );

  return (
    <div className="country-info-app">
      <header>
        <h1>Country Info App</h1>
        <p>
          Explore information about countries, capitals, and flags. Add new
          countries and filter through the list!
        </p>
      </header>

      <section className="filters">
        <label>
          By Country
          <input
            type="text"
            placeholder="Spain..."
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
          />
        </label>
        <label>
          By Continent
          <select>
            <option>All</option>
            <option>Europe</option>
            <option>Asia</option>
            <option>Africa</option>
            <option>Oceania</option>
            <option>North America</option>
          </select>
        </label>
      </section>

      <section className="add-country">
        <input type="text" placeholder="Country Name" />
        <input type="text" placeholder="Capital" />
        <input type="text" placeholder="Flag Icon" />
        <input type="text" placeholder="Continent" />
        <button>Add Country</button>
      </section>

      
        <CountryList countriesNames={filteredCountries} />
    </div>

   
  );
}

export default App;
