var server = require('../../server');
var chai = require('chai');
var chaihttp = require('chai-http');

chai.use(chaihttp);
var expect = chai.expect;

console.log('PORT: ' + server.port);

describe('noteRoutes', function() {
	var id;
	it('creates a new note', function(done) {
		chai.request('localhost:' + server.port)
		.post('/api/v_0_0_1/notes')
		.req(function(req) { // <= .req lets us send a JSON object to this request
			req.send({'noteBody': 'my new note'});
		})
		.res(function(res) {
			expect(res).to.have.status(200);
			expect(res.body).to.have.property('_id');
			expect(res.body.noteBody).to.eql('my new note');
			id = res.body._id;
			done();
		});
	});

	it('gets all notes', function(done) { // <= Note that this sohws up as one test!
		chai.request('localhost:' + server.port)
		.get('/api/v_0_0_1/notes')
		.res(function(res) {
			expect(res).to.have.status(200); // Start simple; get specific
			expect(Array.isArray(res.body)).to.be.true; // It's an array b/c we're getting all the notes
			expect(res.body[0]).to.have.property('noteBody');
			done();
		});
	});

	it('gets a single note', function(done) {
		chai.request('localhost:' + server.port)
		.get('/api/v_0_0_1/notes/' + id)
		.res(function(res) {
			expect(res).to.have.status(200);
			expect(res.body.noteBody).to.eql('my new note');
			expect(res.body._id).to.eql(id);
			done();
		});
	});

	it('updates a note', function(done) {
		chai.request('localhost:' + server.port)
		.put('/api/v_0_0_1/notes/' + id)
		.req(function(req) {
			req.send({'noteBody': 'an updated note!'});
		})
		.res(function(res) {
			expect(res).to.have.status(200);
			expect(res.body.noteBody).to.eql('an updated note!');
		});
		done();
	});

	it('deletes a note', function(done) {
		chai.request('localhost:' + server.port)
		.del('/api/v_0_0_1/notes/' + id)
		.res(function(res) {
			expect(res).to.have.status(200);
			expect(res.body.msg).to.eql('deleted');
			done();
		});
	});
});