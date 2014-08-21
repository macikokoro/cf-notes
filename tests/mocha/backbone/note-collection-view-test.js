var chai = require('chai');
var sinon = require('sinon');
var expect = chai.expect;

var Note = require('../../../app/js/notes/models/note');
var NotesCollectionView = require('../../../app/js/notes/views/notes-collection-view');
var NotesCollection = require('../../../app/js/notes/collections/notes-collection');

describe('Backbone NotesCollectionView', function() {
  before(function() {
    sinon.spy(NotesCollectionView.prototype, 'render');
    sinon.spy(NotesCollectionView.prototype, 'addAll');
    sinon.spy(NotesCollectionView.prototype, 'addNote');
    this.collection = new NotesCollection();
    this.view = new NotesCollectionView({collection: this.collection});
  });

  it('should have called render on creation', function(done) {
    expect(NotesCollectionView.prototype.render.called).to.be.true;
    done();
  });

  it('should call addall on a reset', function(done) {
    this.collection.reset();
    expect(NotesCollectionView.prototype.addAll.calledTwice).to.be.true;
    done();
  });

  it('should call addNote', function(done) {
    this.collection.add(new Note());
    expect(NotesCollectionView.prototype.addNote.called).to.be.true;
    done();
  });

  it('should not have a blank $el', function(done) {
    expect(this.view.el).to.not.eql('');
    done();
  });

  after(function() {
    NotesCollectionView.prototype.render.restore();
    NotesCollectionView.prototype.addAll.restore();
    NotesCollectionView.prototype.addNote.restore();
  });
});