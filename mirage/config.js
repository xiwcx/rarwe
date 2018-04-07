export default function() {
  this.get('/bands');
  this.post('/bands');
  this.get('/bands/:id');
  this.get('/bands/:id/songs', function(schema, request) {
    let band = schema.bands.find(request.params.id);
    return band.songs;
  });
  this.get('/songs');
  this.post('/songs');
  this.get('/songs/:id');
}
