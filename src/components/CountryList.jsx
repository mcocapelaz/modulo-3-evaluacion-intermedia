
function CountryList({countriesNames}) { return (
<div className="country-info-app">
  {countriesNames.map((country) => (
  <div className="country-card" key={country.name}>
    <span className="flag">{country.flag}</span>
    <h2>{country.name}</h2>
  </div>
  ) )}
</div>
); 
} 

export default CountryList;
