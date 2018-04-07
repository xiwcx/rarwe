import { module, test } from 'qunit';
import { createSong } from 'rarwe/tests/helpers/custom-helpers';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | Songs', function(hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('List songs', async function(assert) {
    server.create('band', {name: 'Radiohead', id: 1});
    server.create('song', {title: 'Creep', bandId: 1});
    server.create('song', {title: 'Karma Police', bandId: 1});

    await visit('/bands/1/');

    assert.dom('[data-test-rr=song-list-item]').exists({count: 2}, 'Songs are rendered');
    assert.dom('[data-test-rr=song-list-item]:first-child').hasText('Creep', 'First song exists');
    assert.dom('[data-test-rr=song-list-item]:last-child').hasText('Karma Police', 'Second song exists');
  });

  test('Create a song', async function(assert) {
    server.create('band', {name: 'Radiohead', id: 1});
    server.create('song', {title: 'Creep', bandId: 1});

    await visit('/bands/1/');

    await createSong('Karma Police');

    assert.dom('[data-test-rr=song-list-item]').exists({count: 2}, 'All band songs are rendered');
    assert.dom('[data-test-rr=song-list-item]:last-child').hasText('Karma Police'), 'Newest song is correct';
  })
});
