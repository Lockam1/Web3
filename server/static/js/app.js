//Ajax code here


$(function(){
	$('button').click(function(){  //fuction trigger by success '200' code
        alert('clicked');
        $("div[id='ajax']").remove();
    
    }).fail(function(){   //function trigger by fail '400', '500' code

    }).always(function(){ //Always running no matter what even if it fails

    })
});


