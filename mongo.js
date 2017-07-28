// 以下のコマンドでmongodbを起動しておく
// sudo mongod --dbpath /var/lib/mongodb --logpath /var/log/mongodb.log

var MongoClient = require('mongodb').MongoClient,
    settings = require('./settings');

MongoClient.connect("mongodb://"+settings.host+"/"+settings.db, function(err, db) {
    if (err) { return console.dir(err); }
    console.log("connect to db");
    
    db.collection("users", function(err, collection) {
      if (err) { return console.dir(err); }
      
      var docs = [
        {name: "A", score: 40},
        {name: "B", score: 80},
        {name: "C", score: 60}
      ];
      
      // insert
      // collection.insert(docs, function(err, result) {
      //   if (err) { return console.dir(err); }
      //   console.dir(result)
      // });
      
      // toArrayは抽出結果をすべて持つのでメモリを逼迫する
      // collection.find({name: "A"}).toArray(function(err, items) {
      //   console.log(items)
      // });
      
      var stream = collection.find().stream();
      stream.on("data", function(item) {
        console.log(item)
      });
      
      stream.on("end", function() {
        console.log("finished.");
      });
      
      
    });
})