const fetch = require("node-fetch");
const Window = require('window');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;
// const LocalStorage = require('node-localstorage').LocalStorage;
const window = new Window();
//global.document = new JSDOM(html).window.document;
// localStorage = new LocalStorage('./scratch');
//Calling the URL from App1 which has the json data.
var url = "http://10.25.138.110:80/csv1"; //OP network
var url1 = "http://192.168.1.156:80/csv4"; //Home network
// $.getJSON(url, function(data) {
// //   console.log("Data from App1")
// //   console.log(data)
//     localStorage.setItem('data', JSON.stringify(data))
//     usableData = localStorage.getItem('data'); 
//     console.log('UsableData: ', JSON.parse(usableData));o
// });

//Selecting the select block to append option to as a dropdown.


window.onload = getData();

async function getData(){
    const json = await fetch('http://10.25.138.110:80/csv1')
        .then(response => response.json());
    console.log(json);
    var sel = window.document.getElementsByClassName("select");
    //loop for adding the countries to the drop down selection.
    for (var i = 0; i < json.length; i++){
        const temp = json[i]['name'];
        
        var opt = window.document.createElement("option");
        opt.appendChild( window.document.createTextNode(temp));
        opt.value = temp;
        console.log(temp);
        // if (sel != null){
        window.document.getElementsByClassName("select")[0].appendChild(opt); //Appending a new select element for each country name
        sel.appendChild(opt);
        console.log("Option for " + temp + " added");
        // }
        
    }
}
// for (var i = 0; i < json.length; i++){
    //     select.innerHTML = select.innerHTML +
    //         '<option value="' + json[i]['id'] + '">' + json[i]['name'] + '</option>'
    // }

    // window.localStorage.setItem('data', JSON.stringify(temp));
    // usableData = window.localStorage.getItem('data'); 
    // console.log('UsableData: ', JSON.parse(usableData));


//Reading data from link take 1
// const response = await fetch("http://10.25.138.110:80/csv1")
//     .then(res => res.json())
//     .then(data => temp = data)
//     .then(() => console.log(temp));
// console.log(response);

//Reading data from link take 2
// const json = await fetch('http://10.25.138.110:80/csv1')
//     .then(response => response.json());
// console.log(json);

//Local storage setup and saving
// localStorage.setItem('data', JSON.stringify(tmep));
// usableData = localStorage.getItem('data'); 
// console.log('UsableData: ', JSON.parse(usableData));

//loop for adding the countries to the drop down selection.
// var select = document.getElementById('select2');
// for (var i =0; i < usableData.length; i++){
//     select.innerHTML = select.innerHTML +
//         '<option value="' + usableData[i]['id'] + '">' + usableData[i]['name'] + '</option>'
// }
