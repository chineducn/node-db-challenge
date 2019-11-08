
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('task').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('task').insert([
        {description: 'Deploy to site', project_id: 1, notes: 'Ensure right tools are deployed'},
        {description: 'Dig foundation', project_id: 1, notes: 'Do not go too deep, resources are limited'},
        {description: 'Change design', project_id: 1, notes: 'Last minute changes are the best'},
        {description: 'Identify local community', project_id: 2, notes: 'This has to be done just before election'},
        {description: 'Deploy drill', project_id: 2, notes: 'Make deployment as splashy as possible'},
        {description: 'Commisioning', project_id: 2, notes: 'Invite all heavyweights in the party'},
        {description: 'Buy seeds', project_id: 3, notes: 'Ensure seeds are from the deluxe team'},
        {description: 'Dig the hole', project_id: 3, notes: 'Probably use the drilling machine to make it faster'},
        {description: 'Dump seeds in hole', project_id: 3, notes: 'Just throw them in, bite me'},
        {description: 'Meet the rep', project_id: 4},
        {description: 'Threaten', project_id: 4},
        {description: 'Present duffel bag', project_id: 4},
      ]);
    });
};
