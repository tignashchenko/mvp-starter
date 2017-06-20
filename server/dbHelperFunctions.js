const request = require('request');
const Book = require('../database-mongo/');

exports.dbLookup = (req, res) => {
  console.log(res);
  Book.find().limit(25).sort({'average-rating': -1})
  .exec((err, result) => {
    if (err) {
      throw err;
    }
    res.send(JSON.stringify(result));
  });
};

exports.fetchFromGoogleBooks = (req, res, query) => {
  let host = `https://www.googleapis.com/books/v1/volumes?q=${query}`;

  let options = {
    url: host
  }

  request(options, (err, response, body) => {
    console.log(Array.isArray(JSON.parse(body).items));
    Book.create(JSON.parse(body).items[0].volumeInfo, (err, books) => {
      if (err) {
        console.log(err);
      }
    })
    .then(() => exports.dbLookup(req, res));
  });
}
