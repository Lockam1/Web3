d3.select("p").style("color", "green")

// d3.select("body").transition()
    

var circle = d3.selectAll("circle");

circle.style("fill", "steelblue");
circle.attr("r", 30);
circle.attr("cx", function() { return Math.random() * 720; });