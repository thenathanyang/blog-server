var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/edit/', (req, res) => {
	console.log("entered the /edit/ route");
	try {
		const payload = auth.decode(req);
	} catch (err) {
		return res.redirect("/login?redirect=/edit/");
	}
	console.log("entered the /edit/ route");

	// Return Angular app
	res.send("Return Angular app");

});

module.exports = router;
