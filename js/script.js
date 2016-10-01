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

function toggleButton(selectorTrigger, selectorToggled, speed = "slow"){
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

function parallax(){
  $(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 2 +55) + "px");
  });
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
      transition       : 'overlay',
      mobileTransition : 'overlay'})
    .sidebar('toggle');
    //remove pushable class as we using overlay and for fixing black block on mobile
    $('body').removeClass("pushable");
  });
  $('#btn-mobile-menu').click(function(){
    $('#mobile-menu-item').sidebar({
      transition       : 'overlay',
      mobileTransition : 'overlay'})
    .sidebar('toggle');
    //remove pushable class as we using overlay and for fixing black block on mobile
    $('body').removeClass("pushable");
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
    window.document.title = headerMessage.toUpperCase();
  }
  else{
    var urlPath = window.location.pathname.split( '/' );
    var currentDir = decodeURIComponent(urlPath[urlPath.length-2]);
    window.document.title = currentDir.toUpperCase() + " | " + headerMessage.toUpperCase();
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
  $('#list').addClass("ui unstackable selectable fixed single line striped compact table raised segment px-transparent");
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
        localStorage.setItem("fontSize", fontSize+2);
    }
    else if(value=="decrease"){
        $('table#list').css('font-size', fontSize-2);
        localStorage.setItem("fontSize", fontSize-2);
    }
    else if(value=="default"){
        $('table#list').css('font-size', defaultValue);
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
  else if(type=="transparent"){
    if(value=="true"){
      $('head').append('<style>.px-transparent{opacity: '+defaultValue+';}</style>');
      localStorage.setItem("usingTransparent",true);
    }
    else{
      $('head').append('<style>.px-transparent{opacity: 1;}</style>');
      localStorage.setItem("usingTransparent",false);
    }
  }
  else if(type=="fullscreen"){
    if(value=="true"){
      $('#container-list').removeClass("container");
      $('#container-header').removeClass("container");
      $('#container-breadcrumb').removeClass("container");
      localStorage.setItem("fullscreenMode",true);
    }
    else{
      $('#container-list').addClass("container");
      $('#container-header').addClass("container");
      $('#container-breadcrumb').addClass("container");
      localStorage.setItem("fullscreenMode",false);
    }
  }
}

function loadSiteSetting(){
  /// initialize
  defaultFontSize = parseInt($('table#list').css('font-size'));
  defaultIconSize = 24;
  opacityValue = parseFloat($('.px-transparent').css('opacity'));
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
  //using transparent
  if (localStorage.getItem("usingTransparent") === null)
    $('#using-transparent').checkbox('check');
  else{
    usingTransparent=localStorage.getItem("usingTransparent");
    if(usingTransparent=="true")
      $('#using-transparent').checkbox('check');
    else{
       $('#using-transparent').checkbox('uncheck');
       changeSite("transparent",usingTransparent);
    }
  }
  //checkbox transparent changed
  $('#using-transparent').checkbox({
    onChange: function() {
      //check if checkbox checked
      if($('#using-transparent').checkbox('is checked'))
        changeSite("transparent","true",opacityValue)
      else
        changeSite("transparent","false")
    }
  });
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

$(document).ready(function(){
  /// Setting HTML Title
  setTittle();
    
  /// convert all selection to dropdown
  $('select.dropdown').dropdown();
  
  /// initialize parallax background
  // parallax should not used in mobile or tablet
  if($(window).width() >= 992){
    parallax();
  }
  
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
  
  /// Load site settings
  loadSiteSetting();
});
