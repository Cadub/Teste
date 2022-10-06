var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";


var document = new Document(index.html)
const p = document.getElementsByClassName("garantia")



MongoClient.connect(url, function(err, db) {

  if (err) throw err;
  var dbo = db.db("Findly");
  var myobj = { name: p, senha: "1234" };

  dbo.collection("usuarios").insertOne(myobj, function(err, res) {
    if (err) throw err;
    console.log("1 document inserted");
    db.close();

  });
});