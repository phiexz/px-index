<?php require_once('config.php'); ?>
<!DOCTYPE html>
<html>
  <head>
    <!-- Standard Meta -->
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0">
    
    <!-- favicon -->
    <link rel="icon" href="<?php echo CDN;echo directory; ?>/favicon.ico?v=<?php echo VER;?>" type="image/x-icon" sizes="16x16">

    <!-- css -->
    <link rel="stylesheet" type="text/css" href="<?php echo CDN;echo directory; ?>/css/semantic.min.css?v=<?php echo VER;?>">
    <link rel="stylesheet" type="text/css" href="<?php echo CDN;echo directory; ?>/css/style.css?v=<?php echo VER;?>">
  </head>
  <body>
    <i class="bordered arrow up big icon" id="back-to-top" title="Back to top"></i>
    <?php require_once('include/sidebar.php'); ?>
    <?php require_once('include/header-menu.php'); ?>
    <div class="pusher"> <!-- content pushed by sidebar -->
      <?php require_once('include/header.php'); ?>
      <?php require_once('include/breadcrumb.php'); ?>
      <div class="ui container" style="margin-top:10px;margin-bottom:30px;">