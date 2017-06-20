const request = require('request');
const Book = require('../database-mongo/');

exports.dbLookup = (req, res) => {
  Book.find().limit(25).sort({rating: -1})
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
    var volumeInfo = JSON.parse(body).items[0].volumeInfo;
    var bookObj = {
      title: volumeInfo.title,
      author: volumeInfo.authors[0],
      rating: volumeInfo.averageRating,
      cover: volumeInfo.imageLinks.smallThumbnail
    };
    Book.create(bookObj, (err, books) => {
      if (err) {
        console.log(err);
      }
    })
    .then(() => exports.dbLookup(req, res));
  });
}
