
<div class="ui grid px-nav">
  <div class="computer tablet only column">
    <div class="ui fixed stackable menu">
      <a id="btn-sidebar" class="item" data-tooltip="Open Menu" data-position="bottom left" data-inverted=""><i class="large bars icon"></i></a>
      <a href="/" class="header item active" data-tooltip="Back to Home" data-position="bottom center" data-inverted=""><i class="large disk outline icon"></i><strong><?php echo headerMessage ?></strong></a>
      <a class="item" data-tooltip="Download selected items" data-position="bottom center" data-inverted=""><i class="large download icon"></i>Download</a>
      <a id="btn-donate" class="item" data-tooltip="Donation to keep server alive!!" data-position="bottom center" data-inverted=""><i class="large money icon"></i>Donate</a>
      <a id="btn-report" class="item" data-tooltip="Report broken / ilegal files" data-position="bottom center" data-inverted=""><i class="large envelope icon"></i>Report</a>
      <a class="item" data-tooltip="Filter List by name" data-position="bottom center" data-inverted=""><i class="large filter icon"></i>
        <div class="ui transparent input">
          <input type="text" placeholder="Filter List...">
        </div>
      </a>
    </div>
  </div>
  <div class="mobile only column px-nav-mobile">
    <div class="ui fixed menu">
      <a id="btn-sidebar2" class="item"><i class="large sliders icon"></i></a>
      <a href="/" class="header item"><i class="large disk outline icon"></i><strong><?php echo headerMessage ?></strong></a>
      
      <div class="right menu">
        <a id="btn-mobile-menu" class="item"><i class="large bars icon"></i></a>
      </div>
    </div>
  </div>
</div>

<div id="mobile-menu-item" class="ui top fluid vertical menu sidebar px-nav-item-mobile">
  <a class="item"><i class="large download icon"></i>Download</a>
  <a id="btn-donate2" class="item"><i class="large money icon"></i>Donate</a>
  <a id="btn-report2" class="item"><i class="large envelope icon"></i>Report</a>
  <a class="item"><i class="large filter icon"></i>
    <div class="ui transparent input" style="max-width: 80%;">
      <input type="text" placeholder="Filter List...">
    </div>
  </a>
</div>