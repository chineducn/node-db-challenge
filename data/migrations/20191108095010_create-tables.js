
exports.up = function(knex) {
    return knex
        .schema
        .createTable('project', tbl => {
            tbl
                .increments();
            tbl
                .string('name')
                .notNullable();
            tbl
                .string('description')
            tbl
                .boolean('completed')
                .notNullable()
                .defaultTo(0)
        })
        .createTable()
        .createTable()
        .createTable()
};

exports.down = function(knex) {
    return knex
        .schema
        .dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
