


function CountryList({ countriesNames }) {
  return (
    <section className="country-list">
      {countriesNames.map((country) => (
        <div className="country-card" key={country.name}>
          <span className="flag">{country.flag}</span>
          <h2>{country.name}</h2>
        </div>
      ))}
    </section>
  );
}

export default CountryList;
