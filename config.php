<?php
  // CDN & Versioning
  define('CDN', '');
  define('VER', '4.0.1');
  
  // Root directory for autoindex
  // ex: "/" or "/files" or anything
  define('root', '/');

  // Location for px-index file
  // ex: /px-index or ../px-index or else
  define('directory', '/px-index');

  // Prefix & Suffix Url
  define('urlPrefix', CDN.directory.'/');
  define('urlSuffix', '?v='.VER);

  // Google Analytics
  define('useGoogleAnalytics', false);
  define('googleAnalyticsID','');
  
  // Header Message
  define('headerMessage', 'PX STORAGE SERVER');
  
  //// Server Status
  // server status using json file generated from server.
  // if you want to edit it, just edit "include/server-status.php"
  // and "js/server-status.js"
  define('serverStatus', false);
  define('serverStatusRefresh',false);
  define('serverStatusRefreshTime',5); //in minutes
  define('serverStatusURL', '');
  
  //Round filesize to KB/MB/GB/TB
  //Use this with fancyindex_exact_size = on
  define('roundFileSize', true);
  
  // Mail for Report
  define('ReportEmail', '');
?>