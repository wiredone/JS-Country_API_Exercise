window.onload = function (){
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
      console.log(country.name);
    }

  }
  console.log("hello, or something");

  request.send(null);
}
