import { useState } from "react";
import "../styles/App.scss";

function App() {




  return (
    <div className="country-info-app">
  <header>
    <h1>Country Info App</h1>
    <p>Explore information about countries, capitals, and flags. Add new countries and filter through the list!</p>
  </header>

  <section className="filters">
    <label>
      By Country
      <input type="text" placeholder="Spain..." />
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
        <option>South America</option>
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

  <section className="country-list">
    <div className="country-card">
      <span className="flag">🇪🇸</span>
      <h2>Spain</h2>
      <p>Madrid</p>
      <p>Europe</p>
      <button className="delete-btn">X</button>
    </div>

    <div className="country-card">
      <span className="flag">🇹🇭</span>
      <h2>Thailand</h2>
      <p>Bangkok</p>
      <p>Asia</p>
      <button className="delete-btn">X</button>
    </div>

    <div className="country-card">
      <span className="flag">🇫🇷</span>
      <h2>France</h2>
      <p>Paris</p>
      <p>Europe</p>
      <button className="delete-btn">X</button>
    </div>

    <div className="country-card">
      <span className="flag">🇺🇸</span>
      <h2>United States of America</h2>
      <p>Washington, D.C.</p>
      <p>North America</p>
      <button className="delete-btn">X</button>
    </div>

    <div className="country-card">
      <span className="flag">🇸🇬</span>
      <h2>Republic of Singapore</h2>
      <p>Singapore</p>
      <p>Asia</p>
      <button className="delete-btn">X</button>
    </div>

    <div className="country-card">
      <span className="flag">🇫🇷</span>
      <h2>French Polynesia</h2>
      <p>Papeeté</p>
      <p>Oceania</p>
      <button className="delete-btn">X</button>
    </div>  

    <div className="country-card">
      <span className="flag">🇹🇼</span>
      <h2>Taiwan</h2>
      <p>Taipei</p>
      <p>Asia</p>
      <button className="delete-btn">X</button>
    </div>   

    <div className="country-card">
      <span className="flag">🇧🇷</span>
      <h2>Brazil</h2>
      <p>Brasília</p>
      <p>South America</p>
      <button className="delete-btn">X</button>
    </div>  

    <div className="country-card">
      <span className="flag">🇬🇳</span>
      <h2>Republic of Guinea</h2>
      <p>Conakry</p>
      <p>Africa</p>
      <button className="delete-btn">X</button>
    </div>   
  </section>
</div>

  );
}

export default App;
