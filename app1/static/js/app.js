//CSV file data parsing to variables
//Global variables containing the data for each of the files.
var csvFile1;
var csvFile2;
var csvFile3;


//$(document).ready(function(){
//      $('#vis1').onClick(dataForCsv1());
//     $('#vis2').click(showFile2());
//     $('#vis3').click(showFile3());

//     $('button#test').click(dataVariable());
 //});

//Parsing data from the app.py to here in JSON format and converting to a useable format.
function dataForCsv1(){
    $.get('/csv1', function(response){
        csvFile1 = JSON.parse(response);
        graph();
    });
};
function dataForCsv2(){
    $.get('/csv2', function(response){
        csvFile2 = JSON.parse(response);
        showFile2();
    });
};
function dataForCsv3(){
    $.get('/csv3', function(response){
        csvFile3 = JSON.parse(response);
        showFile3();
    });
};



//Functions for displaying the data for the three files.
function showFile1(){
    $("svg").empty();  
    // a common thing is to 'wrap' some elements in a 'g' container (group)
    // this is like wrapping html elements in a container div
    var g = d3.select("svg").selectAll("g").data(csvFile1);

    // create new 'g' elements for each country
    var en = g.enter().append("g")
        .attr("transform",function(d){ 
        return "translate("+ (Math.random() * 1100) + 40 + "," + (Math.random() * 600) + 40 +")" 
    });

    // add a circle to each 'g'
    var circle = en.append("circle")
        .attr("r",function(d){ return Math.random() * 20 })
        .attr("fill",function(d,i){ return i % 2 == 0 ? "red" : "blue" });

    // add a text to each 'g'
    en.append("text").text(function(d){ return d.name });
};

function showFile2(){
    $("svg").empty();
    // a common thing is to 'wrap' some elements in a 'g' container (group)
    // this is like wrapping html elements in a container div
    var g = d3.select("svg").selectAll("g").data(csvFile2);

    // create new 'g' elements for each country
    var en = g.enter().append("g")
        .attr("transform",function(d){ 
        return "translate("+ (Math.random() * 1100) + 40 + "," + (Math.random() * 600) + 40 +")" 
    });

    // add a circle to each 'g'
    var circle = en.append("circle")
        .attr("r",function(d){ return Math.random() * 20 })
        .attr("fill",function(d,i){ return i % 2 == 0 ? "green" : "yellow" });

    // add a text to each 'g'
    en.append("text").text(function(d){ return d.name });
};

function showFile3(){
    $("svg").empty();
    // a common thing is to 'wrap' some elements in a 'g' container (group)
    // this is like wrapping html elements in a container div
    var g = d3.select("svg").selectAll("g").data(csvFile3);

    // create new 'g' elements for each country
    var en = g.enter().append("g")
        .attr("transform",function(d){ 
        return "translate("+ (Math.random() * 1100) + 40 + "," + (Math.random() * 600) + 40 +")" 
    });

    // add a circle to each 'g'
    var circle = en.append("circle")
        .attr("r",function(d){ return Math.random() * 20 })
        .attr("fill",function(d,i){ return i % 2 == 0 ? "orange" : "pink" });

    // add a text to each 'g'
    en.append("text").text(function(d){ return d.name });
};

function graph(){
    // I need to seperate the columns so it knows which year is acioated with witch data entry
    // loop through each year as a array item like a slider or a picker so you can go through different years
    // from 2 up so it skips the country name '[2], [3], [4], ...' and so on.
    // then do some thing with the data now accesable  (Graph it)
    // if array item number equals variable set to array item number do code then incriment if slider moves again
    $("svg").empty();
    //var g = d3.select("svg").selectAll("g").data(csvFile3);
    

    //call item from a point in an array !!
    var arrLength = csvFile1.length; //Getting the length of the array
    
    console.log(csvFile1[0].name);    
    console.log(csvFile1[0].data.aged_25_54_labour_force_participation_rate_percent["1990"]); //??? this just calls the whole dict accioated with the country
    console.log(csvFile1[1].name); //is there a way of getting just one item from dict?
    console.log(csvFile1[1].data);  //Like this


    // var temp = csvFile1[i].data.aged_25_54_labour_force_participation_rate_percent["1990"];
    // console.log(temp);
    var g = d3.select("svg").selectAll("g").data(csvFile1);

    // create new 'g' elements for each country
    var en = g.enter().append("g")
        .attr("transform",function(d){ 
        return "translate("+ (Math.random() * 1100) + 40 + "," + (Math.random() * 600) + 40 +")" 
    });

    // add a circle to each 'g'
    //if slider is 'year' do \/
    //getElementById 'year'
    var circle = en.append("circle")
        .attr("r",function(d,i){ 
            return csvFile1[i].data.aged_25_54_labour_force_participation_rate_percent["1990"]/4
        })
        .attr("fill",function(d,i){ return i % 2 == 0 ? "red" : "blue" });

    // add a text to each 'g'
    en.append("text").text(function(d){ return d.name });

};
   
       

