function between(x, min, max) {
  return x >= min && x <= max;
}

function getColor(type,number){
  var intNumber = parseInt(number);
  if (type=="progress"){
    if (between(intNumber,0,20))
      return("green")
    else if (between(intNumber,21,40))
      return("olive")
    else if (between(intNumber,41,60))
      return("yellow")
    else if (between(intNumber,61,80))
      return("orange")
    else
      return("red")
  }
}

function toggleButton(selectorTrigger, selectorToggled, speed){
  speed = speed || 'slow'
  $(selectorTrigger).click(function() {
    $(selectorToggled).slideToggle(speed);
  });
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires+"; path=/";
}

function generateBreadcrumb(){
    var loc = decodeURIComponent(window.location.pathname);
    var segments = loc.split('/');
    var breadcrumb = '';
    var currentPath = '/';
    
    // hide breadcrumb if on homepage/root
    if ( window.location.pathname == root ){
      // Index (home) page
      $('#breadcrumb-segment').css('display','none');
    }
    else{
      $('#breadcrumb-segment').css('display','block');
    }
    // construct breadcrumb
    for (var i=0; i<segments.length; i++) {
      if (segments[i] !== '') {
        currentPath += segments[i] + '/';
        breadcrumb += '<i class="right chevron icon divider"></i><a href="' +  currentPath + '" class="section">' + window.unescape(segments[i]) + '</a>';
      } else if (segments.length -1 !== i) {
        currentPath += '';
        breadcrumb += '<a href="' + currentPath + '"><i class="home icon"></i></a>';
      }
    }
    $('#breadcrumb').html(breadcrumb);
}

function backToTop(){
  if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
      backToTop = function () {
        var scrollTop = $(window).scrollTop();
        if (scrollTop > scrollTrigger) {
          $('#back-to-top').addClass('show');
        } else {
          $('#back-to-top').removeClass('show');
        }
      };
    backToTop();
    $(window).on('scroll', function () {
      backToTop();
    });
    $('#back-to-top').on('click', function (e) {
      e.preventDefault();
      $('html,body').animate({
          scrollTop: 0
      }, 700);
    });
  }
}

function fileSelection(type){
  var showDownload = false;
  if (type=="select"){
    $("table#list tbody tr").each(function() {
      if($(this).hasClass("file")){
        $(this).addClass("ui-selected");
        showDownload = true;
      }
    });
    if(showDownload)
      $('#btn-download').css("display", "block");
  }
  else if (type=="deselect"){
    $("table#list tbody tr").each(function() {
      $(this).removeClass("ui-selected");
    });
    $('#btn-download').css("display", "none");
  }
}

function sidebarsClicked() {
  $('#btn-sidebar, #btn-sidebar2').click(function(){
    $('#sidebar').sidebar({
      transition       : 'uncover',
      mobileTransition : 'uncover'})
    .sidebar('toggle');
  });
  $('#btn-mobile-menu').click(function(){
    $('#mobile-menu-item').sidebar({
      transition       : 'overlay',
      mobileTransition : 'overlay'})
    .sidebar('toggle');
  });
}

function modalsClicked() {
  // download
  $('#btn-download, #btn-download2').click(function(){
    $('#modal-download').modal({
      onShow : function(){
        generateLinks();
      },
      onHidden: function(){
        //hide copy link message
        $('#message-copy-success').css('display','none');
        $('#message-copy-error').css('display','none');
      }
    })
    .modal('setting', 'transition', 'scale')
    .modal('show');
  });
  
  // donate
  $('#btn-donate, #btn-donate2').click(function(){
    $('#modal-donate').modal({
      closable  : false,
      onApprove : function() {
        $('#form-paypal').submit();
      }
    })
    .modal('show');
  });
  // report
  $('#btn-report, #btn-report2').click(function(){
    $('#modal-report').modal({
      closable: false
    })
    .modal('setting', 'transition', 'scale')
    .modal('show');
  });
  // send report when clicked
  $('#btn-report-submit').click(function(){
    if($('#form-report').form("is valid")){
      $.ajax({
        type: "POST",
        url: directory + "/include/send-mail.php", //process to mail
        data: $('#form-report').serialize(),
        success: function(msg){
          alert("Report sent! Thank you :)");
          $('#modal-report').modal("hide");
          //reset form
          $( '#form-report' ).each(function(){
            this.reset();
          });
        },
        error: function(){
          alert("Ooops.. something error. Please try again :(");
        }
    });
    }
    else
      alert("Please complete form before send!!")
  });
  // report validate input
  $('#modal-report .form')
    .form({
      on: 'blur',
      fields: {
        reportName    : 'empty',
        reportEmail   : ['empty', 'email'],
        reportType    : 'empty',
        reportSubject : 'empty',
        reportMessage : 'empty'
      }
    });
}

