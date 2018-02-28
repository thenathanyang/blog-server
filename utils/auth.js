var jwt = require("jsonwebtoken");

const JWT_EXPIRATION = 2 * 60 * 60;  // 2 hours in seconds
const JWT_SECRET = 'C-UFRaksvPKhx1txJYFcut3QGxsafPmwCY6SCly3G6c';
const JWT_HEADER = {
  "alg": "HS256",
  "typ": "JWT"
};

const encode = username => new Promise((resolve, reject) => {
  const payload = {
    "exp": JWT_EXPIRATION,
    "usr": username
  };

  jwt.sign(payload, JWT_SECRET, { header: JWT_HEADER, expiresIn: '2h' }, (token, err) => {
    if (err)
      return reject(err);
    resolve(token);
  });
});

exports.set = (res, username) => new Promise((resolve, reject) => {
  encode(username).then(token => {
    res.cookie('jwt', token);
    resolve();
  }).catch(err => {
    reject(err);
  });
});

exports.wipe = res => {
  res.clearCookie('jwt');
}

exports.decode = req => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }, (payload, err) => {
    if (err)
      return reject (err);
    resolve(payload);
  });
});

exports.getUsername = req => new Promise((resolve, reject) => {
  jwt.verify(token, JWT_SECRET, { algorithms: ["HS256"] }, (payload, err) => {
    if (err)
      return reject(err)
    resolve(payload.username)
  });
});
