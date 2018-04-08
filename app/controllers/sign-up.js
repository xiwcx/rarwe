import Controller from '@ember/controller';

export default Controller.extend({
  actions: {
    async signUp(event) {
      event.preventDefault();
      let { email, password } = this.getProperties('email', 'password');
      let user = this.get('store').createRecord('user', { email, password });
      await user.save();
      await this.transitionToRoute('login');
    }
  }
});
