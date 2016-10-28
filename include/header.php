<div class="px-header">
  <div id="container-header" class="ui grid container">
    <div class="sixteen wide column grid px-header-greetings">
      Hi, Folks! <i class="smile icon"></i>
    </div><br><br>
    <div class="eleven wide column grid px-header-greet">
      Welcome to <dfn>My Storage Server</dfn>
    </div>
    <div class="five wide column grid px-header-greet">
      Version <?php echo VER; ?>
    </div>
  </div>
    <?php
      if (serverStatus)
        {require_once('include/server-status.php');}
    ?>
</div>
