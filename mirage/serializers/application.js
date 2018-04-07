import { JSONAPISerializer } from 'ember-cli-mirage';

export default JSONAPISerializer.extend({
  links(band) {
    return {
      songs: {
        related: `/bands/${band.id}/songs`
      }
    };
  }
});
