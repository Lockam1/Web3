//CSV file data parsing to variables
//Global variables containing the data for each of the files.
var csvFile1;
var csvFile2;
var csvFile3;
var year; //Variable contain the slider year data

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

//Function dedicated to drawing the axis on the graph
function drawGraph(){
    $("svg").empty();
    //var g = d3.select("svg").selectAll("g").data(csvFile3);
    //Creating the axis
    var width = 1100, height = 1100;

    var data = [10, 15, 20, 25, 30];
    var svg = d3.select("#svg")
        .append("svg")
        .attr("id", "axis")
        .attr("width", width)
        .attr("height", height);
       

    var xscale = d3.scaleLinear()
        .domain([0, 100])
        .range([0, width - 100]);

    var yscale = d3.scaleLinear()
        .domain([0, 100])
        .range([height/2, 0]);

    var x_axis = d3.axisBottom()
        .scale(xscale);

    var y_axis = d3.axisLeft()
        .scale(yscale);

    svg.append("g")
        .attr("transform", "translate(50, 10)")
        .call(y_axis)

    var xAxisTranslate = height/2 + 10;

    svg.append("g")
        .attr("transform", "translate(50, " + xAxisTranslate  +")")
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

function graph(){
    drawGraph();
    //call item from a point in an array !!
    //var arrLength = csvFile1.length; //Getting the length of the array
    
    // console.log(csvFile1[0].name);    
    // console.log(csvFile1[0].data.aged_25_54_labour_force_participation_rate_percent["1990"]); //??? this just calls the whole dict accioated with the country
    // console.log(csvFile1[1].name); //is there a way of getting just one item from dict?
    // console.log(csvFile1[1].data);  //Like this

    var data = [1990, 2030];
    
    var slider = d3Slider.sliderHorizontal()
      .domain(d3.extent(data))
      .width(500)
      .tickFormat(d3.format('.0f'))
      .ticks(5)
      .on('onchange', val => {  
        year = Math.round(val)
        d3.select("p#value").text(year)
        console.log(year)
        
        graph2();
      });
      

    var g = d3.select("div#value").append("svg")
      .attr("width", 500)
      .attr("height", 100)
      .append("g")
      .attr("transform", "translate(30,30)");

    g.call(slider);

    // d3.select("a#setValue").on("click", () => slider.value(1));
    // d3.select("a#changeWidth").on("click", () => g.call(slider.width(Math.floor(Math.random() * 500) + 200)));

    // var temp = csvFile1[i].data.aged_25_54_labour_force_participation_rate_percent["1990"];
    // console.log(temp);
   

    //Testing axis 
    
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
        x = csvFile1[i].data.aged_25_54_labour_force_participation_rate_percent[year];
        drawX = x * 5;
        return "translate("+ (drawX) + 100 + "," + (600 - (csvFile1[i].data.aged_25_54_labour_force_participation_rate_percent[year] * 3)) + 40 +")" 
        });
        

    // add a circle to each 'g'
    //if slider is 'year' do \/
    //getElementById 'year'
    var circle = en.append("circle")
        .attr("r",function(d,i){ 
            return csvFile1[i].data.aged_25_54_labour_force_participation_rate_percent[year]/4
        })
        .attr("fill",function(d,i){ return i % 2 == 0 ? "red" : "blue" })
        
        .on("mouseover", function(d){ 
            circle.style("opacity", 1)
        })
        .on("mouseout", function(d){
            circle.style("opacity", 0.2)         
        })
        

    // add a text to each 'g'
    en.append("text").text(function(d){ return d.name });
<<<<<<< HEAD
   
    //Tesing axis
    var width = 400, height = 100;

    var data = [10, 15, 20, 25, 30];
    var svg = d3.select("body")
        .append("svg")
        .attr("width", width)
        .attr("height", height);

    var xscale = d3.scaleLinear()
        .domain([0, d3.max(data)])
        .range([0, width - 100]);

    var yscale = d3.scaleLinear()
            .domain([0, d3.max(data)])
            .range([height/2, 0]);

    var x_axis = d3.axisBottom()
            .scale(xscale);

    var y_axis = d3.axisLeft()
            .scale(yscale);

        svg.append("g")
        .attr("transform", "translate(50, 10)")
        .call(y_axis);

    var xAxisTranslate = height/2 + 10;

        svg.append("g")
                .attr("transform", "translate(50, " + xAxisTranslate  +")")
                .call(x_axis)

};
   
=======
}
>>>>>>> 334779483aea47d8b1ec0f48e6695fd1b7f70c78
       

