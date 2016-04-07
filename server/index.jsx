'use strict';
var hook = require('css-modules-require-hook');

hook({
  generateScopedName: '[path][name]__[local]___[hash:base64:5]',
});
require('babel/register')({ignore: /.css$/});

var server = require('./main.jsx');
var PORT = process.env.PORT || 3000;
server.listen(PORT, function () {
  console.log('Server listening on', PORT);
});
