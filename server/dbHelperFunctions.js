const request = require('request');
const Book = require('../database-mongo');

exports.dbLookup = (req, res) => {
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

  request(options, (err, res, body) => {
    Book.create(JSON.parse(body).items, (err, books) => {
      if (err) {
        throw err;
      }
    })
    .then(() => dbLookup(req, res));
  });
}
