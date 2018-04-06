import Route from '@ember/routing/route';

export default Route.extend({
  resetController(controller) {
    controller.setProperties({
      isEditing: false
    })
  },

  actions: {
    willTransition(transition) {
      if (this.get('controller.isEditing')) {
        let leave = window.confirm('Are you sure?');

        if (!leave) {
          transition.abort();
        }
      }
    }
  }
});
