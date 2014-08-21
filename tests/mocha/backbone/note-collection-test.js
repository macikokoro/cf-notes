var Backbone = require('backbone');
var sinon = require('sinon');

var NoteCollection = require('../../../app/js/notes/collections/notes-collection');

describe('Backbone Note Collection', function() {
  var noteCollection;
  before(function(done) {
    this.mock = sinon.mock(Backbone);
    noteCollection = new NoteCollection();
    done();
  });

  it('should talk with the api on a fetch', function(done) {
    this.mock.expects('ajax').withArgs(sinon.match({type: 'GET', url: '/api/v_0_0_1/notes'}));
    noteCollection.fetch();
    done();
  });

  after(function() {
    this.mock.verify();
  });
});