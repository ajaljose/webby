var dar;
$(document).ready(function(){
    dar=0;
    $('body').css('transition-duration','2s');
  });
  $("#mood").click(function(){
      
       if(dar==0)
           dark();
       else
           light();
    
        
    });

function dark(){
    $("body").css("background-color","#14213d");
    $("h1,label,p").css("color","#fefae0");
    //debugger;
    $('#mood').html('Light');
    dar=1;

}

function light(){
    $("body").css("background-color","#fefae0");
    $("h1,label,p").css("color","#14213d");
    dar=0;
    $('#mood').html('Dark');
}