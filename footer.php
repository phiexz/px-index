        <?php require_once("lib/configuration.php"); ?>
        </div></div>

        <script src="//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
        <script>window.jQuery || document.write('<script src="js/vendor/jquery-1.11.2.min.js"><\/script>')</script>
        <!-- bootstrap -->
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/js/bootstrap.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/ekko-lightbox/3.3.0/ekko-lightbox.min.js"></script>
        
        <!-- Parsing Configuration php to javascript -->
        <script type="text/javascript">
            var CDN = "<?php echo CDN ?>";
            var VER = "<?php echo VER ?>";
            var MaxFileName = "<?php echo MaxFileName ?>"
            var directory = "<?php echo directory ?>";
        </script>
        <!-- Main Script -->
        <script src="<?php echo CDN?><?php echo directory?>/js/main.js?v=<?php echo VER?>"></script>

        <!-- Google Analytics: change UA-XXXXX-X to be your site's ID. -->
        <script>
            (function(b,o,i,l,e,r){b.GoogleAnalyticsObject=l;b[l]||(b[l]=
            function(){(b[l].q=b[l].q||[]).push(arguments)});b[l].l=+new Date;
            e=o.createElement(i);r=o.getElementsByTagName(i)[0];
            e.src='//www.google-analytics.com/analytics.js';
            r.parentNode.insertBefore(e,r)}(window,document,'script','ga'));
            ga('create','UA-30998400-3','auto');ga('send','pageview');
        </script>
        <?php
            require_once("lib/contact.php");
            require_once("lib/donate.php");
            require_once("lib/generateURL.php");
            require_once("lib/modalText.php");
        ?>
    </body>
</html>