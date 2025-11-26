import CountryItem from "./CountryItem";


function CountryList({ countriesNames }) {
  return (
    <section className="country-list">
      {countriesNames.map((country) => (
        <CountryItem
        key={country.name}
        name={country.name}
        flag= {country.flag}
        capital= {country.capital}
        continent= {country.continent}
        />
      ))}

      
    </section>
  );
}

export default CountryList;
