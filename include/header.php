<div class="px-header">
  <div id="container-header" class="ui grid container">
    <div class="sixteen wide column grid px-header-greetings">
      <?php echo primaryMessage; ?>
    </div><br><br>
    <div class="sixteen wide column grid px-header-greet">
      <?php echo secondaryMessage; ?>
    </div>
  </div>
    <?php
      if (serverStatus)
        {require_once('include/server-status.php');}
    ?>
</div>
