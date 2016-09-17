<?php require_once('config.php'); ?>
        </div><!-- column -->
      </div> <!-- grid -->
    </div> <!-- container -->
    <script src="<?php echo CDN;echo directory; ?>/js/jquery.min.js?v=<?php echo VER;?>"></script>
    <script src="<?php echo CDN;echo directory; ?>/js/semantic.min.js?v=<?php echo VER;?>"></script>
    <script src="<?php echo CDN;echo directory; ?>/js/script.js?v=<?php echo VER;?>"></script>
    
    <?php if(useGoogleAnalytics) {require_once('include/analytics.php');} ?>
    
  </body>
</html>