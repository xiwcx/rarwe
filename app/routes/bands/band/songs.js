import Route from '@ember/routing/route';

export default Route.extend({
  resetController(controller) {
    controller.setProperties({
      isAddingSong: false,
      newSongTitle: ''
    })
  },

  actions: {
    didTransition() {
      let band = this.modelFor('bands.band');

      document.title = `${band.get('name')} songs - Rock & Roll`;
    }
  }
});
