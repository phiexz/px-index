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
  /// initializing selectable row
  // selectable not needed in mobile
  if($(window).width() >= 768){
    $("#list>tbody").selectable({
      filter: '.file',
      cancel: 'a',
      selected: function(event, ui){
        $('#btn-download').css("display", "block");
      },
      unselected: function(event, ui){
        $('#btn-download').css("display", "none");
      }
    });
  }
  
    
  /// Column 1 Hack ///
  $('#list td:nth-child(1)').each(function() {
    var lastChar = $(this).text().substr($(this).text().length - 1);
    var removedLastChar = $(this).text().slice(0,-1);
    if (lastChar == "/"){
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
});
