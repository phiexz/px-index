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
    var sizes = ['B ', 'KB', 'MB', 'GB', 'TB'];
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
        if (nSelected > 25)
            $( "textarea#generatedURL" ).attr("rows", 25);
        else
            $( "textarea#generatedURL" ).attr("rows", nSelected);
        //generating url list
        $( "textarea#generatedURL" ).text(generatedURL.slice(0,-1));
    }
}

function checkExtension(fileName){
    var ext = fileName.split('.').pop().toLowerCase();
    var listExtensions = ["jpg", "jpeg", "jpe", "jif", "jfif", "jfi", "png", "gif", "svg", "svgz", "xbm", "bmp"];

    return (listExtensions.indexOf(ext) > -1);
}

function shorten(text, maxLength, file) {
    var ret = text;
    if (ret.length > maxLength) {
        if(file)
            ret = ret.substr(0,maxLength-3) + "~." + ret.split('.').pop();
        else
            ret = ret.substr(0,maxLength-1) + "~";
    }
    return ret;
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i=0; i<ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1);
        if (c.indexOf(name) == 0) return c.substring(name.length,c.length);
    }
    return "";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

function resizeSite(type, size){
    fontSize = parseInt($('table#list').css('font-size'));
    
    if(type=="font"){
        if (size=="increase"){
            $('table#list').css('font-size', fontSize+2);
            setCookie("fontSize", fontSize+2, 365);
        }
        else if(size=="decrease"){
            $('table#list').css('font-size', fontSize-2);
            setCookie("fontSize", fontSize-2, 365);
        }
        else if(size=="default"){
            $('table#list').css('font-size', defaultFontSize);
            setCookie("fontSize", defaultFontSize, 365);
        }
        else
            $('table#list').css('font-size', parseInt(size));
    }
    else if(type=="icon"){
        $('head').append('<style>#list a[href*="#"]:before, #list a[href*="."]:before, #list a[href*="/"]:before{ font-size:'+size+'px }</style>');
        setCookie("iconSize", size, 365);
    }
}

function loadingAjax(type){
    if (type == "start"){
        $('div.table-responsive').slideUp();
        //we dont really need it, cz site load very fast
        //$('div.loadingAjax').css("display", "block");
    }
    else if (type == "stop"){
        //$('div.loadingAjax').css("display", "none");
        $('div.table-responsive').slideDown();
    }
}

function ajaxSetting(type){
    if(type == "enable")
        setCookie("disableAjax", "", -1);
    else if(type == "disable")
        setCookie("disableAjax", 1, 365);
}

function darkLightThemeSetting(theme){
    if (theme == "dark"){
        setCookie("darkTheme", 1, 365);
        location.reload(true);
    }
    else{
        setCookie("darkTheme", "", -1);
        location.reload(true);
    }
}

/*** Function DOM ***/
function setTittle(){
    var urlPath = window.location.pathname.split( '/' );
    var currentDir = urlPath[urlPath.length-2];
    window.document.title = "PX Download - " + currentDir.toUpperCase();
}

function generateBreadcrumbs(){
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
}

