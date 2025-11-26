

function CountryItem({name, flag, capital, continent}) {
  return (
    <div className="country-card">
          <span className="flag">{flag}</span>
          <h2 className="name">{name}</h2>   
          <p className="capital">{capital}</p>
          <p className="continent">{continent}</p>       
          
          <button className="delete-btn">X</button>
        </div>
  );
}
export default CountryItem;