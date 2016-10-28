function getStatus(type){
  if (type=="call"){
    $.getJSON(serverStatusURL, function(serverStats) {
      //// Ram & Storage calculation
      var ramUsedPercent = serverStats.ram_u/serverStats.ram_t*100;
      var ramCached = (serverStats.ram_ub-serverStats.ram_u);
      var totalStorage = parseInt(serverStats.disk_u)+parseInt(serverStats.disk_f);
      
      /* Cek kalo uptime menit = min (hour = 0) error */
      if (serverStats.up_m=="min") {
        serverStats.up_m=serverStats.up_h;
        serverStats.up_h=0;
      }
     
      //// Inject Value
      // os
      $('#statusOS').text(serverStats.os);
      // bandwith total
      $('#statusUpload').append('<i class="upload icon"></i>'+serverStats.total_ul);
      $('#statusDownload').append('<i class="download icon"></i>'+serverStats.total_dl);
      // bandwith monthly
      $('#statusUploadMonthly').append('<i class="upload icon"></i>'+serverStats.ul);
      $('#statusDownloadMonthly').append('<i class="download icon"></i>'+serverStats.dl);
      // uptime
      $('#statusDay').text(serverStats.up_d+" Days");
      $('#statusHour').text(serverStats.up_h+" Hours");
      $('#statusMinute').text(serverStats.up_m+" Minutes");
      // cpu
      $('#progressCPU').progress({
        percent: serverStats.cpu_load,
        autoSuccess: false,
        text: {
          active  : serverStats.cpu_load + " Load on " + serverStats.proc
        }
      });
      $('#progressCPU').addClass(getColor("progress",serverStats.cpu_load));
      // ram
      $('#progressRAM').progress({
        percent: ramUsedPercent,
        autoSuccess: false,
        text: {
          active  : serverStats.ram_u + "MB of " + serverStats.ram_t + "MB used, Cached: " + ramCached + "MB"
        }
      });
      $('#progressRAM').addClass(getColor("progress",ramUsedPercent));
      // storage
      $('#progressStorage').progress({
        percent: serverStats.disk_p,
        autoSuccess: false,
        text: {
          active  : "Using " + serverStats.disk_u + "GB of " + totalStorage + "GB, Free: " + serverStats.disk_f +"GB"
        }
      });
      $('#progressStorage').addClass(getColor("progress",serverStats.disk_p));
      
      // hide dimmer after finish load
      setTimeout(function(){ $("#statusDimmer").dimmer('hide'); }, 1000);
    });
  }
  else if (type=="destroy"){
    //// Inject Value
    // os
    $('#statusOS').text("");
    // bandwith total
    $('#statusUpload').text("");
    $('#statusDownload').text("");
    // bandwith monthly
    $('#statusUploadMonthly').text("");
    $('#statusDownloadMonthly').text("");
    // uptime
    $('#statusDay').text("");
    $('#statusHour').text("");
    $('#statusMinute').text("");
    // cpu
    $('#progressCPU').progress({
      percent: 0
    });
    $('#progressCPU').removeClass();
    $('#progressCPU').addClass("ui progress");
    $('#progressCPULabel').text("");
    // ram
    $('#progressRAM').progress({
      percent: 0
    });
    $('#progressRAM').removeClass();
    $('#progressRAM').addClass("ui progress");
    $('#progressRAMLabel').text("");
    // storage
    $('#progressStorage').progress({
      percent: 0
    });
    $('#progressStorage').removeClass();
    $('#progressStorage').addClass("ui progress");
    $('#progressStorageLabel').text("");
  }
}

$(document).ready(function(){
  /// Open/Close server status info
  var isStatusOPen = false;
  $( "#serverStatusButton" ).click(function() {
    isStatusOPen = !isStatusOPen;
    $( "#serverStatus" ).slideToggle( "slow" );
    if(isStatusOPen){
      $("#statusDimmer").dimmer('show');
      getStatus("call");
      $('#container-breadcrumb').css('margin-top', '0px')
    }
    else{
      getStatus("destroy");
      $('#container-breadcrumb').css('margin-top', '-200px')
    }
    
  });
  // check server status info autorefresh
  if(typeof serverStatusRefresh !== 'undefined') {
    setInterval(function(){
      if(isStatusOPen){
          $("#statusDimmer").dimmer('show');
          getStatus("destroy");
          getStatus("call");
      }
    }, 1000*60*serverStatusRefreshTime);
  }
});