function tableHack(){
/*** Add class to table#list ***/
    $( "table#list" ).addClass( "table" );
    
/*** Change column width ***/
    document.getElementsByTagName("colgroup")[0].outerHTML = '<colgroup><col width="65%"/><col width="15%"/><col width="20%"/></colgroup>'
    
/*** Random backgroundColor ***/
    var color = ['success','info','danger']
    var rand = color[Math.floor(Math.random() * color.length)];
    rand = 'alert-' + rand;
    $( "div#randomPageHeader" ).addClass(rand); //Page Header
    $( "tr" ).addClass(rand); //Table hover
    $( "div#siteSetting" ).addClass(rand); //Site setting header
    
/*** Table Hack ***/
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
    
/*** Column 1 Hack ***/
    $('table#list td:nth-child(1)').each(function() {
        var lastChar = $(this).text().substr($(this).text().length - 1);        
        if (lastChar == "/"){
            //Remove slash from last directory name
            this.getElementsByTagName("a")[0].innerHTML = this.getElementsByTagName("a")[0].innerHTML.slice(0,-1);
            
            //add id: listfolders to <a>, for ajax calling
            $(this.getElementsByTagName("a")[0]).attr("id","listFolders");
            
            //do shorten (trim long folder name)
            if (typeof MaxFileName !== 'undefined')
                this.getElementsByTagName("a")[0].innerHTML = shorten(this.getElementsByTagName("a")[0].innerHTML, MaxFileNameLength, false);
        }
        else{
            //add id: listfiles ke <a>, buat cek select item di bawah
            $(this.getElementsByTagName("a")[0]).attr("id","listFiles");
            
            //Lightbox image viewer
            if(checkExtension($(this).text())){
                $(this).find('a').attr("data-toggle", "lightbox");
                $(this).find('a').attr("data-gallery", "px-index");
            }
            
            //Text viewer
            else if($(this).text().split('.').pop().toLowerCase() == "txt"){
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
            
            //do shorten (trim long file name)
            if(typeof MaxFileName !== 'undefined')
                this.getElementsByTagName("a")[0].innerHTML = shorten(this.getElementsByTagName("a")[0].innerHTML, MaxFileNameLength, true);
        }
    });
    
/*** Column 2 Hack ***/
    $('table#list td:nth-child(2)').each(function() {
        if ($(this).text() == "-")
            $(this).text('');
        else{
            if(typeof RoundFileSize !== 'undefined') {
              var cellText = parseFloat($(this).text());
              //Filesize to Human Readable
              $(this).text(bytesToSize(cellText));
            }
        }
    });
    
/*** Column 3 Hack ***/
    //Add class to date column, so it'll hidden for xtra small device
    $("table#list th:nth-child(3)").addClass("hidden-xs");
    $('table#list td:nth-child(3)').each(function() {
        //Add class to date column, so it'll hidden for xtra small device
        $(this).addClass("hidden-xs");
    });
}

$(document).ready(function(){
    //Tooltip bootstrap
    $("[data-toggle=tooltip").tooltip();
    $("[data-toggle=popover").popover();
    
    //Setting HTML Title
    setTittle();
    //Generating Breadcrumbs
    generateBreadcrumbs();
    
    //Table Hack
    tableHack();

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
    
    //Lightbox Show modal
    $(document).delegate('*[data-toggle="lightbox"]', 'click', function(event) {
        event.preventDefault();
        $(this).ekkoLightbox({
            always_show_close:false
        });
    });
    
    //Searchbox
    $("#searchButton").click(function(){
        $("li#searchBox.hidden-sm.hidden-xs").toggle(500);
    });
    $("input#searchBox").keyup(function() {
        var value = this.value.toLowerCase();

        $("table").find("tr").each(function(index) {
            if (!index) return;
            var id = $(this).find("td").first().text().toLowerCase();
            $(this).toggle(id.indexOf(value) !== -1);
        });
    });
    
    //Increase & Decrease Site
    defaultFontSize = parseInt($('table#list').css('font-size'));
    defaultIconSize = parseInt($('#list a:before').css('font-size'));

    var fontSize,iconSize;
    
    //getting cookie
    //fontsize
    if (getCookie("fontSize") != ""){
        fontSize = parseInt(getCookie("fontSize"));
        resizeSite("font", fontSize);
    }
    else
        fontSize = defaultFontSize;
    //icon size
    if (getCookie("iconSize") != ""){
        iconSize = parseInt(getCookie("iconSize"));
        resizeSite("icon", iconSize);
        $("label#icon-" + iconSize).addClass("active");
    }
    //Ajax Mode
    if (getCookie("disableAjax") != "")
        $("label#ajaxDisable").addClass("active");
    else
        $("label#ajaxEnable").addClass("active");
    //Dark Light Theme
    if(typeof darkLightTheme !== 'undefined') {
        if (getCookie("darkTheme") != ""){
            $("label#darkTheme").addClass("active");
            $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'https://maxcdn.bootstrapcdn.com/bootswatch/3.3.5/slate/bootstrap.min.css') );
            $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', CDN+directory+"/css/main.css?v="+VER) );
            $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', CDN+directory+"/css/dark.css?v="+VER) );
            //alert(CDN+directory+"/css/dark.css?v="+VER);
        }
        else{
            $("label#lightTheme").addClass("active");
            $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', CDN+directory+"/css/main.css?v="+VER) );
        }
    }
    
    //Ajax listFolders (kalo di klik)
    $(document).on("click", "a#listFolders",function(e){
        if (getCookie("disableAjax") == ""){
            e.preventDefault();
            setCookie("openAsAjax", "true", 30/24/60/60); //set cookie for 30s
            loadingAjax("start");
            $('table#list').load($(this).attr("href"), function(){
                loadingAjax("stop");
                //Setting HTML Title
                setTittle();
                //Generating Breadcrumbs
                generateBreadcrumbs();
                //Table Hack
                tableHack();
                //destroy cookie
                setCookie("openAsAjax", "true", -1);
            });
            //Set html5 pushstate
            history.pushState("", "", $(this).attr("href").split('/').slice(0,-1)+"/");
        }
    });
    
    //SubmitReport
    $("input#reportSubmit").click(function(){
      if (validateForm()){
          $.ajax({
              type: "POST",
              url: directory + "/lib/function.php?func=report", //process to mail
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