function setTittle(){
  if ( window.location.pathname == root ){
    window.document.title = siteName.toUpperCase();
  }
  else{
    var urlPath = window.location.pathname.split( '/' );
    var currentDir = decodeURIComponent(urlPath[urlPath.length-2]);
    window.document.title = currentDir.toUpperCase() + " | " + siteName.toUpperCase();
  }
}

function filterBoxEvent() {
  $("#filterBox, #filterBox2").keyup(function() {
    var value = this.value.toLowerCase();

    $("table").find("tr").each(function(index) {
      if (!index) return;
      var id = $(this).find("td").first().text().toLowerCase();
      $(this).toggle(id.indexOf(value) !== -1);
    });
  });
}

function bytesToSize(bytes) {
    var sizes = ['B ', 'KB', 'MB', 'GB', 'TB'];
    if (bytes == 0) return '0 B ';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(2) + sizes[i];
};

function sizeToBytes(size){
  var sizes = ['B ', 'KB', 'MB', 'GB', 'TB'];
  var x;

  for (i in sizes) {
    if (size.slice(-2) == sizes[i])
      x=i;
  }
  return(Math.pow(1024, x) * parseFloat(size));
}

function tableListDOM() {
  //add semantic ui class to table
  $('#list').addClass("ui unstackable selectable fixed single line striped compact table raised segment");
  //remove colgroup, and using semantic ui column size
  $('#list > colgroup').remove();
  //if mobile
  if($(window).width() < 768){
    $('#list > thead > tr > th:nth-child(1)').addClass("eight wide");
    $('#list > thead > tr > th:nth-child(2)').addClass("four wide");
    $('#list > thead > tr > th:nth-child(3)').addClass("four wide");
  }
  //not mobile
  else{
    $('#list > thead > tr > th:nth-child(1)').addClass("eleven wide");
    $('#list > thead > tr > th:nth-child(2)').addClass("two wide");
    $('#list > thead > tr > th:nth-child(3)').addClass("three wide");
  }
  /// initializing selectable row
  // disable selectable on mobile & tablet
  if($(window).width() >= 992){
    $("#list>tbody").selectable({
      filter: '.file',
      cancel: 'a',
      selected: function(event, ui){
        $('#btn-download').css("display", "block");
      },
      unselected: function(event, ui){
        var notSelected = true;
        $('#list > tbody > tr').each(function(){
          if($(this).hasClass("ui-selected")){
            notSelected = false;
            return false;
          }
        });
        if(notSelected)
          $('#btn-download').css("display", "none");
      }
    });
  }
  
    
  /// Column 1 Hack ///
  $('#list td:nth-child(1)').each(function() {
    var lastChar = $(this).text().substr($(this).text().length - 1);
    var removedLastChar = $(this).text().slice(0,-1);
    if (lastChar == "/"){
      //Add folder class to parent for ajaxcall
      $(this).parent().addClass("folder");
      //Remove slash from last directory name
      $(this).children("a").text(removedLastChar);
    }
    else{
      //Add file class to parent for selectable
      $(this).parent().addClass("file");
    }
  });
  /// Column 2 Hack ///
  $('#list > thead > tr > th:nth-child(2) > a:nth-child(1)').text("Size");
  $('#list td:nth-child(2)').each(function() {
    if ($(this).text() == "-"){
      //remove "-" from folder
      $(this).text('');
    }
    else{
      if(typeof roundFileSize !== 'undefined') {
        var cellText = parseFloat($(this).text());
        //Filesize to Human Readable
        $(this).text(bytesToSize(cellText));
      }
    }
  });
  /// Column 3 Hack ///
  //none in moment
  
}

