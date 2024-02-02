//1 object to talk with the backend
var xhr = new XMLHttpRequest();
// 2- use open method

xhr.open("get", "https://forkify-api.herokuapp.com/api/search?q=pizza");
//send to the server to get the data
xhr.send();
xhr.addEventListener("readystatechange", function () {
  if (xhr.readyState == 4) {
    console.log(JSON.parse(xhr.responseText));
  }
});
