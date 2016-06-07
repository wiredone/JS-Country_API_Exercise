window.onload = function (){
  getCountriesAjax();
  // console.log("hello, or something");

};

getCountriesAjax = function(){
  var url = 'https://restcountries.eu/rest/v1';
  var request = new XMLHttpRequest();
  //console.log(request)
  request.open("GET", url);
  request.onload = function(){ //callbask, only run when http request has gone to eh api and got the data
    if(request.status === 200){
      console.log("got the data");
      //console.log(request.responseText);
      //refactor  var jsonString = request.responseText;
      var countries = JSON.parse(request.responseText);
      var country = countries[0];
      console.log(country);
      fillCountryArray(countries)
      console.log(country.name);
      console.log(countries.length);
    }
  }
  request.send(null);
}

fillCountryArray = function(countries){
  for (country of countries) {
     var countryNameList = new Array();
     countryNameList.push(country.name);
     buildSelector(country.name) //hmm maybe we don't need the array
  }
}

buildSelector = function(country){
 console.log(country);
 selector = document.getElementById('selector')
 var o = document.createElement("option")
 o.innerText = country
 // var o = document.createElement.
 // var o = document.createElement.
 selector.appendChild(o)
}
