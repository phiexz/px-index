<?php
    // Berpengaruh ke url
    define('CDN', '');
    define('VER', '3.0.1');
    
    // Location for px-index file
    // ex: /px-index or ../px-index or else
    define('directory', '');

    // Header Welcome
    define('UseHeaderWelcome', true);
    define ('HeaderWelcome', '<h2>Welcome to PX Download Page<br>
                              <small>Version: <span class="badge">'.VER.'</span></small></h2>');
        // Server Storage Status
        // Header Welcome must be enabled to use this
        // You need to enable cors on your server to use this
        // More info: http://enable-cors.org
        // And you need json file with disk_p (percent), disk_t (total space) and disk_f(free space) variable
        // To generate json file, you can use "df -h --total" in linux system 
        define('ServerStorageStatus', false);
        // Variable for auto refresh Server Storage Status (in minutes)
        define('ServerStorageStatusAutoRefresh',true);
        define('ServerStorageStatusAutoRefreshMinutes',5);
        if(ServerStorageStatus){
            $ServerStorageStatus_array=array( //id(dont use space)   -   server_label   -   url_for_json
                                              //ex: array("MainServer","main server","http://main.server.com/status.json"),
                                              array("","","")
                                            );
        }
    
    // Max Lenght File name
    // We dont need it, since fancyindex already have this feature
    // Use: fancyindex_name_length instead
    define('MaxFileName', false);
    define('MaxFileNameLength', 65);
    
    // Mail for contact us
    define('ReportEmail', '');
    
    // Change theme (dark/light)
    define('darkLightTheme', true);
    
    //Round filesize to KB/MB/GB/TB
    //Use this with fancyindex_exact_size = on
    define('RoundFileSize', true);
?>
