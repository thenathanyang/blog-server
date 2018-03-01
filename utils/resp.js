exports.noContent = (req, res) => {
	res.status(204).json({});
};

exports.badRequest = (req, res, err) => {
	res.set("Content-Type", "application/json; charset=utf-8");
	res.status(400).json({
		code: 400,
		status: "Bad Request",
		error: err.message
	});
};

exports.unauthorized = (req, res, msg) => {
	const errorMessage = (msg && typeof msg === "string" && msg.length > 0) ? msg : "Request lacks valid credentials";
	res.set("Content-Type", "application/json; charset=utf-8");
	res.status(401).json({
		code: 401,
		status: "Unauthorized",
		error: errorMessage
	});
};

exports.notFound = (req, res, err, msg) => {
	const errorMessage = (msg && typeof msg === "string" && msg.length > 0) ? msg : err.message;
	res.set("Content-Type", "application/json; charset=utf-8");
	res.status(404).json({
		code: 404, 
		status: "Not Found",
		error: errorMessage
	});
};


exports.serverError = (req, res, err, msg) => {
	const errorMessage = (msg && typeof msg === "string" && msg.length > 0) ? msg : "An unexpected error occurred";
	res.set("Content-Type", "application/json; charset=utf-8");
	res.status(500).json({
		code: 500,
		status: "Internal Server Error",
		error: errorMessage
	});
};
