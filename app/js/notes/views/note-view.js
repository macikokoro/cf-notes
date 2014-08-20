var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $; // Set the Backbone jQuery to *our* jQuery

var NoteView = Backbone.View.extend({
	tagName: 'div', // The default; we don't really have to say this unless we don't want a div
	initialize: function() {
		// Called whenever we create a new instance
		this.render();
	},
	render: function() {
		var template = require('../templates/basic-note-template.hbs');
		var data = this.model.attributes; // i.e., note body, and whatever else we set
		this.$el.html(template(data)); // Uses jQuery's html function
		return this; // Whoa, we have to return `this`!
	}
});

module.exports = NoteView;