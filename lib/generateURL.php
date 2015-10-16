<!-- GenerateURL -->
<div class="modal fade" id="generateURL" tabindex="-1" role="dialog" aria-labelledby="generateURL" aria-hidden="true">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal" aria-hidden="true">&times;</button>
          <h4 class="modal-title" id="generateURL"><strong>Generate URL</strong></h4>
        </div>
        <div class="modal-body">
            <div id="generateURL_false" class="generateURL">
                <div class="alert alert-danger" role="alert">You must at least select one file!!</div>
            </div>
            <div id="generateURL_true" class="generateURL">
                <div class="alert alert-info" role="alert">Generated <span id="nSelected" class="label label-default">X</span> urls</div>
                <textarea id="generatedURL" class="form-control" rows="1" readonly>Generated Link
                </textarea>
            </div>
        </div>
        <div class="modal-footer">
          <button id="copyURL" class="btn btn-primary" data-clipboard-target="#generatedURL">Copy Link</button>
          <button type="button" onClick='$("textarea#generatedURL").focus().select();' class="btn btn-default">Select All</button>
          <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
</div>