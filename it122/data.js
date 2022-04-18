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

export const getAll = countries.map((country => {
    return (`country: ${country.countryName}, capital: ${country.capital}, population: ${country.populationInMil} million, language: ${country.language}`)
}))


export const getItem = (country) => {
    if (country === 'countryname=usa') {
        return "USA"
    } else if (country === 'countryName=turkey') {
        return "Turkey"
    } else if (country === 'countryname=kyrgyzstan') {
        return "Kyrgyzstan"
    } else if (country === 'countryname=germany') {
        return "Germany"
    } else if (country ==='countryname=india') {
        return "India"
    } 
    else {
        console.log('Data is not found')
    }
}

// export const getItem = (country) => {
//     if (countries.country === 'USA') {
//         return "USA"
//     } 


//     else {
//         console.log('Data is not found')
//     }
// }

