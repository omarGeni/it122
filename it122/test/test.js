import  { expect } from 'chai';
import {countries, getItem, deleteItem, addItem} from "../data.js";


let country = {
    countryName: "USA",
    capital: "Washington DC",
    populationInMil: 332,
    language: "English"
}

let country2 = {
    countryName: "England",
    capital: "London",
    populationInMil: 72,
    language: "English"
}

describe("test data module", () => {
 it("returns requested country", function() {
   var result = getItem(country.countryName);
   expect(result).to.deep.equal(country)

 });

 it("fails w/ invalid country", () => {
   var result = getItem(country.countryName);
   expect(result).to.deep.equal(countries)
 });

 it("fails to delete requested country", () => {
    var result = deleteItem(country2);
    expect(result).to.deep.equal(countries)
  });
 it("deleted requested country", function() {
   var result = deleteItem(country);
   expect(result).to.deep.equal(countries)

 });

 it("adds requested country", function() {
   var result = addItem(country2);
   expect(result).to.deep.equal(countries)

 });

 it("fails country already exist", () => {
   var result = addItem(country);
   expect(result).to.deep.equal(countries)
 });

});
