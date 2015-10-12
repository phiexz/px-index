<?php
    // Berpengaruh ke url
    define('CDN', '');
    define('VER', '3.0.1');
    
    // Location for px-index file
    // ex: /px-index or ../px-index or else
    define('directory', '');

    // Header Welcome
    define('UseHeaderWelcome', true);
    define ('HeaderWelcome', '<div id="randomPageHeader" class="alert text-center" role="alert"><h2>Welcome to PX Download Page<br>
                              <small>Version: <span class="badge">'.VER.'</span></small></h2></div>');
    
    // Max Lenght File name
    // We dont need it, since fancyindex already have this feature
    // Use: fancyindex_name_length instead
    define('MaxFileName', false);
    define('MaxFileNameLength', 65);
    
    // Mail for contact us
    define('ReportEmail', '');
    
    //Round filesize to KB/MB/GB/TB
    //Use this with fancyindex_exact_size = on
    define('RoundFileSize', true)
?>
