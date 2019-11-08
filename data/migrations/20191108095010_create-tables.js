
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
                .string('description');
            tbl
                .boolean('completed')
                .notNullable()
                .defaultTo(0);
        })
        .createTable('resource', tbl => {
            tbl
                .increments();
            tbl
                .string('name')
                .notNullable();
            tbl
                .string('description');

        })
        .createTable('task', tbl => {
            tbl
                .increments();
            tbl
                .string('description')
                .notNullable();
            tbl
                .string('notes');
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project');
            tbl
                .boolean('completed')
                .notNullable()
                .defaultTo(0);
        })
        .createTable('project_resource', tbl => {
            tbl
                .integer('project_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('project');
            tbl
                .integer('resource_id')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('resource');
            tbl.primary(['project_id', 'resource_id']);
        })
};

exports.down = function(knex) {
    return knex
        .schema
        .dropTableIfExists('project_resource')
        .dropTableIfExists('task')
        .dropTableIfExists('resource')
        .dropTableIfExists('project')
};
