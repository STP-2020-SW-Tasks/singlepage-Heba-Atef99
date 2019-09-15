$(document).ready(function(){
    // Declare Variables
    var econd=null;
    var tcond=null;
    var cond=null;

	// function 1 for email validation
	function validateEmail(email) {
	   var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	   return re.test(email);
	 }
    // ******
    // function 2 continuing validaaaation
    $(".email").blur(function() {
	   var result = $("#no6");
	   var emaill = $(this).val();
	   result.text("");
       
	    if (validateEmail(emaill)) {
               $(this).css("borderColor", "rgba(108, 151, 252, 0.76)");
               result.text("");
               econd=1;
        } 
       else {
           if(emaill){
	          result.text("This email is not valid!");
	          result.css("color", "red");
              $(this).css("borderColor","red");
              econd=0;
           }
        }
    });

    // *****************************************************************************
    // function 3 No numbers in text fields
    $(".text").blur(function (){
    var num = [1,2,3,4,5,6,7,8,9];
    var textValue=$(this).val();
    var $id=$(this).attr("id");
    var feedback=$("#no"+$id);
    tcond=1;
    feedback.text("");
    
        for(var j=0;j<textValue.length;j++){
           for(var k=0;k<10;k++){
                if(textValue[j]==num[k] || textValue[j]==0 && textValue[j]!=" "){
                    tcond=0;
                    feedback.text("This input is not valid! Hint: Remove any numbers.");
                    feedback.css("color","red");
                    $(this).css("borderColor","red");
                    break;
                }
           }
        }

    if(tcond==1) $(this).css("borderColor","rgba(108, 151, 252, 0.76)");    
    });

    //*****************************************************************************
    //function 4 A way to make sure there are no empty input fields and also to validate the phone number
    $('input').blur(function(){
        cond=1;
        var content=$(this).val();
        var $id=$(this).attr("id");
        var phFeed=$("#no5");
        phFeed.text("");

        if(!content){
            cond=0
            $(this).css("borderColor","red");
            $(this).attr("placeholder","You Must Fill This Info");
        }
        else if($id==6 && content!=" " && (content.length<11 || content.length>11 || content[0]!=0)){
            phFeed.text("This Phone Number is Not Valid !");
            phFeed.css("color","red");
            $(this).css("borderColor","red");
            cond=0;
            }

        else if(cond==1){
            if(econd==1 && $id==7)
            $(this).css("borderColor","rgba(108, 151, 252, 0.76)");
            

            else if(tcond==1 && ($id==1 || $id==2 || $id==3 || $id==4))           
            $(this).css("borderColor","rgba(108, 151, 252, 0.76)n");
            

            else if($id==6 || $id==5 || $id==8 || $id==9)
            $(this).css("borderColor","rgba(108, 151, 252, 0.76)");        
        }


       bttnAvailable();        
       return false;
    });
    //*********************************************************************
    //function 5 Not repeating the same option in different selectors
    $('.s1').blur(function(){
      var option=$(this).val();
      for(var i=1;i<5;i++){
          if($("#s0"+i).val()==option) $("#s0"+i).attr("disabled",true);
          else  $("#s0"+i).attr("disabled",false); 
    }
    });

    $('.s0').blur(function(){
      var option=$(this).val();
      for(var i=1;i<5;i++){
        if($("#s1"+i).val()==option) $("#s1"+i).attr("disabled",true);
        else  $("#s1"+i).attr("disabled",false); 
    }
    });

    $('select').blur(bttnAvailable);
    // ******************************************************************
    //function 6 IT is Time to submit that button,right? :/ 
    function bttnAvailable(){
    var finalCond=0;
    var noAlert=null;

    for(var i=1;i<10;i++){
	    if(!$("#"+i).val()) finalCond=0;
        else finalCond++;
    }

    for(var i=1;i<7;i++){
        noAlert=$("#no"+i).val();
        if(noAlert) finalCond=0; 
    }

    if(finalCond==9 && econd==1 && tcond==1 && cond==1){
        $("button").attr("disabled",false);
        $("button").css("cursor","pointer");    
    }
    else {
        $("button").attr("disabled",true);
        $("button").css("cursor","not-allowed");        
    }
    }
    // ******************************************************************
    function done(){
    alert("Your Response has been succesfully submited ❤");
    }
	$("button").on("click",done);
    //************************************************** 
    // some Styling ;)
$(".shad").focus(function(){
    $(this).css('box-shadow','0px 0px 9px lightblue');
});

$(".shad").blur(function(){
    $(this).css('box-shadow','0px 0px 0px');
});

$("input").focus(function(){
    $(this).css('outline','0px');
});

$("button").focus(function(){
    $(this).css('outline','0px');
});

$("button").attr("disabled",true);
$("button").css("cursor","not-allowed");        


});
