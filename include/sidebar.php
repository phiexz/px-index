<div id="sidebar" class="ui left vertical menu sidebar">
  <a class="item">
    <div class="ui message">
      <div class="ui centered header">Files Selection</div>
    </div>
    <div class="ui fluid buttons">
      <button class="ui teal button" onclick='fileSelection("select")'>Select All</button>
      <div class="or"></div>
      <button class="ui pink button" onclick='fileSelection("deselect")'>Deselect</button>
    </div>
  </a>
  <a class="items">
    <a class="item">
      <div class="ui message">
        <div class="ui centered header">Site Interface</div>
      </div>
      <div class="px-sidebar-label"><i class="font icon"></i>Font Size</div>
      <div style="text-align: center;">
        <div class="ui buttons">
          <button class="ui button" onclick='changeSite("font", "decrease")'>-</button>
          <button class="ui button" onclick='changeSite("font", "default", defaultFontSize)'>Default</button>
          <button class="ui button" onclick='changeSite("font", "increase")'>+</button>
        </div>
      </div>
    </a>
    <a class="item">
      <div class="px-sidebar-label"><i class="star icon"></i>Icon Size</div>
      <div style="text-align: center;">
        <div id="btn-icon-size" class="ui buttons">
          <button id="btn-icon-16" class="ui button" onclick='changeSite("icon", "16")'>16</button>
          <button id="btn-icon-20" class="ui button" onclick='changeSite("icon", "20")'>20</button>
          <button id="btn-icon-24" class="ui button" onclick='changeSite("icon", "24")'>24</button>
          <button id="btn-icon-32" class="ui button" onclick='changeSite("icon", "32")'>32</button>
          <button id="btn-icon-48" class="ui button" onclick='changeSite("icon", "48")'>48</button>
        </div>
      </div>
    </a>
    <a class="item">
      <div class="px-sidebar-label"><i class="paint brush icon"></i>Theme Color</div>
      <div style="text-align: center;">
        <div id="btn-color-theme" class="ui buttons">
          <button id="btn-theme-random" class="ui button" onclick='changeSite("theme", "random")' data-tooltip="Random" data-position="bottom left" data-inverted="">?</button>
          <button id="btn-theme-pink" class="ui pink button" onclick='changeSite("theme", "pink")' data-tooltip="Pink" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
          <button id="btn-theme-orange" class="ui orange button" onclick='changeSite("theme", "orange")' data-tooltip="Orange" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
          <button id="btn-theme-green" class="ui green button" onclick='changeSite("theme", "green")' data-tooltip="Green" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
          <button id="btn-theme-teal" class="ui teal button" onclick='changeSite("theme", "teal")' data-tooltip="Teal" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
          <button id="btn-theme-blue" class="ui blue button" onclick='changeSite("theme", "blue")' data-tooltip="Blue" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
          <button id="btn-theme-purple" class="ui purple button" onclick='changeSite("theme", "purple")' data-tooltip="Purple" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
          <button id="btn-theme-grey" class="ui grey button" onclick='changeSite("theme", "grey")' data-tooltip="Grey" data-position="bottom left" data-inverted="">&nbsp;&nbsp;</button>
        </div>
      </div>
    </a>
    <a class="item">
      <div class="px-sidebar-label"><i class="desktop icon"></i>Fullscreen Mode</div>
      <div id="fullscreen-mode" class="ui toggle checkbox px-sidebar-label">
        <label>Turn On / Off</label>
        <input type="checkbox">
      </div>
    </a>
  </a>
  <a class="item">
    <div class="ui message">
      <div class="ui centered header">Ajax Mode</div>
    </div>
    <div class="px-sidebar-label"><i class="refresh icon"></i>Ajax Mode</div>
    <div id="using-ajax-mode" class="ui toggle checkbox">
      <input type="checkbox" name="input-ajax-mode">
      <label>Turn On / Off</label>
    </div>
  </a>
</div>