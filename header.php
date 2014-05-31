<?php
  define('CDN', '');
  define('VER', '2.0.1');
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="content-type" content="text/html; charset=utf-8"/>
  <meta name="viewport" content="width=device-width"/>
  <title>Files...</title>
  <link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.1.1/css/bootstrap.min.css">
  <link rel="stylesheet" href="<?php echo CDN?>/px-index/css/styles.css?v=<?php echo VER?>">
  <link href='http://fonts.googleapis.com/css?family=Roboto:300' rel='stylesheet' type='text/css'>
  <script src="<?php echo CDN?>/px-index/js/jquery.min.js"></script>
  <script src="//netdna.bootstrapcdn.com/bootstrap/3.1.1/js/bootstrap.min.js"></script>
  <script src="<?php echo CDN?>/px-index/js/scripts.js?v=<?php echo VER?>"></script>
</head>
<body>
<nav class="navbar navbar-default navbar-fixed-top" role="navigation">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" href="#" data-toggle="tooltip" data-placement="bottom" title="PX Download Ver <?php echo VER ?>">PX Download</a>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li class="active"><a href="/" data-container="body" data-toggle="tooltip" data-placement="bottom" title="Back to Home"><span class="glyphicon glyphicon-home"></span></a></li>
        <li class="disabled"><a href="#" data-container="body" data-trigger="hover" data-toggle="popover" data-placement="bottom" data-content="Feature under development!">Upload Files</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown">More Links <b class="caret"></b></a>
          <ul class="dropdown-menu">
            <li><a href="http://android.phiexz.com" target="_blank"><span class="glyphicon glyphicon-fire"></span> Android Development</a></li>
            <li><a href="http://mirror.phiexz.com" target="_blank"><span class="glyphicon glyphicon-hdd"></span> Mirror Android</a></li>
            <li><a href="http://cplusplus.phiexz.com" target="_blank"><span class="glyphicon glyphicon-book"></span> C++ Tutorial</a></li>
            <li class="divider"></li>
            <li><a href="http://fm.phiexz.com" target="_blank"><span class="glyphicon glyphicon-folder-open"></span> PX File Manager</a></li>
            <li><a href="http://rl.phiexz.com" target="_blank"><span class="glyphicon glyphicon-save"></span> PX Rapidleech</a></li>
            <li><a href="http://downloader.phiexz.com:99" target="_blank"><span class="glyphicon glyphicon-globe"></span> PX Downloader</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
<div class="box box-breadcrumbs">
    <div class="box-header">
      <div class="box-header-content">
        <div id="breadcrumbs" class="breadcrumbs">
          <a href="#"></a>
        </div>
      </div>
    </div>
    <div class="box-content">
      <h1>Index of:
