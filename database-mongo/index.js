var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/books');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var bookSchema = mongoose.Schema({
  title: {type: String, unique: true},
  author: String,
  rating: Number,
  cover: String,
  link: String
});

var Book = mongoose.model('Book', bookSchema);

// exports.selectAllBooks = function(callback) {
//   Book.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };
module.exports = Book;
