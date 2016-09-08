<!-- Contact Form -->
<div class="modal fade" id="report" tabindex="-1" role="dialog" aria-labelledby="reportLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
        <h4 class="modal-title" id="reportLabel"><strong>Report Files</strong></h4>
      </div>
      <div class="modal-body">
        <form id="report" class="report" name="report" role="form" method="post">
          <div class="form-group">
            <label for="reportName">Name</label>
            <input type="text" class="form-control" id="reportName" name="reportName" placeholder="Enter name">
          </div>
          <div class="form-group">
            <label for="reportEmail">Email address</label>
            <input type="email" class="form-control" id="reportEmail" name="reportEmail" placeholder="Enter email">
          </div>
          <div class="form-group">
            <label for="reportType">Type</label>
            <select class="form-control" name="reportType">
              <option>Report Broken Files</option>
              <option>Report Copyright</option>
              <option>Feedback / Suggestion</option>
            </select>
          </div>
          <div class="form-group">
            <label for="reportSubject">Subject</label>
            <input type="text" class="form-control" id="reportSubject" name="reportSubject" placeholder="Enter subject">
          </div>
          <div class="form-group">
            <label for="reportMessage">Message</label>
            <textarea class="form-control" rows="3" id="reportMessage" name="reportMessage"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <input type="submit" id="reportSubmit" class="btn btn-primary">
        <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
