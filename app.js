const express = require('express');
const app = express();

app.get('/', (req, res, next) => {
	res.sendFile('index.html', {root: __dirname + '/public'}, (err) => {
		if (err) return next(err);
	});
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
});

module.exports = app;
