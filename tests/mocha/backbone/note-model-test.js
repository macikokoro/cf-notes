var chai = require('chai');
var Backbone = require('backbone');
var sinon = require('sinon'); // Can tell us what functions of a library have been called
var expect = chai.expect;

var Note = require('../../../app/js/notes/models/note');

describe('Backbone Note', function() {
    // We're making sure it behaves like Backbone

    var note;
    before(function(done) {
        this.mock = sinon.mock(Backbone);
        note = new Note();
        done();
    });

    it('Should be a backbone object', function(done) {
        note.set('noteBody', 'a test note');
        expect(note).to.be.ok;
        expect(note.get('noteBody')).to.eql('a test note');
        done();
    });

    it('Should talk with the api on save', function(done) {
        // Checks for the args we expect, not the entire AJAX request
        this.mock.expects('ajax').withArgs(sinon.match({type: "POST", url: '/api/v_0_0_1/notes'})); 
        note.save();
        done();
    });

    after(function() {
        this.mock.verify(); // Verify is specific to mock; all else is restore
    });
});