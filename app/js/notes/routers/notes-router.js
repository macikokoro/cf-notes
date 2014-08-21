var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;
var Note = require('../models/note');
var NoteView = require('../views/note-view');
var NoteFormView = require('../views/note-form-view');
var NotesCollection = require('../collections/notes-collection');
var NotesCollectionView = require('../views/notes-collection-view');

module.exports = Backbone.Router.extend({
	routes: {
		"notes": "index",
		"notes/new": "create",
		"notes/test/:id": "test"
	},
	initialize: function() {
		// this.notes = new NotesCollection();
		// this.notes.fetch();
	},
	index: function() {
		// var self = this; // this refers to router as a whole
		this.notes = new NotesCollection(); // Collection scoped to router, so everyone can see it
		this.notes.fetch();
		var notesView = new NotesCollectionView({collection: this.notes});
		$('#content').html(notesView.$el);
	},
	create: function() {
		var newNote = new Note();
		var formView = new NoteFormView({model: newNote});
		$('#content').html(formView.$el);
	},
	test: function(id) {
		console.log(id);
	}
});