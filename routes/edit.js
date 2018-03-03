var express = require('express');
var router = express.Router();
var resp = require('../utils/resp');
var auth = require('../utils/auth');

/**
 * GET /edit/
 * The main URL from which the user can access the Angular blog editor app.
 */
router.get('/', (req, res) => {
	try {
		const payload = auth.decode(req);
	} catch (err) {
		return res.redirect("/login?redirect=/edit/");
	}

	// Return Angular app
	res.send("Return Angular app");

});

module.exports = router;
