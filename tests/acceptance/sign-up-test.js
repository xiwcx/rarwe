import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | sign up', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /sign-up', async function(assert) {
    await visit('/sign-up');

    assert.equal(currentURL(), '/sign-up');
  });
});
