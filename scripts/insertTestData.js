var sqlite3 = require('sqlite3').verbose();
var db = new sqlite3.Database('./db/activityTracker.db');
 
db.serialize(function() { 
  var stmt = db.prepare("INSERT INTO lorem VALUES (?)");
  for (var i = 0; i < 10; i++) {
      stmt.run("Ipsum " + i);
  }
  stmt.finalize();
});
 
db.close();