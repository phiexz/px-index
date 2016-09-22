<?php require_once('config.php'); ?>
        </div><!-- column for table end -->
      </div><!-- grid for table end -->
    <div><!-- pusher end -->
    <script src="<?php echo CDN;echo directory; ?>/js/jquery.min.js?v=<?php echo VER;?>"></script>
    <script src="<?php echo CDN;echo directory; ?>/js/semantic.min.js?v=<?php echo VER;?>"></script>

    <!-- Parsing Configuration from php to javascript -->
    <script type="text/javascript">
      <?php if(serverStatus){
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
      ?>
    </script>
    <script src="<?php echo CDN;echo directory; ?>/js/script.js?v=<?php echo VER;?>"></script>
    <script src="<?php echo CDN;echo directory; ?>/js/server-status.js?v=<?php echo VER;?>"></script>
    
    <?php if(useGoogleAnalytics) {require_once('include/analytics.php');} ?>
    <?php require_once('include/modals.php'); ?>
  </body>
</html>