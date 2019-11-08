
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resource').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('resource').insert([
        {name: 'Hammer'},
        {name: 'Drill', description: 'For drilling'},
        {name: 'Saw' },
        {name: 'Tape' },
        {name: 'Chroma', description: 'For measuring gas levels' },
        {name: 'Laptop', description: 'For looking important' },
        {name: 'Cold Hard Cash', description: 'I plead the fifth'},
        {name: 'Duffel bag', description: 'For packing the cold hard cash' },
        {name: 'Armani Suit', description: 'You ask too many questions'}
      ]);
    });
};
