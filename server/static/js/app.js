$(function(){
	$('button').click(function(){  //fuction trigger by success '200' code
        alert('clicked');
        $("div[id='ajax']").remove();
        d3.select("body").append("p");
    
    }).fail(function(){   //function trigger by fail '400', '500' code

    }).always(function(){ //Always running no matter what even if it fails

    })
});

var paragraphs = document.getElementsByTagName("p");
for (var i = 0; i < paragraphs.length; i++) {
  var paragraph = paragraphs.item(i);
  paragraph.style.setProperty("color", "blue", null);
}
