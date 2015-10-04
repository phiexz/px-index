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

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i]; 
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
};

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
    
    //Filesize
    if ($(window).width() >= 768) {
      $('table#list td:nth-child(2)').each(function() {
        if ($(this).text() == "-"){
            $(this).text('');
        }
        else{
          var cellText = parseFloat($(this).text());
          $(this).text(bytesToSize(cellText));
        }
      });
    }
    
    //Add class to table#list
    $( "table#list" ).addClass( "table" );
    
    //Change column width
    document.getElementsByTagName("colgroup")[0].outerHTML = '<colgroup><col width="65%"/><col width="15%"/><col width="20%"/></colgroup>'
    
    //Remove slash from last directory name
    $('table#list td:nth-child(1)').each(function() {
        var lastChar = $(this).text().substr($(this).text().length - 1);
        if (lastChar == "/"){
            this.innerHTML = '<a href="'+$(this).text()+'">'+$(this).text().slice(0,-1)+'</a>';
        }
    });
    
    //Random page header & table hover backgroundColor
    var color = ['success','info','warning','danger']
    var rand = color[Math.floor(Math.random() * color.length)];
    rand = 'alert-' + rand;
        //Page Header
        $( "div#randomPageHeader" ).addClass(rand);
    
        //Table hover
        $( "tr" ).addClass(rand);
        
        //clickable & click+drag table
        var isMouseDown = false,
        isHighlighted;
        $(".table tr")
          .mousedown(function () {
            isMouseDown = true;
            //cek kalo 2nd row nya kosong (folder)
            if(this.cells[1].innerHTML!="")
                $(this).toggleClass("highlighted");
            //isHighlighted = $(this).hasClass("highlighted");
            console.log(isHighlighted);
            return false; // prevent text selection
          })
          .mouseover(function () {
            if (isMouseDown) {
                //cek kalo 2nd row nya kosong (folder)
                if(this.cells[1].innerHTML!="")
                    $(this).toggleClass("highlighted");
            }
          })
          .bind("selectstart", function () {
            return false;
          })

        $(document)
          .mouseup(function () {
            isMouseDown = false;
        });
    
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
