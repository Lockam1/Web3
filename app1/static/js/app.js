//CSV file data parsing to variables
//Global variables containing the data for each of the files.
var csvFile1;
var csvFile2;
var csvFile3;
var year; //Variable to contain the slider year data
var xAxisMax;
var yAxisMax;
var popTotal;
// var file1Data;
// var file2Data;
// var file3Data;

var file; //Gets over written on button click.
var fileName;  //Gets over written on button click with the file name.

//$(document).ready(function(){
//      $('#vis1').onClick(dataForCsv1());
//     $('#vis2').click(showFile2());
//     $('#vis3').click(showFile3());

//     $('button#test').click(dataVariable());
 //});

//Parsing data from the app.py to here in JSON format and converting to a useable format.
function getPopulation(){ //Population Total
    $.get('/csv1', function(response){
        popTotal = JSON.parse(response);
        fileName = "population_total";
    });
};
function dataForCsv2(){ //Forced labour particapation
    $.get('/csv2', function(response){
        csvFile1 = JSON.parse(response);
        file = csvFile1;
        fileName = "aged_25_54_labour_force_participation_rate_percent";
        getPopulation()
        graph()
    });
};
function dataForCsv3(){ //Income per peson per captia
    $.get('/csv3', function(response){
        csvFile2 = JSON.parse(response);
        file = csvFile2;
        fileName = "income_per_person_gdppercapita_ppp_inflation_adjusted";
        showFile2();
    });
};
function dataForCsv4(){ //Life expactancy
    $.get('/csv4', function(response){
        csvFile3 = JSON.parse(response);
        file = csvFile3;
        fileName = "life_expectancy_years";
        showFile3();
    });
};

//Function dedicated to drawing the axis on the graph
function drawGraph(){
    $("svg").empty(); //Emptying the svg ement at every intervile of the slider so the data dosnt stack on top oif its self

    var width = 1100, height = 1100;
  
    var svg = d3.select("svg")
        .attr("id", "axis")
        .attr("width", width)
        .attr("height", height);  

    var xscale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width - 100]);

    var yscale = d3.scaleLinear()
        .domain([0, 400000000])
        .range([height/2, 0]);

    var x_axis = d3.axisBottom()
        .scale(xscale);

    var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
        .attr("transform", "translate(70, 10)")
        .call(y_axis)

    var xAxisTranslate = height/2 + 10;

    svg.append("g")
        .attr("transform", "translate(70, " + xAxisTranslate  +")")
        .call(x_axis)
}

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

//Function for calling and generating the visuals accioated with the csv data set 1.
function graph(){
    xAxisMax = d3.max(d3.values(csvFile1));
    // yAxisMax = d3.max(csvFile1[2020].aged_25_54_labour_force_participation_rate_percent[year]);
    console.log(xAxisMax);

    //DrawGraph function used to draw the axis within the SVG element.
    drawGraph();
    //Code used for creating a slider which changes the data to show the requested year.
    var data = [1990, 2030];
    var slider = d3Slider.sliderHorizontal()
      .domain(d3.extent(data))
      .width(500)
      .tickFormat(d3.format('.0f'))
      .ticks(5)
      .on('onchange', val => {  
        year = Math.round(val)
        d3.select("p#value").text(year)
        //console.log(year)
        //Calling the graph2 function which draws the data for the correct year on graph. 
        graph2();
      });
    var g = d3.select("div#value").append("svg")
      .attr("width", 500)
      .attr("height", 100)
      .append("g")
      .attr("transform", "translate(30,30)");
    
    g.call(slider);
};

function graph2(){
    $("svg#data").empty();
    var g = d3.select("#axis").append("svg").attr("id", "data").selectAll("g").data(csvFile1)
        .attr("padding-left", "40");
    var x = 0;
    var drawX;
    // create new 'g' elements for each country
    var en = g.enter().append("g")
        .attr("transform",function(d, i){ 
        x = file[i].data.aged_25_54_labour_force_participation_rate_percent[year];
        drawX = x * 5;
        return "translate("+ (drawX) + 100 + "," + (600 - (file[i].data.aged_25_54_labour_force_participation_rate_percent[year])) + 40 +")" 
        //if population is above 400 million place at top of graph
        });
    //add a circle to each 'g'
    var circle = en.append("circle")
        .attr("r",function(d,i){ 
            return popTotal[i].data.population_total[year]/10000000
        })
        .attr("fill",function(d,i){ return i % 2 == 0 ? "red" : "blue" })
        
        .on("mouseover", function(d){ 
            circle.style("opacity", 1)
        })
        .on("mouseout", function(d){
            circle.style("opacity", 0.2)         
        })
        
};
   
       

