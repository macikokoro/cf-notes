var Note = require('./notes/models/note');
var $ = require('jquery');
var BasicNoteView = require('./notes/views/note-view'); // Bring in constructor
var NotesCollection = require('./notes/collections/notes-collection');
var NotesCollectionView = require('./notes/views/notes-collection-view')

// var noteView = new BasicNoteView({model: note}); // Initialize from constructor
// $('#notes').html(noteView.$el);



var note = new Note();
note.set('noteBody', 'wow such note, so words');
note.set('awesomeFactor', '10 billion');
note.save();

var note2 = new Note();
note.set('noteBody', 'B-flat');
note2.save();


var notesCollection = new NotesCollection(); // Again make new instance
var notesCollectionView = new NotesCollectionView({collection: notesCollection});
notesCollection.fetch();
$('#notes').html(notesCollectionView.$el);







// console.log(note.get('noteBody'));
// console.log(note);

// note.save({}, {
// 	success: function(res) {
// 		console.log('success!');
// 		console.log(res);
// 	},
// 	error: function(err) {
// 		console.log('error');
// 		console.log(err);
// 	}
// });