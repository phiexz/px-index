<div id="sidebar" class="ui left vertical menu sidebar px-transparent">
  <a class="item">
    <div class="ui message">
      <div class="ui centered header">Files Selection</div>
    </div>
    <div class="ui fluid buttons">
      <button class="ui positive button" onclick='fileSelection("select")'>Select All</button>
      <div class="or"></div>
      <button class="ui negative button" onclick='fileSelection("deselect")'>Deselect</button>
    </div>
  </a>
  <a class="item">
    <div class="ui message">
      <div class="ui centered header">Site Interface</div>
    </div>
    <div class="px-sidebar-label">Font Size</div>
    <div class="ui fluid buttons">
      <button class="ui button" onclick='changeSite("font", "decrease")'><i class="minus icon"></i></button>
      <button class="ui button" onclick='changeSite("font", "default", defaultFontSize)'>Default</button>
      <button class="ui button" onclick='changeSite("font", "increase")'><i class="plus icon"></i></button>
    </div>
    <div class="px-sidebar-label">Icon Size</div>
    <div id="btn-icon-size" class="ui fluid buttons">
      <button id="btn-icon-16" class="ui button" onclick='changeSite("icon", "16")'>16</button>
      <button id="btn-icon-20" class="ui button" onclick='changeSite("icon", "20")'>20</button>
      <button id="btn-icon-24" class="ui button" onclick='changeSite("icon", "24")'>24</button>
      <button id="btn-icon-32" class="ui button" onclick='changeSite("icon", "32")'>32</button>
      <button id="btn-icon-48" class="ui button" onclick='changeSite("icon", "48")'>48</button>
    </div>
    <div id="using-transparent" class="ui toggle checkbox px-sidebar-label">
      <input type="checkbox">
      <label>Using Transparent</label>
    </div>
    <div id="fullscreen-mode" class="ui toggle checkbox px-sidebar-label">
      <input type="checkbox">
      <label>Fullscreen Mode</label>
    </div>
  </a>
  <a class="item">
    <div class="ui message">
      <div class="ui centered header">Ajax Mode</div>
    </div>
    <div id="using-ajax-mode" class="ui toggle checkbox">
      <input type="checkbox" name="input-ajax-mode">
      <label>Using Ajax Mode</label>
    </div>
  </a>
</div>