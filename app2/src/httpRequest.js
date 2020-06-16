const fetch = require("node-fetch");
var usableData;

//Calling the URL from App1 which has the json data.
var url = "http://192.168.1.156:80/csv4";
// $.getJSON(url, function(data) {
// //   console.log("Data from App1")
// //   console.log(data)
//     localStorage.setItem('data', JSON.stringify(data))
//     usableData = localStorage.getItem('data'); 
//     console.log('UsableData: ', JSON.parse(usableData));
// });

fetch("http://192.168.1.156:80/csv4")
    .then(res => res.json())
    .then(data => usableData = data)
    .then(() => console.log(usableData));



// localStorage.setItem('data', JSON.stringify(tmep));
// usableData = localStorage.getItem('data'); 
// console.log('UsableData: ', JSON.parse(usableData));
//loop for adding the countries to the drop down selection.
// var select = document.getElementById('select2');
// for (var i =0; i < usableData.length; i++){
//     select.innerHTML = select.innerHTML +
//         '<option value="' + usableData[i]['id'] + '">' + usableData[i]['name'] + '</option>'
// }
