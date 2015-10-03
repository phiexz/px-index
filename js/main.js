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
    
    //Setting HTML Title
    var urlPath = window.location.pathname.split( '/' );
    var currentDir = urlPath[urlPath.length-2];
    window.document.title = "PX Download - " + currentDir.toUpperCase();
    
    //Generating Breadcrumbs
    var loc = window.location.pathname;
    var segments = loc.split('/');
    var breadcrumbs = '';
    var currentPath = '/';
    for (var i=0; i<segments.length; i++) {
      if (segments[i] !== '') {
        currentPath += segments[i] + '/';
        breadcrumbs += '<a href="' +  currentPath + '">' + window.unescape(segments[i]) + '<\/a>';
      } else if (segments.length -1 !== i) {
        currentPath += '';
        breadcrumbs += '<a href="' + currentPath + '"><span class="glyphicon glyphicon-home"></span><\/a>';
      }
    }
    document.getElementById('breadcrumbs').innerHTML = breadcrumbs;
    
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
