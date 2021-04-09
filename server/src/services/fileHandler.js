const fs = require("fs");
const config = require("./../config");

function FileHandler() {}

FileHandler.prototype.getServerRequest = function () {
  let raw = fs.readFileSync(config.mediatorPathServer);

  return JSON.parse(raw);
};

FileHandler.prototype.makeServerRequest = function (request) {
  let requestString = JSON.stringify(request, null, 2);

  fs.writeFileSync(config.mediatorPathServer, requestString);
};

FileHandler.prototype.getClientResponseDetails = function () {
  let raw = fs.readFileSync(config.mediatorPathClient);

  return JSON.parse(raw).response;
};

FileHandler.prototype.getClientResponseData = function () {
  let raw = fs.readFileSync(config.mediatorPathClient);

  return JSON.parse(raw).data;
};

FileHandler.prototype.setClientResponse = function (response) {
  let responseString = JSON.stringify(response, null, 2);

  fs.writeFileSync(config.mediatorPathClient, responseString);
};

module.exports = FileHandler;
