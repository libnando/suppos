import Ember from 'ember';

var auth = Ember.Object.extend({
  authed: false,
  username: '',
  init: function() {
    this.set('authed', true);
    this.set('username', "admin");
    this.authClient = this;
  },
  logout: function() {
    this.authClient.logout();
	this.set('authed', false);
  }
});

export default {
  name: 'Auth',

  initialize: function( container, app ) {
        app.register('auth:main', auth, {singleton: true});
        app.inject('controller', 'auth', 'auth:main');
        app.inject('route', 'auth', 'auth:main');

  }
};
