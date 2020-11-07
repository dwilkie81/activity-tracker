var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/activityTracker.db');
 
db.serialize(function() {
  db.run("DROP TABLE lorem");
});
 
db.close();