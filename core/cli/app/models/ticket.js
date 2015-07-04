import DS from 'ember-data';

var Ticket = DS.Model.extend({
  title: DS.attr('string'),
  description: DS.attr('string'),
  requester: DS.belongsTo('account', {async: true}),
  /*watcher : DS.hasMany('account'),
  assignment: DS.hasMany('account'),
  type: DS.attr('string'),
  status: DS.attr('string'),
  priority: DS.attr('string'),
  author: DS.attr('string'),
  createdAt: DS.attr('date'),
  closedAt: DS.attr('date'),
  expiredAt: DS.attr('date'),
  tags: DS.attr('string'),
  file: DS.attr('string')*/
});

Ticket.reopenClass({
  FIXTURES : [
    {'id':1, 'title':'Pqa Caceta', 'description':'Ember Rocks! 1', 'requester':1},
    //{'id':1, 'title':'Pqa Caceta', 'description':'Ember Rocks! 1'}
  ]
});

export default Ticket;
