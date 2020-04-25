d3.select("p")
    .data([4, 8, 15, 16, 23, 42])
    .enter().append("p")
    .text(function(d) { return "I’m number " + d + "!"; });


  