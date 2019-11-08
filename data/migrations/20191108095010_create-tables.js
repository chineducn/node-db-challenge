
exports.up = function(knex) {
  
};

exports.down = function(knex) {
    return knex
        .schema
        .dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
