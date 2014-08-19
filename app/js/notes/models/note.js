//Backbone Note model
var Backbone = require('backbone');
Backbone.$ = require('jquery');

var Note = Backbone.Model.extend({
	url: '/api/v_0_0_1/notes',
	idAttribute: '_id',
	defaults : {
		noteBody: ''
	} 
});

module.exports = Note;