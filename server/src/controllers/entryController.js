function EntryController(service) {
  this.service = service;
  this.makeRequest = this.makeRequest.bind(this);
  this.getRequest = this.getRequest.bind(this);
  this.getClientResponse = this.getClientResponse.bind(this);
  this.getClientResponseData = this.getClientResponseData.bind(this);
  this.setClientResponse = this.setClientResponse.bind(this);
}

EntryController.prototype.makeRequest = function (req, res) {
  this.service.makeRequest(req.body);
  res.sendStatus(200);
};

EntryController.prototype.getRequest = function (req, res) {
  let request = this.service.getRequest();
  res.status(200).send(request);
};

EntryController.prototype.getClientResponse = function (req, res) {
  let details = this.service.getClientResponse();
  res.status(200).send(details);
};

EntryController.prototype.getClientResponseData = function (req, res) {
  let data = this.service.getClientResponseData();
  res.status(200).send(data);
};

EntryController.prototype.setClientResponse = function (req, res) {
  this.service.setClientResponse(req.body);
  res.sendStatus(200);
};

module.exports = EntryController;
