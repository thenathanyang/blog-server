var express = require('express');
var router = express.Router();
var db = require('../utils/db');
var resp = require('../utils/resp');

const apiController = require("../controllers/api.js");

/* GET Blog Posts */
router.get('/:username', (req, res) => {
	const username = req.params.username;

	apiController.getPosts(username, (err, data) => {
		if (err)
			return resp.badRequest(req, res, err);

		res.status(200).json(data);
	});
});

/* GET Post */
router.get('/:username/:postid', (req, res) => {
	const username = req.params.username;
	const postid = req.params.postid;

	apiController.getPost(username, postid, (err, data) => {
		if (err)
			return resp.notFound(req, res, err);

		res.status(200).json(data);
	});
});

module.exports = router;
