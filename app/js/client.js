var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var NotesRouter = require('./notes/routers/notes-router');
var notesRouter = new NotesRouter();

Backbone.history.start(); // Allows for fwd and back
notesRouter.navigate('/notes', {trigger: true});


// var Note = require('./notes/models/note');
// var $ = require('jquery');
// var BasicNoteView = require('./notes/views/note-view'); // Bring in constructor
// var NotesCollection = require('./notes/collections/notes-collection');
// var NotesCollectionView = require('./notes/views/notes-collection-view')

// // var noteView = new BasicNoteView({model: note}); // Initialize from constructor
// // $('#notes').html(noteView.$el);

// console.log('hai');

// var note = new Note();
// note.set('noteBody', 'WOW such note, so words');
// note.set('awesomeFactor', '10 billion');
// note.save();

// var note2 = new Note();
// note.set('noteBody', 'B-flat');
// note2.save();


// var notesCollection = new NotesCollection(); // Again make new instance
// var notesCollectionView = new NotesCollectionView({collection: notesCollection});
// notesCollection.fetch(); // This is async; if you want to do something right after, use .done(), which--BTW--executes regardless of whether a promise returns true or false
// $('#notes').html(notesCollectionView.$el);







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