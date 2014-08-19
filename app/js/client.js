var Note = require('./notes/models/note');

var note = new Note();
note.set('noteBody', 'wow such note, so words');
note.set('awesomeFactor', '10 billion');

console.log(note.get('noteBody'));
console.log(note);

note.save({}, {
	success: function(res) {
		console.log('success!');
		console.log(res);
	},
	error: function(err) {
		console.log('error');
		console.log(err);
	}
});