import DS from 'ember-data';
import { dasherize } from '@ember/string';

const { Model, attr, hasMany } = DS;

export default Model.extend({
  name: attr('string'),
  description: attr('string'),
  songs: hasMany()
});
