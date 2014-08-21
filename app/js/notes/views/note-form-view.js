var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
	events: {
		'submit': 'save' // Since there's only one submit in the form
	},
	initialize: function() {
		this.render();
	},
	render: function() {
		var template = require('../templates/note-form.hbs');
		var data = this.model.attributes;
		this.$el.html(template(data));
		return this;
	},
	save: function(e) { // <=  e is the event that triggered it
		e.preventDefault();
		var newNoteBody = this.$('input[name=noteBody]').val();
		this.model.save({noteBody: newNoteBody}, {
			success: function() {
				Backbone.history.navigate('notes', {trigger: true}); // Necessary to actually *go* to the page
			},
			error: function() {
				console.log('error');
			}
		})
	}
});