function generateLinks(){
  // count number of selected items
  var generatedLinkNum = $('.ui-selected', '#list .ui-selectable').length;
  var totalSize = 0;
  var generatedLinks = '';
  // count total file size of selected items
  $("#list tbody tr").each(function() {
    if($(this).hasClass('ui-selected')){
      totalSize = totalSize + sizeToBytes($(this).find("td:nth-child(2)").text());
      generatedLinks = generatedLinks + $(this).find('a')[0] + '\n';
    }
  });
  var generatedLinkSize = bytesToSize(totalSize);
  
  
  //DOM change on #modal-download
  $('#label-generated-links-num').text(generatedLinkNum);
  $('#label-generated-links-size').text(generatedLinkSize);
  $('#generated-links textarea').text(generatedLinks);
  
  // initialize clipboard.js
  var clipboard = new Clipboard('#btn-copy-link',{
    text: function(trigger) {
      return generatedLinks;
    }
  });
  
  clipboard.on('success', function(e) {
    $('#message-copy-success').css('display','block');
  });

  clipboard.on('error', function(e) {
    $('#message-copy-error').css('display','block');
  });
}

function changeSite(type, value, defaultValue){
  fontSize = parseInt($('table#list').css('font-size'));

  if(type=="font"){
    if (value=="increase"){
        $('table#list').css('font-size', fontSize+2);
        $('#breadcrumb').css('font-size', fontSize+2);
        localStorage.setItem("fontSize", fontSize+2);
    }
    else if(value=="decrease"){
        $('table#list').css('font-size', fontSize-2);
        $('#breadcrumb').css('font-size', fontSize-2);
        localStorage.setItem("fontSize", fontSize-2);
    }
    else if(value=="default"){
        $('table#list').css('font-size', defaultValue);
        $('#breadcrumb').css('font-size', defaultValue+1);
        localStorage.setItem("fontSize", defaultValue);
    }
    else
        $('table#list').css('font-size', parseInt(value));
  }
  else if(type=="icon"){
    //add custom css to head
    $('head').append('<style>#list > tbody > tr > td > a:before{ font-size:'+value+'px }</style>');
    $('#btn-icon-size > button').each(function() {
      //remove all active class on button icon size
      $(this).removeClass("active");
    });
    //add active class to selected size button
    $("#btn-icon-" + value).addClass("active");
    localStorage.setItem("iconSize",value);
  }
  else if(type=="fullscreen"){
    if(value=="true"){
      $('#container-list').removeClass("container");
      $('#container-header').removeClass("container");
      $('#header-menu > > ').unwrap();
      $('#container-breadcrumb').removeClass("container");
      $('#container-footer').removeClass("container");
      localStorage.setItem("fullscreenMode",true);
    }
    else{
      $('#container-list').addClass("container");
      $('#container-header').addClass("container");
      $('#header-menu').wrapInner('<div class="ui container"></div>');
      $('#container-breadcrumb').addClass("container");
      $('#container-footer').addClass("container");
      localStorage.setItem("fullscreenMode",false);
    }
  }
}

