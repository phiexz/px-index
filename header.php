<?php
    require_once("lib/configuration.php");
?>
<!doctype html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang=""> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8" lang=""> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9" lang=""> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang=""> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <!-- bootstrap -->
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.5/css/bootstrap.min.css">
        
        <link href='http://fonts.googleapis.com/css?family=Roboto' rel='stylesheet' type='text/css'>
        <link rel="stylesheet" href="<?php echo CDN?><?php echo directory?>/css/normalize.min.css">
        <link rel="stylesheet" href="<?php echo CDN?><?php echo directory?>/css/main.css?v=<?php echo VER?>">

        <script src="<?php echo CDN?><?php echo directory?>/js/vendor/modernizr-2.8.3-respond-1.4.2.min.js"></script>
    </head>
    <body>
        <!--[if lt IE 8]>
            <p class="browserupgrade">You are using an <strong>outdated</strong> browser. Please <a href="http://browsehappy.com/">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->

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
                <li data-container="body" data-trigger="hover" data-toggle="popover" data-placement="bottom" data-content="Report broken / ilegal files here!"><a href="#" data-toggle="modal" data-target="#report">Contact &amp; Report</a></li>
                <li data-container="body" data-trigger="hover" data-toggle="popover" data-placement="bottom" data-content="Donation to keep server alive!"><a href="#" data-toggle="modal" data-target="#donate">Donate</a></li>
              </ul>
            </div><!-- /.navbar-collapse -->
          </div><!-- /.container-fluid -->
        </nav>
        <div class="wrapper">
        <?php if(empty($ReportEmail)){ ?>
            <div class="alert alert-danger" role="alert">
              <span class="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
              <span class="sr-only">Error:</span>
              Report Email has not been set >_<
            </div>
        <?php } ?>
        
        <!-- breadcrumb -->
        <div class="box box-breadcrumbs">
            <div class="box-header">
              <div class="box-header-content">
                <div id="breadcrumbs" class="breadcrumbs">
                  <a href="#"></a>
                </div>
              </div>
            </div>
        </div>
        <!-- File list -->
            <h1>Index of: