var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon');
var expect = chai.expect;

var NoteView = require('../../../app/js/notes/views/note-view');
console.log('NoteView: ' + NoteView);

describe('Backbone note view', function() {
	before(function(done) {
		sinon.spy(NoteView.prototype, 'render'); // Set a "spy" before we do anything: it keeps track of how often it's called, and with which arguments
		done();
	});

	it('Should call render on creation', function(done) {
		this.noteView = new NoteView({model: Backbone.Model.extend({})});
		expect(NoteView.prototype.render.called).to.be.true;
		done();
	});

	it('Should not be empty', function(done) {
		console.log(this);
		expect(this.noteView.$el).to.not.eql('');
		done();
	})
});

after(function(done){
	NoteView.prototype.render.restore();
	done();
});