var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

var Note = require('../models/note');
var NotesCollection = require('../collections/notes-collection');
var NoteView = require('./note-view');

module.exports = Backbone.View.extend({
	tagName: 'div',
	// This is what happens when success or error returns from a promise:
	initialize: function() {
		this.collection.on('add', this.addNote, this);
		this.collection.on('reset', this.addAll, this);
		this.render();
	},
	addNote: function(note) {
		var noteView = new NoteView({model: note});
		this.$el.children('#notes').append(noteView.$el);
	},
	addAll: function(note) {
		// this.$el.children('#notes').html(''); // Blank out the current $el tag
		$('#notes').html('');
		this.collection.forEach(this.addNote);
	},
	render: function() {
		console.log('Render called');
		var template = require('../templates/notes-collection.hbs');
		this.$el.html(template());
		this.addAll();
	}
});