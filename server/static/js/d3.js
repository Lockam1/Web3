d3.select("p").style("color", "green")


chart = {
    const svg = d3.create("svg")
        .attr("viewBox", [0, 0, width, height])
        .attr("stroke-width", 2);
  
    const circles = d3.range(20).map(i => ({
      x: Math.random() * (width - radius * 2) + radius,
      y: Math.random() * (height - radius * 2) + radius,
    }));
  
    svg.selectAll("circle")
      .data(circles)
      .join("circle")
        .attr("cx", d => d.x)
        .attr("cy", d => d.y)
        .attr("r", radius)
        .attr("fill", (d, i) => d3.schemeCategory10[i % 10])
        .call(drag);
  
    return svg.node();
  }
  drag = ƒ(t)

  drag = {

    function dragstarted(d) {
      d3.select(this).raise().attr("stroke", "black");
    }
  
    function dragged(d) {
      d3.select(this).attr("cx", d.x = d3.event.x).attr("cy", d.y = d3.event.y);
    }
  
    function dragended(d) {
      d3.select(this).attr("stroke", null);
    }
  
    return d3.drag()
        .on("start", dragstarted)
        .on("drag", dragged)
        .on("end", dragended);
  }

  height = 600
  radius = 32
  
  