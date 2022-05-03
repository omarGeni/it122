export let countries = [
    {
        countryName: "USA",
        capital: "Washington DC",
        populationInMil: 332,
        language: "English"
    },
    {
        countryName: "Turkey",
        capital: "Ankara",
        populationInMil: 84,
        language: "Turkish"
    },
    {
        countryName: "Kyrgyzstan",
        capital: "Bishkek",
        populationInMil: 6,
        language: "Kyrgyz"
    },
    {
        countryName: "Germany",
        capital: "Berlin",
        populationInMil: 83,
        language: "German"
    },
    {
        countryName: "India",
        capital: "New Delhi",
        populationInMil: 1.38,
        language: "Hindi-Urdu"
    }

];

// export const getAll = countries.map(function(country) {
//     return (`country: ${country.countryName}, capital: ${country.capital}, population: ${country.populationInMil} million, language: ${country.language}`)
// })

export const getAll = function () {
    return countries
}


export const getItem = (country) => {
    let arr = countries.find(name => name.countryName.toLocaleLowerCase() === country.toLocaleLowerCase());
    return arr;
}
// export const getItem = function(country){
//     return countries.forEach(country => country.countryName, country.capital, country.populationInMil, country.language)
// }

export const addItem = (country) => {
    let arr = countries.find(name => name.countryName === country.countryName);
    if (arr) {
        console.log('operation failed')
        return false
    } else {
        console.log('operation is successful')
        countries.push(country);
        return countries
    };
} 

export const deleteItem = (country) => {
    let arr = countries.filter(name => name.countryName !== country.countryName);
    if(arr.length < countries.length){
        console.log('operation is successful')
        return arr;
    }else if(arr.length === countries.length){
        console.log('opration failed')
        return arr;
    }else{
        console.log('opration failed')
        return arr;
    }
} 