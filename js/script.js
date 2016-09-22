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



$(document).ready(function(){
  /// convert all selection to dropdown
  $('select.dropdown').dropdown();
  
  /// sidebar
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
  
  /// modals
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
    })
  ;
  
});