import express from 'express';
import path from 'path';
import open from 'open';
import webpack from 'webpack';
import config from '../webpack.config.dev';

/* eslint-disable no-console */

const port = 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});

//any references to the root should be handle by this function, whitch takes an request and response
//('/') - request an root
app.get('/', function(req, res) {
	//__dirname means 'The directory of this script'.
	res.sendFile(path.join(__dirname, '../src/index.html'));
	//sending the file in index.html
	console.log(__dirname);
});


app.listen(port, function(err) {
	if(err){
		console.log(err);
	}else {
		//open the aplication on this adress, on this port
		open('http://localhost:' + port);
	}
});
