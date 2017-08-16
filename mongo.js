const mongoClient = require('mongodb').MongoClient;

let database = null

function connect(url, callback) {
//If we have already connected, don't run this again
  if(database !== null) {
    return database;
  }

  mongoClient.connect(url, function(err, db){
    database = db;
    callback();
  })
}

function db(){
  return database;
};

module.exports = {
  connect: connect,
  db: db
}
