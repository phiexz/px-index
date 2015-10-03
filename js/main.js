function validateForm() {
    var x = document.forms["report"]["reportEmail"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos<1 || dotpos<atpos+2 || dotpos+2>=x.length) {
        alert("Not a valid e-mail address");
        return false;
    }
    else{
      return true;
    }
}

$(document).ready(function(){
    //Tooltip bootstrap
    $("[data-toggle=tooltip").tooltip();
    $("[data-toggle=popover").popover();
    
    //SubmitReport
    $("input#reportSubmit").click(function(){
      if (validateForm()){
          $.ajax({
              type: "POST",
              url: "/px-index/function.php?func=report", //process to mail
              data: $('form.report').serialize(),
              success: function(msg){
                alert("Report sent! Thank you :)");
                $('#report').modal('hide');
              },
              error: function(){
                alert("Ooops.. something error. Please try again :(");
              }
          });
      }
    });
});
