//2.USE THE REST COUNTRIES API AND PRINT THE FLAGS OF ALL COUNTRIES;

function printData() {
  const countries = JSON.parse(this.responseText);
  countries.forEach((c) => console.log(c.flags));
}
 
var request = new XMLHttpRequest();
request.addEventListener("load",printData);
request.open("GET","https://restcountries.com/v3.1/all");
request.send();


//3.USE THE SAME REST COUNTRIES API AND PRINT THE COUNTRIES OF NAME,REGION,SUB REGION AND POPULATION;

function printData() {
  const countries = JSON.parse(this.responseText);
  countries.forEach((c) => console.log(c.name,c.region,c.subregion,c.population));
}
 
var request = new XMLHttpRequest();
request.addEventListener("load",printData);
request.open("GET","https://restcountries.com/v3.1/all");
request.send();