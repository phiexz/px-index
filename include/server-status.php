<div id="container-server-stats" class="ui centered grid container">
  <div class="sixteen wide center aligned column grid px-header-stats">
    <dfn>To view server status, just click button below</dfn>
  </div>
  <div id="serverStatusButton" class="ui centered vertical animated white button">
    <div class="visible content">
      <i class="options icon"></i>
      Server Status
    </div>
    <div class="hidden content">
      Show/Hide status
    </div>
  </div>
</div>
<div id="serverStatus" class="ui segment container" style="display: none;">
  <div id="statusDimmer" class="ui inverted dimmer">
    <div class="ui text loader">Loading</div>
  </div>
  <div class="ui stackable grid">
    <!-- OS -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label">Server OS</a></div>
    <div class="twelve wide column"><div id="statusOS" class="ui label"></div></div>
    <!-- bandwith total -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label">Total Bandwith Used</a></div>
    <div class="twelve wide column"><div id="statusUpload" class="ui label"></div><div id="statusDownload" class="ui label"></div></div>
    <!-- bandwith monthly -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label"><?php echo gmdate("F") ?> Bandwith</a></div>
    <div class="twelve wide column"><div id="statusUploadMonthly" class="ui label"></div><div id="statusDownloadMonthly" class="ui label"></div></div>
    <!-- uptime -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label">Server Uptime</a></div>
    <div class="twelve wide column"><div id="statusDay" class="ui label"></div> <div id="statusHour" class="ui label"></div>  <div id="statusMinute" class="ui label"></div></div>
    <!-- cpu -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label">CPU Load</a></div>
    <div class="twelve wide column">
      <div id="progressCPU" class="ui progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
        <div id="progressCPULabel" class="label"></div>
      </div>
    </div>
    <!-- ram -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label">RAM Usage</a></div>
    <div class="twelve wide column">
      <div id="progressRAM" class="ui progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
        <div id="progressRAMLabel" class="label"></div>
      </div>
    </div>
    <!-- storage -->
    <div class="computer tablet only four wide right aligned column"><a class="ui tag black label">Storage Status</a></div>
    <div class="twelve wide column">
      <div id="progressStorage" class="ui progress">
        <div class="bar">
          <div class="progress"></div>
        </div>
        <div id="progressStorageLabel" class="label"></div>
      </div>
    </div>
  </div>
</div>