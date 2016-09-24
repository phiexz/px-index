<!-- Download Modal -->
<div id="modal-download" class="ui small modal">
  <div class="ui icon header">
    <i class="download icon"></i>
    Generate Links
  </div>
  <div class="content">
    <div class="ui info message">
      <div class="ui labels">
        Generated <a id="label-generated-links-num" class="ui label"></a>links. Total size: <a id="label-generated-links-size" class="ui label"></a>
      </div>
    </div>
    <button id="btn-generated-links" class="ui button">Show/Hide Links</button>
    <div id="generated-links" class="ui form" style="display:none;">
      <div class="field"><br>
        <label>Links:</label>
        <textarea readonly=""></textarea>
      </div>
    </div>
  </div>
  <div class="actions">
    <div id="btn-copy-link" class="ui blue button">Copy Link</div>
    <div class="ui red deny button">Close</div>
    <div id="message-copy-success" class="ui success message" style="display:none;">
      <p>Success.. Links Copied :)</p>
    </div>
    <div id="message-copy-error" class="ui error message" style="display:none;">
      <p>Ooops.. something error, you need to copy it yourself :(</p>
    </div>
  </div>
</div>

<!-- Donation Modal -->
<div id="modal-donate" class="ui small basic modal">
  <i class="close icon"></i>
  <div class="ui icon header">
    <i class="money icon"></i>
    Donation to keep server alive!!
  </div>
  <div class="content">
    <p>If you found this site useful, <br>
    Please consider a <strong>donation</strong> to help server cost for this <strong>free service</strong></p>
  </div>
  <div class="actions">
    <div class="ui ok green inverted button">
      <i class="checkmark icon" type="submit" name="submit"></i>
      Yes with Paypal
    </div>
    <div class="ui cancel red inverted button">
      <i class="remove icon"></i>
      No
    </div>
  </div>
  <form id="form-paypal" target="_blank" action="https://www.paypal.com/cgi-bin/webscr" method="post">
    <input type="hidden" name="cmd" value="_s-xclick">
    <input type="hidden" name="encrypted" value="-----BEGIN PKCS7-----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-----END PKCS7-----
    ">
  </form>
</div>

<!-- Report Modal -->
<div id="modal-report" class="ui small modal">
  <div class="ui icon header">
    <i class="envelope icon"></i>
    Report Files
  </div>
  <div class="content">
    <form id="form-report" class="ui form">
      <div class="field">
        <label>Name</label>
        <input type="text" name="reportName" placeholder="Enter Your Name">
      </div>
      <div class="field">
        <label>Email</label>
        <input type="email" name="reportEmail" placeholder="Enter Your Email">
      </div>
      <div class="field">
        <label>Report Type</label>
        <select class="ui fluid dropdown" name="reportType">
          <option disabled selected>Select Report Type</option>
          <option>Report Broken Files</option>
          <option>Report Copyright</option>
          <option>Feedback / Suggestion</option>
        </select>
      </div>
      <div class="field">
        <label>Subject</label>
        <input type="text" name="reportSubject" placeholder="Enter Your Subject">
      </div>
      <div class="field">
        <label>Message</label>
        <textarea name="reportMessage"></textarea>
      </div>
      
    </form>
  </div>
  <div class="actions">
    <div id="btn-report-submit" class="ui primary button">Submit</div>
    <div class="ui red deny button">Close</div>
  </div>
</div>