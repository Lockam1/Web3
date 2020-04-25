$(function(){
	$('button').click(function(){  //fuction trigger by success '200' code
        alert('clicked');
        $("div[id='ajax']").remove();
 
        var svgSelection = bodySelection.append("svg")
            .attr("width", 50)
            .attr("height", 50);
        
        var circleSelection = svgSelection.append("circle")
            .attr("cx", 25)
            .attr("cy", 25)
            .attr("r", 25)
            .style("fill", "purple");
    
    }).fail(function(){   //function trigger by fail '400', '500' code

    }).always(function(){ //Always running no matter what even if it fails

    })
});

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "blue", null);
}
