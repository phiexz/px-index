function validateForm() {
    if((document.forms["report"]["reportName"].value) && 
       (document.forms["report"]["reportEmail"].value) &&
       (document.forms["report"]["reportSubject"].value) &&
       (document.forms["report"]["reportMessage"].value)){
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
    else{
        alert("Some field empty");
        return false;
    }
}

function bytesToSize(bytes) {
    var sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return 'n/a';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i]; 
    return (bytes / Math.pow(1024, i)).toFixed(2) + ' ' + sizes[i];
};

function checkSelected() {
    return $(".table tr").hasClass('highlighted');
}

function generateURL(what) {
    var nSelected = 0, generatedURL = "";
    $(".table tbody tr").each(function() {
        if($(this).hasClass('highlighted')){
            nSelected++;
            generatedURL = generatedURL + $(this).find('a')[0] + '\n';
        }
    });
    if (what=="return")
        return generatedURL.slice(0,-1);
    else{
        //generating nSelected files
        $( "span#nSelected" ).text(nSelected);
        //Change textarea rows
        $( "textarea#generatedURL" ).attr("rows",nSelected);
        //generating url list
        $( "textarea#generatedURL" ).text(generatedURL.slice(0,-1));
    }
}

function checkExtension(fileName){
    var ext = fileName.split('.').pop().toLowerCase();
    var listExtensions = ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "gif", "svg", "svgz", "xbm", "bmp"];

    return (listExtensions.indexOf(ext) > -1);
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
    
    //Remove slash from last directory name & set icons
    $('table#list td:nth-child(1)').each(function() {
        var lastChar = $(this).text().substr($(this).text().length - 1);
        var ext = $(this).text().split('.').pop().toLowerCase();
        var imgExt = ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "gif", "svg", "svgz", "xbm", "bmp", "psd"];
        var audioExt = ["aac", "mp3", "wma", "wav", "ogg", "flac"];
        var videoExt = ["avi", "flv", "mkv", "mp4", "wmv"];
        var subtitleExt = ["sub", "lrc", "srt", "ass", "ssa"];
        var archiveExt = ["7z", "7zip", "rar", "tgz", "gz", "lz", "xz", "zip"];
        var isoExt = ["dmg", "iso", "bin", "cdi", "image", "img"];
        var officeExt = ["doc", "docx", "rtf", "ppt", "pptx", "xls", "xlsx"];
        var textExt = ["txt", "c", "cpp", "css", "less", "sass", "h", "hpp", "html", "java", "js", "php", "py", "rb", "sql", "xml", "sh", "bash"];
        var lockExt = ["px", "gpg"];
        var appExt = ["bat", "exe", "com"];
        
        
        
        if (lastChar == "/"){
            if($(this).text() == "Parent directory/")
                this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#back" alt=""></img><a href="../">'+$(this).text().slice(0,-1)+'</a>';
            else
                this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#folder" alt=""></img><a href="'+$(this).text()+'">'+$(this).text().slice(0,-1)+'</a>';
        }
        else if(imgExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#image" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(audioExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#audio" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(videoExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#video" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(subtitleExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#subtitle" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(archiveExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#archive" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(isoExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#iso" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(officeExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#office" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(textExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#text" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(lockExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#lock" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else if(appExt.indexOf(ext) > -1)
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#app" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
        else{
            this.innerHTML = '<img class="icon-sprite" src="'+ directory +'/img/icon-sprite.svg#file" alt=""></img><a id="listFiles" href="'+$(this).text()+'">'+$(this).text()+'</a>';
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
          .mousedown(function (e) {
            isMouseDown = true;
            //cek kalo 2nd row nya kosong (folder)
            if(this.cells[1].innerHTML!=""){
                 if (e.target.id != "listFiles"){ //cek kalo yg di klik bukan link
                     $(this).toggleClass("highlighted");
                 }
            }
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
        
    //Generate URL
    $('#generateURL').on('shown.bs.modal', function (e) {
        if(checkSelected()){
            //console.log("selected = true");
            $("#generateURL_false").css("display", "none");
            $("#generateURL_true").css("display", "inline");
            $("#buttonCopyClipboard").attr("style", "display:inline;");
            
            generateURL();
        }
        else{
            //console.log("selected = false");
            $("#generateURL_true").css("display", "none");
            $("#generateURL_false").css("display", "inline");
        }
    })
    
    //Lightbox image viewer
    //check file extension
    $('table#list td:nth-child(1)').each(function() {
        //image
        if(checkExtension($(this).text())){
            $(this).find('a').attr("data-toggle", "lightbox");
            $(this).find('a').attr("data-gallery", "px-index");
        }
        //text
        if($(this).text().split('.').pop().toLowerCase() == "txt"){
            var textFileName = $(this).text();
            
            $(this).find('a').attr("data-toggle", "modal");
            $(this).find('a').attr("data-target", "#modalText");
            
            
            //change href to #, we should load it via jQuery.load instead
            $(this).find('a').attr("href", "#");
            $('#modalText').on('shown.bs.modal', function (e) {
                //alert("open");
                $("#textAjax").load(textFileName);
            })
        }
    });    
    //Show modal
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            always_show_close:false
        });
    });
    
    //Searchbox
    $("#searchBox").keyup(function() {
        var value = this.value;

        $("table").find("tr").each(function(index) {
            if (!index) return;
            var id = $(this).find("td").first().text();
            $(this).toggle(id.indexOf(value) !== -1);
        });
    });
    
    
    //SubmitReport
    $("input#reportSubmit").click(function(){
      if (validateForm()){
          $.ajax({
              type: "POST",
              url: "'+ directory +'/function.php?func=report", //process to mail
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