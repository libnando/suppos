/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp();

app.import('bower_components/bootstrap/dist/css/bootstrap.min.css');
app.import('bower_components/jquery/dist/jquery.min.js');
app.import('bower_components/bootstrap/dist/js/bootstrap.min.js');

module.exports = app.toTree();
