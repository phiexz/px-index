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

function parallax(){
  $(window).scroll(function () {
    $("body").css("background-position","50% " + ($(this).scrollTop() / 2 +55) + "px");
  });
}

function generateBreadcrumb(){
    var loc = window.location.pathname;
    var segments = loc.split('/');
    var breadcrumb = '';
    var currentPath = '/';
    
    // hide breadcrumb if on homepage/root
    if ( window.location.pathname == root ){
      // Index (home) page
      $('#breadcrumb-segment').css('display','none');
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
    $('#breadcrumb').append(breadcrumb);
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
    $('#form-report').submit();
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
    var urlPath = window.location.pathname.split( '/' );
    var currentDir = urlPath[urlPath.length-2];
    window.document.title = currentDir.toUpperCase() + " | " + headerMessage;
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
    if (bytes == 0) return '0B';
    var i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)));
    if (i == 0) return bytes + ' ' + sizes[i];
    return (bytes / Math.pow(1024, i)).toFixed(2) + sizes[i];
};


function tableListDOM() {
  //add semantic ui class to table
  $('#list').addClass("ui unstackable selectable fixed single line striped compact table px-transparent");
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
  
    
  /// Column 1 Hack ///
  $('#list td:nth-child(1)').each(function() {
    var lastChar = $(this).text().substr($(this).text().length - 1);
    var removedLastChar = $(this).text().slice(0,-1);
    if (lastChar == "/"){
      //Remove slash from last directory name
      $(this).children("a").text(removedLastChar);
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
    
  /// sidebar clicked event
  sidebarsClicked()

  /// modals clicked event
  modalsClicked()
  
  /// Generating Breadcrumb
  generateBreadcrumb();
  
  /// Filter/Search Box Event
  filterBoxEvent();

  /// Table list DOM Hack
  tableListDOM();

});