<div class="px-header px-transparent">
  <div id="container-header" class="ui grid container">
    <div class="sixteen wide column centered grid px-header-info">
      <div class="ui piled segment">
        <h2 class="ui center aligned icon header">
          <i class="circular inverted disk outline icon px-pointer"></i>
            <div><?php echo headerMessage; ?></div>
            <div class="ui label">Version<div class="detail"><?php echo VER; ?></div> </div>
        </h2>
        <?php
          if (serverStatus)
            {require_once('include/server-status.php');}
        ?>
      </div>
    </div>
  </div>
</div>
