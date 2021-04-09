import { SERVER } from "../utils";

function EntryService() {
  this.server = SERVER;
  this.years = [];
  this.entries = [];
  this.lastUpdate = {};
}

EntryService.prototype.getData = function () {};