function loadSiteSetting(){
  /// initialize
  defaultFontSize = parseInt($('table#list').css('font-size'));
  defaultIconSize = 24;
  ajaxMode = "true";
  
  //Check local storage for site settings
  //fontsize
  if (localStorage.getItem("fontSize") !== null){
    fontSize = parseInt(localStorage.getItem("fontSize"));
    changeSite("font", fontSize);
  }
  //icon size
  if (localStorage.getItem("iconSize") === null)
    $("#btn-icon-"+defaultIconSize).addClass("active");
  else{
    iconSize = parseInt(localStorage.getItem("iconSize"));
    changeSite("icon", iconSize);
  }
  //fullscreen mode
  if (localStorage.getItem("fullscreenMode") === null)
    $('#fullscreen-mode').checkbox('uncheck');
  else{
    fullscreenMode=localStorage.getItem("fullscreenMode");
    if(fullscreenMode=="false")
      $('#fullscreen-mode').checkbox('uncheck');
    else{
       $('#fullscreen-mode').checkbox('check');
       changeSite("fullscreen","true");
    }
  }
  //checkbox fullscreen changed
  $('#fullscreen-mode').checkbox({
    onChange: function() {
      //check if checkbox checked
      if($('#fullscreen-mode').checkbox('is checked'))
        changeSite("fullscreen","true")
      else
        changeSite("fullscreen","false")
    }
  });
  //Ajax Mode
  if (localStorage.getItem("ajaxMode") === null)
    $('#using-ajax-mode').checkbox('check');
  else{
    ajaxMode=localStorage.getItem("ajaxMode");
    if(ajaxMode=="false")
      $('#using-ajax-mode').checkbox('uncheck');
    else
      $('#using-ajax-mode').checkbox('check');
  }
  //Ajax Mode changed
  $('#using-ajax-mode').checkbox({
    onChange: function() {
      //check if checkbox checked
      if($('#using-ajax-mode').checkbox('is checked')){
        ajaxMode = true;
        localStorage.setItem("ajaxMode",true);
      }
      else{
        ajaxMode = false;
        localStorage.setItem("ajaxMode",false);
      }
    }
  });
  
  //Ajax calling
  var tableCall = function(e) {
    if (ajaxMode=="true"){
      e.preventDefault();
      setCookie("openAsAjax", "true", 30/24/60/60); //set cookie for 30s
      $("#table-dimmer").dimmer("show");
      var href = $(this).attr("href");
      var backForward = false;
      if (href == null){
          href = location.href;
          backForward = true;
      }
      $('table#list').load(href, function(response, status, xhr){
        //destroy cookie
        setCookie("openAsAjax", "true", -1);
        if ( status == "error" ) {
          alert("Error !\n" + xhr.status + " " + xhr.statusText);
          location.reload();
        }
        else{
        $("#table-dimmer").dimmer('hide');
        //Set html5 pushstate (harus diatas setTittle & generateBreadcrumb)
        if(!backForward){
          history.pushState("", "", href);
        }
        //Re-setting page
        setTittle();
        generateBreadcrumb();
        tableListDOM();
        //hide download button after loading ajax
        $('#btn-download').css('display','none');
        }
        ///Event for calling ajax
        //click on folder link
        $("#list > tbody > tr.folder > td > a").click(tableCall);
        //click on header (sort)
        $("#list > thead > tr > th > a").click(tableCall);
        //click on breadcrumb
        $("#breadcrumb > a").click(tableCall);
        //on back or forward 
        $(window).on('popstate', tableCall);
      });
    }
  };
  
  ///Event for calling ajax
  //click on folder link
  $("#list > tbody > tr.folder > td > a").click(tableCall);
  //click on header (sort)
  $("#list > thead > tr > th > a").click(tableCall);
  //click on breadcrumb
  $("#breadcrumb > a").click(tableCall);
  //on back or forward 
  $(window).on('popstate', tableCall);
}

function loadTheme(theme){
  var colors = ['blue','green','grey','orange','pink','purple','teal'];
  var colorsString = colors.join(" ");
  var elemen = ['#back-to-top', '#sidebar > .item > .ui.message', '#header-menu', '.px-nav-mobile > .ui.menu', '#list', '#footer'];
  
  //if random
  if(theme=="random"){
    theme = colors[Math.floor(Math.random() * colors.length)];
  }
  
  //theming elemen
  for (i = 0; i < elemen.length; ++i) {
    //remove color class
    $(elemen[i]).removeClass(colorsString);
    //add color class
    $(elemen[i]).addClass(theme);
  }
  
  //css: .px-header
  $('.px-header').css('background-image', 'url('+urlPrefix+'/img/bg-'+theme+'.png'+urlSuffix+')');
}

function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

$(document).ready(function(){
  /// Setting HTML Title
  setTittle();
    
  /// convert all selection to dropdown
  $('select.dropdown').dropdown();
  
  /// Toggle Buttons
  // show hide generated links
  toggleButton("#btn-generated-links", "#generated-links");
    
  /// sidebar clicked event
  sidebarsClicked()

  /// modals clicked event
  modalsClicked()
  
  /// Generating Breadcrumb
  generateBreadcrumb();
  
  /// Back to Top
  backToTop();
  
  /// Filter/Search Box Event
  filterBoxEvent();

  /// Table list DOM Hack
  tableListDOM();
  
  /// Load site settings & theme
  loadSiteSetting();
  loadTheme(theme);
  
  /// Generate php execution timw
  $('#execution-time > b').text((time1 + time2).toFixed(6));
  
  /// Disable footer on IE, its not fully support flexbox yet
  if(detectIE()){
    $('#footer').css('display','none');
    $('#list').css('margin-bottom','30px');
  }
});
