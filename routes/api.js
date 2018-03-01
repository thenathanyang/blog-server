var express = require('express');
var router = express.Router();
var db = require('../utils/db');
var resp = require('../utils/resp');

const apiController = require("../controllers/api.js");

/* GET Blog Posts */
router.get('/:username', (req, res) => {
	const username = req.params.username;

	apiController.getPosts(username, (err, data) => {
		if (err || data === null)
			return resp.badRequest(req, res, err);

		// TODO: escape backslash \ from data
		const jsonResponse = JSON.stringify(data);
		res.status(200).json(jsonResponse);
	});
});

module.exports = router;
