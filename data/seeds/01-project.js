
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('project').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('project').insert([
        {name: 'Build house', description: 'Building a majestic house'},
        {name: 'Dig borehole', description: 'Digging an impressive well of water'},
        {name: 'Plant trees', description: 'Pretending to delay global warming'},
        {name: 'Lobbying'}
      ]);
    });
};
