<?php
  if(isset($_COOKIE["openAsAjax"])){
    //destroy cookie
    setcookie("openAsAjax", "", time() - 3600);
  }
  else{
    require_once('config.php'); 
?>
      </div><!-- container for table end -->
      <?php require_once('include/footer.php') ?>
    </div><!-- pusher end -->
    
    <!-- modals -->
    <?php require_once('include/modals.php'); ?>
    
    <script src="<?php echo urlPrefix; ?>/js/jquery.min.js<?php echo urlSuffix; ?>"></script>
    <script src="<?php echo urlPrefix; ?>/js/semantic.min.js<?php echo urlSuffix; ?>"></script>
    <script src="<?php echo urlPrefix; ?>/js/jquery-ui.min.js<?php echo urlSuffix; ?>"></script>
    <script src="<?php echo urlPrefix; ?>/js/clipboard.min.js<?php echo urlSuffix; ?>"></script>

    <!-- Parsing Configuration from php to javascript -->
    <script type="text/javascript">
      <?php
        //Root directory
        echo 'var root = "'.root.'";';
        echo "\n";
        
        //px-index directory
        echo 'var directory = "'.directory.'";';
        echo "\n";
        
        //Header
        echo 'var headerMessage = "'.headerMessage.'";';
        echo "\n";
        
        //Server Status
        if(serverStatus){
          //Server storage status
          echo "var serverStatus = ".serverStatus.";\n";
          //check if autorefresh enabled
          if (serverStatusRefresh){
            echo "var serverStatusRefresh = ".serverStatusRefresh.";\n";
            echo "var serverStatusRefreshTime = ".serverStatusRefreshTime.";\n";
          }
          //status json url
          echo 'var serverStatusURL = "'.serverStatusURL.'";';
          echo "\n";
        }
        
        //Round filesize to KB/MB/GB/TB
        if(roundFileSize) echo "var roundFileSize = ".roundFileSize.";\n";
        
        //for count execution code time
        echo 'var time2 = '.(microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"]).';';
        echo "\n";
      ?>
    </script>
    <script src="<?php echo urlPrefix; ?>/js/script.js<?php echo urlSuffix; ?>"></script>
    <script src="<?php echo urlPrefix; ?>/js/server-status.js<?php echo urlSuffix; ?>"></script>
    
    <?php if(useGoogleAnalytics) {require_once('include/analytics.php');} ?>
<?php } ?>
  </body>
</html>