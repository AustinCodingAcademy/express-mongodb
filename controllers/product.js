const {getDatabase} = require("../database");

exports.list = function(req,res) {
    let db = getDatabase();
    const collection = db.collection('products');
    // Find some documents
    let found = collection.find({});
    found.toArray(function(err, products) {
      res.json(products)
    });
}