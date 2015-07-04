import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('dashboard');
  this.route('tickets');
  /*this.resource("tickets", function() {
    this.route("new");
  });*/
  this.route('accounts');
});

export default Router;
