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
                <div class="alert alert-info" role="alert">Generated <span id="nSelected" class="label label-default" style="font-size:15px;">X</span> urls. Size: <span id="totalSize" class="label label-default" style="font-size:15px;">X</span></div>
                <textarea id="generatedURL" class="form-control" rows="1" readonly>Generated Link
                </textarea>
            </div>
        </div>
        <div class="modal-footer">
            <div class="alert alert-success" id="copyURLSuccess">
                <strong>Copied! </strong>
                All url links copied to clipboadrd
            </div>
            <div class="alert alert-danger" id="copyURLFailed">
                <strong>Oh no!</strong>
                Something is error, please manual copy url links
            </div>
          <button id="copyURL" class="btn btn-primary" data-clipboard-target="#generatedURL">Copy Link</button>
          <button id="selectURL" type="button" onClick='$("textarea#generatedURL").focus().select();' class="btn btn-default">Select All</button>
          <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
</div>
