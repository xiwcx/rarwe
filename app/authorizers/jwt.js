import Base from 'ember-simple-auth/authorizers/base';
import { isEmpty } from '@ember/utils';

export default Base.extend({
  authorize(data, block) {
    let token = data.token;

    if(!isEmpty(token)) {
      block('Authorization', `Bearer ${token}`);
    }
  }
});
