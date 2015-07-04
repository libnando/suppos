import DS from 'ember-data';

var Account = DS.Model.extend({
  email: DS.attr('string')
});

Account.reopenClass({
  FIXTURES : [
    {'id':1, 'email':'absldasb@fdsfas.com'},
    {'id':2, 'email':'cacacaasb@fdsfas.com'},
  ]
});

export default Account;
