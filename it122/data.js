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
    }
];

export const getAll = countries.map((country => {
    return (`country: ${country.countryName}, capital: ${country.capital}, population: ${country.populationInMil} million, language: ${country.language}`)
}))

const countryVar = countries[0];
export const getItem = (req) => {    
        if(req === 'capital'){
            return countryVar.capital;
        }
        else if(req === 'countryName'){
            return countryVar.countryName;
        }
        else if(req === 'populationInMil'){
            return countryVar.populationInMil;
        } else if(req === 'language'){
            return countryVar.language;
        }
        else {
            console.log('Data is not found')
        }
}