
$("button#vis1").on("click", showFile1());
$("button#vis2").on("click", showFile2());
$("button#vis3").on("click", showFile3());


function showFile1(){
	$.get('/csv1', function(response) {
        var responseObj = JSON.parse(response);
        console.log(responseObj);
        // a common thing is to 'wrap' some elements in a 'g' container (group)
        // this is like wrapping html elements in a container div
        var g = d3.select("svg").selectAll("g").data(responseObj);

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
    }).fail(function(){   //function trigger by fail '400', '500' code
        
    }).always(function(){ //Always running no matter what even if it fails
        
    })
};

function showFile2(){
	$.get('/csv2', function(response) {
        var responseObj = JSON.parse(response);
        console.log(responseObj);
        // a common thing is to 'wrap' some elements in a 'g' container (group)
        // this is like wrapping html elements in a container div
        var g = d3.select("svg").selectAll("g").data(responseObj);

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
    }).fail(function(){   //function trigger by fail '400', '500' code
        
    }).always(function(){ //Always running no matter what even if it fails
        
    })
};

function showFile3(){
	$.get('/csv3', function(response) {
        var responseObj = JSON.parse(response);
        console.log(responseObj);
        // a common thing is to 'wrap' some elements in a 'g' container (group)
        // this is like wrapping html elements in a container div
        var g = d3.select("svg").selectAll("g").data(responseObj);

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
    }).fail(function(){   //function trigger by fail '400', '500' code
        
    }).always(function(){ //Always running no matter what even if it fails
        
    })
};