import Controller from '@ember/controller';
import Song from 'rarwe/models/band';
import { empty } from '@ember/object/computed';

export default Controller.extend({
  isAddingSong: false,
  newSongTitle: '',
  isAddButtonDisabled: empty('newSongTitle'),

  actions: {
    addSong() {
      this.set('isAddingSong', true);
    },

    cancelAddSong() {
      this.set('isAddingSong', false);
    },

    saveSong(event) {
      let newSong = Song.create({ title: this.get('newSongTitle')});

      event.preventDefault();

      this.get('model.songs').pushObject(newSong);
      this.set('newSongTitle', '');
    },
  }
});
