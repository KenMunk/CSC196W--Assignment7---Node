'use strict';

const express = require('express');
const app = express();

// define endpoint for exercise 1 here
// define endpoint for exercise 2 here
app.get('/hello', function (req, res) {
    res.type('text');
    res.send('Hello World! -Ken Munk');
	
});

app.get('/hello/name', function(req, res) {
	if(req.query['first'] && req.query['last']){
		
		res.type('text');
		res.send
		(
			'Hello ' +
			req.query['first'] + 
			' ' +
			req.query['last'] +
			'!'
		);
	}
	else{
		let missingFirst = 'first';
		let missingLast = 'last';
		let missingCount = 2;
		let separator = ',';
		
		if((req.query['first'])){
			missingFirst = '';
			missingCount--;
		}
		if((req.query['last'])){
			missingLast = '';
			missingCount--;
		}
		
		if(missingCount < 2){
			separator = '';
		}
		
		res.type('text');
		res.send
		(
			'Missing Required GET parameters: ' +
			missingFirst +
			separator +
			missingLast
		);
	}
	
	
});


app.use(express.static('public'));
const PORT = process.env.PORT || 8000;
app.listen(PORT);