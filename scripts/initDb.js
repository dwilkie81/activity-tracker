var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/activityTracker.db');
 
db.serialize(function() {
  db.run("CREATE TABLE IF NOT EXISTS lorem (info TEXT)");
});
 
db.close();