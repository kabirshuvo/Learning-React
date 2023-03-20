const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(resp => resp.json())
    .then(data => displayCountries(data))
}

const displayCountries =(countries)=>{
    console.log(countries[0]);
    const countriesHTML = countries.map(country =>getCountryHTML(country))
    //console.log(countriesHTML[0]);
    const container = document.getElementById('countries');
    container.innerHTML = countriesHTML.join(' ');
}

const getCountryHTML = (country) => {
    return `
        <div class="country">
        <div class="name_capital">
        <h2>${country.name.common}</h2>
        <h3>${country.capital}</h3>
        </div>
        <img src="${country.flags.png}"/>
        </div>
    
    `;
}

loadCountries();