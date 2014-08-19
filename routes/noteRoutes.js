var Note = require('../models/note');
var fs = require('fs');

module.exports = function(app) {

	// app.get('/', function(req, res) {
	// 	return res.status(200).send('Hi');
	// });

	var baseUrl = '/api/v_0_0_1/notes';

	// A
	app.get(baseUrl, function(req, res) {
		Note.find({}, function(err, notes) {
			if (err) return res.status(500).json(err);
			return res.json(notes);
		});
	});

	// C
	app.post(baseUrl, function(req, res) {
		var note = new Note(req.body);
		note.save(function(err, resNote) { // Mongoose is what supplies .save()
			if (err) return res.status(500).json(err);
			return res.status(200).json(resNote);
		});
	});

	// R
	app.get(baseUrl + '/:id', function(req, res) {
		Note.findOne({'_id': req.params.id}, function(err, note) {
			if (err) return res.status(500).json(err);
			return res.json(note);
		});
	});

	// U
	app.put(baseUrl + '/:id', function(req, res) {
		var note = req.body;
		delete note._id;
		Note.findOneAndUpdate({'_id': req.params.id}, note, function(err, resNote) {
			if (err) return res.status(500).json(err);
			return res.status(200).json(resNote);
		});
	});

	// D
	app.delete(baseUrl + '/:id', function(req, res) {
		Note.remove({'_id': req.params.id}, function(err, resNote) {
			if (err) return res.status(500).json(err);
			return res.status(200).json({
				'msg': 'deleted'
			});
		});
	});
};