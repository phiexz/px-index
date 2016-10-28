<div class="ui grid px-nav">
  <!-- tablet & computer menu -->
  <div class="computer tablet only column">
    <div id="header-menu" class="ui fixed teal inverted large menu">
      <div class="ui container">
        <a id="btn-sidebar" class="item" data-tooltip="Open Menu" data-position="bottom left" data-inverted=""><i class="large bars icon"></i></a>
        <a href="/" class="header item active" data-tooltip="Back to Home" data-position="bottom center" data-inverted=""><i class="large disk outline icon"></i><strong><?php echo headerMessage ?></strong></a>
        <a id="btn-download" class="item" data-tooltip="Generate Links from selected items" data-position="bottom center" data-inverted="" style="display:none;"><i class="large download icon"></i>Download</a>
        <a id="btn-donate" class="item" data-tooltip="Donation to keep server alive!!" data-position="bottom center" data-inverted=""><i class="large money icon"></i>Donate</a>
        <?php if(ReportEmail){ ?>
        <a id="btn-report" class="item" data-tooltip="Report broken / ilegal files" data-position="bottom center" data-inverted=""><i class="large envelope icon"></i>Report</a>
        <?php } ?>
        <a class="item" data-tooltip="Filter List by name" data-position="bottom center" data-inverted=""><i class="large filter icon"></i>
          <div class="ui transparent input">
            <input id="filterBox" type="text" placeholder="Filter List...">
          </div>
        </a>
      </div>
    </div>
  </div>
  <!-- mobile menu -->
  <div class="mobile only column px-nav-mobile">
    <div class="ui fixed teal inverted menu">
      <a id="btn-sidebar2" class="item"><i class="large bars icon"></i></a>
      <a href="/" class="header item"><i class="large disk outline icon"></i><strong><?php echo headerMessage ?></strong></a>
      
      <div class="right menu">
        <a id="btn-mobile-menu" class="item"><i class="large caret down icon"></i></a>
      </div>
    </div>
  </div>
</div>

<!-- mobile menu -->
<div id="mobile-menu-item" class="ui top fluid vertical menu sidebar px-nav-item-mobile">
  <!--<a id="btn-download2" class="item"><i class="large download icon"></i>Download</a>-->
  <a id="btn-donate2" class="item"><i class="large money icon"></i>Donate</a>
  <?php if(ReportEmail){ ?>
  <a id="btn-report2" class="item"><i class="large envelope icon"></i>Report</a>
  <?php } ?>
  <a class="item"><i class="large filter icon"></i>
    <div class="ui transparent input" style="max-width: 80%;">
      <input id="filterBox2" type="text" placeholder="Filter List...">
    </div>
  </a>
</div>