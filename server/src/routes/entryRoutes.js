const express = require("express");
const router = express.Router();

const EntryController = require("../controllers/entryController");
const EntryService = require("../services/entryService");
const entryService = new EntryService();
const entryController = new EntryController(entryService);

router
  .route("/request")
  .get(entryController.getRequest)
  .post(entryController.makeRequest);

router
  .route("/response")
  .get(entryController.getClientResponse)
  .post(entryController.setClientResponse);

router.route("/data").get(entryController.getClientResponseData);

module.exports = router;
