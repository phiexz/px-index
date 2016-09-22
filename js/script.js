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
  });
  $('#btn-mobile-menu').click(function(){
    $('#mobile-menu-item').sidebar({
      transition       : 'overlay',
      mobileTransition : 'overlay'})
    .sidebar('toggle');
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

$(document).ready(function(){
  /// Setting HTML Title
  setTittle();
    
  /// convert all selection to dropdown
  $('select.dropdown').dropdown();
  
  /// sidebar clicked event
  sidebarsClicked()

  /// modals clicked event
  modalsClicked()
  
  /// Generating Breadcrumb
  generateBreadcrumb();

});