var MongoClient = require('mongodb').MongoClient

var state = {
  db: null,
}

exports.connect = (url, dbName, done) => {
  if (state.db) return done()

  MongoClient.connect(url, function(err, db) {
    if (err) return done(err)
    state.db = db.db(dbName);
    done()
  })
}

exports.get = () => {
  return state.db
}

exports.close = done => {
  if (state.db) {
    state.db.close(function(err, result) {
      state.db = null
      state.mode = null
      done(err)
    })
  }
}
