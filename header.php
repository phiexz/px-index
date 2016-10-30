<?php
    //Check if open as ajax
    if(!isset($_COOKIE["openAsAjax"])){
        require_once('config.php');
?>
<!DOCTYPE html>
<html>
  <head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    
    <!-- favicon -->
    <link rel="apple-touch-icon" sizes="180x180" href="<?php echo urlPrefix; ?>/img/icons/apple-touch-icon.png<?php echo urlSuffix;?>">
    <link rel="icon" type="image/png" href="<?php echo urlPrefix; ?>/img/icons/favicon-32x32.png" sizes="32x32<?php echo urlSuffix;?>">
    <link rel="icon" type="image/png" href="<?php echo urlPrefix; ?>/img/icons/favicon-16x16.png" sizes="16x16<?php echo urlSuffix;?>">
    <link rel="manifest" href="<?php echo urlPrefix; ?>/img/icons/manifest.json<?php echo urlSuffix;?>">
    <link rel="mask-icon" href="<?php echo urlPrefix; ?>/img/icons/safari-pinned-tab.svg<?php echo urlSuffix;?>" color="#5bbad5">
    <link rel="shortcut icon" href="<?php echo urlPrefix; ?>/img/icons/favicon.ico<?php echo urlSuffix;?>">
    <meta name="msapplication-config" content="<?php echo urlPrefix; ?>/img/icons/browserconfig.xml<?php echo urlSuffix;?>">
    <meta name="theme-color" content="#ffffff">

    <!-- css -->
    <link rel="stylesheet" type="text/css" href="<?php echo urlPrefix; ?>/css/semantic.min.css<?php echo urlSuffix; ?>">
    <link rel="stylesheet" type="text/css" href="<?php echo urlPrefix; ?>/css/style.css<?php echo urlSuffix; ?>">
  </head>
  <body>
    <div class="ui inverted segment px-pointer" id="back-to-top" data-tooltip="Back to Top" data-position="left center" data-inverted="">
      <i class="arrow up big icon" ></i>
    </div>
    <?php require_once('include/sidebar.php'); ?>
    <?php require_once('include/header-menu.php'); ?>
    <div class="pusher"> <!-- content pushed by sidebar -->
      <?php require_once('include/header.php'); ?>
      <?php require_once('include/breadcrumb.php'); ?>
      <div id="container-list" class="ui container dimmable" style="margin-top:10px;margin-bottom:30px;">
        <div id="table-dimmer" class="ui inverted dimmer">
          <div class="ui text loader">Loading</div>
        </div>
        <script type="text/javascript">
          //for count execution code time
          var time1 = <?php echo (microtime(true) - $_SERVER["REQUEST_TIME_FLOAT"]); ?>;
        </script>
<?php } ?>