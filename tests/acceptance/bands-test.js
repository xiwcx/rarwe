import { module, test } from 'qunit';
import { createBand, loginAs } from 'rarwe/tests/helpers/custom-helpers';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Bands', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List bands', async function(assert) {
    server.create('band', {name: 'Radiohead'});
    server.create('band', {name: 'Long Distance Calling'});

    await loginAs('dave@tcv.com');
    await visit('/');

    assert.dom('[data-test-rr=band-list-item]').exists({count: 2}, 'All band links are rendered');
    assert.dom('[data-test-rr=band-list-item]:first-child').hasText('Radiohead', 'First band link contains the band name');
    assert.dom('[data-test-rr=band-list-item]:last-child').hasText('Long Distance Calling', 'Second band link contains the band name');
  });

  test('Create a band', async function(assert) {
    server.create('band', {name: 'Royal Blood'});

    await loginAs('dave@tcv.com');
    await visit('/');
    await createBand('Caspian');

    assert.dom('[data-test-rr=band-list-item]').exists({count: 2}, 'All band links are rendered');
    assert.dom('[data-test-rr=band-list-item]:last-child').hasText('Caspian', 'The new band link is rendered as the last item');
    assert.dom('[data-test-rr=songs-nav-item] > .active').hasText('Songs'), 'The songs tab is active';
  });

  test('Visit landing page without signing in', async function(assert) {
    await visit('/');

    assert.dom('[data-test-rr=form-header]').hasText('Log in to R&R');
    assert.dom('[data-test-rr=user-email]').doesNotExist();
  })
});
