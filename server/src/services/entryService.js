const FileHandler = require("./fileHandler");
function EntryService() {
  this.fileHandler = new FileHandler();
}

EntryService.prototype.makeRequest = function (request) {
  this.fileHandler.makeServerRequest(request);
};

EntryService.prototype.getRequest = function () {
  return this.fileHandler.getServerRequest();
};

EntryService.prototype.getClientResponse = function () {
  console.log("INTO getClientResponse");
  return this.fileHandler.getClientResponseDetails();
};

EntryService.prototype.getClientResponseData = function () {
  return this.fileHandler.getClientResponseData();
};

EntryService.prototype.setClientResponse = function (response) {
  this.fileHandler.setClientResponse(response);
};

module.exports = EntryService;
