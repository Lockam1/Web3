d3.select("p").style("color", "green")

// d3.select("body").transition()
    

// var circle = svg.selectAll("circle")
//     .data([32, 57, 293], function(d) { return d; });

// circle.enter().append("circle")
//     .attr("cy", 60)
//     .attr("cx", function(d, i) { return i * 100 + 30; })
//     .attr("r", function(d) { return Math.sqrt(d); });

// circle.exit().remove();


var data = [];
for (var i=0; i < 3; i++) {
 data.push(Math.random()*10)
};

var svg = d3.select("body").append("svg");

svg.attr("width", 800).attr("height", 600);

var circles = svg.selectAll("circle")
    .data(data)
    .enter()
    .append("circle")
    .attr("cx", 50)
    .attr("cy", function (d, i) {
      return i * 100 + 60;
    })
    .attr("r", 40)
    .attr("fill", function (d) {
      return d.colour;
    });

// for the event handler
// test adapted from https://bl.ocks.org/milkbread/5792150
circles.on("mousedown",moveCircles);

var clicked = false;

function moveCircles() { // give the circles a boolean value
  if (clicked == false) { 
    clicked = true; 
    var destination = 1;
  }
  else { 
    clicked = false; 
    var destination = -1;
  }
 circles.transition().duration(1500)
    .attr("cx", (300 * destination) + 350);
};